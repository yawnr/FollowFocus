var Photo = React.createClass({

  mixins: [ReactRouter.History],

  prevPic: "",
  nextPic: "",

  componentWillMount: function () {
    ApiUtil.fetchPhoto(parseInt(this.props.routeParams.photoId));
    ApiUtil.fetchAlbumPhotos(parseInt(this.props.routeParams.albumId));
    PhotoStore.addChangeListener(this._onChange);
    PhotosStore.addChangeListener(this._onChange);
  },

  getInitialState: function () {
    return { photo: {} };
  },

  componentDidMount: function () {
    document.addEventListener('touchstart', this.handleTouchStart, false);
    document.addEventListener('touchmove', this.handleTouchMove, false);
    var xDown = null;
    var yDown = null;
  },

  handleTouchStart: function (evt) {
    xDown = evt.touches[0].clientX;
    yDown = evt.touches[0].clientY;
  },

  handleTouchMove: function (evt) {
    var toClick;

    if ( ! xDown || ! yDown ) {
        return;
    }

    var xUp = evt.touches[0].clientX;
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;

    if ( Math.abs( xDiff ) > Math.abs( yDiff * 4 )) {/*most significant*/
        if ( xDiff > 0 ) {
          toClick = document.getElementsByClassName("prev-photo");
          toClick[0].click();
        } else {
            /* right swipe */
          toClick = document.getElementsByClassName("next-photo");
          toClick[0].click();
        }
    } else {
        if ( yDiff > 0 ) {
            /* up swipe */
        } else {
            /* down swipe */
        }
    }
    /* reset values */
    xDown = null;
    yDown = null;
  },

  componentWillUnmount: function () {
    $("LINK[rel*='prefetch']").remove();
    PhotoStore.removeChangeListener(this._onChange);
    PhotosStore.removeChangeListener(this._onChange);
  },

  _onChange: function (photo) {
    if (PhotosStore.all().length === 0) {
      ApiUtil.fetchAlbumPhotos(parseInt(this.props.routeParams.albumId));
    }

    if (photo === undefined) {
      this.setState({ photo: PhotoStore.photo() });
    } else {
      this.setState({ photo: photo });
    }
  },

  componentWillReceiveProps: function (newParams) {
    $(".full-size-photo").css('opacity', 0);
    var newPhoto = PhotosStore.findById(parseInt(newParams.params.photoId));
    PhotoStore.resetPhoto(newPhoto);
    this.setState({ photo: newPhoto });
  },

  _prevPhoto: function () {
    if (PhotosStore.all().length > 1) {
      $(".spinner").removeClass("no-show");
      $(".full-size-photo").addClass("no-show");
      var newIdx = PhotosStore.all().indexOf(this.state.photo) - 1;
      if ( newIdx < 0 ) {
        newIdx = PhotosStore.all().length - 1;
      }

      var newPhotoId = PhotosStore.all()[newIdx].id;
      this.history.pushState(null, "/albums/" + this.state.photo.album_id + "/photos/" + newPhotoId, {});
    }
  },

  _nextPhoto: function () {
    if (PhotosStore.all().length > 1) {
      $(".spinner").removeClass("no-show");
      $(".full-size-photo").addClass("no-show");
      var newIdx = PhotosStore.findIndexInStore(this.state.photo.id) + 1;
      if ( newIdx > (PhotosStore.all().length - 1) ) {
        newIdx = 0;
      }

      var newPhotoId = PhotosStore.all()[newIdx].id;
      this.history.pushState(null, "/albums/" + this.state.photo.album_id + "/photos/" + newPhotoId, {});
    }
  },

  prefetchUrls: function () {
    var nextIdx = PhotosStore.all().indexOf(this.state.photo) + 1;
    if ( nextIdx > (PhotosStore.all().length - 1) ) {
      nextIdx = 0;
    }
    this.nextPic = PhotosStore.all()[nextIdx].large;

    var prevIdx = PhotosStore.all().indexOf(this.state.photo) - 1;
    if ( prevIdx < 0 ) {
      prevIdx = PhotosStore.all().length - 1;
    }
    this.prevPic = PhotosStore.all()[prevIdx].large;

    return [this.prevPic, this.nextPic];
  },

  addPrefetchTags: function () {
    $("LINK[rel*='prefetch']").remove();
    if (PhotosStore.all().length > 1) {
      this.prefetchUrls().forEach(function (url) {
        $("<link />", {
          rel: "prefetch", href: url
        }).appendTo("head");
      });
    }
  },

  bigger: function () {
    $('.full-size-photo').toggleClass('bigger');
    $('.parent-container').toggleClass('hovered');
    $('.modal').toggleClass('no-show');
    $('.modal').toggleClass('active');
  },

  imageLoaded: function () {
    $(".spinner").addClass("no-show");
    $(".full-size-photo").removeClass("no-show");
    $(".full-size-photo").animate({opacity: 1}, 100);
  },

  render: function () {

    var photoMap;

    if (this.state.photo.id && this.state.photo.lat !== 0) {
      photoMap = (
          <PhotoMap photo={this.state.photo} />
      );
    } else {
      photoMap = (
          <div className="empty-photo-map">
            <div className="empty-map-text">Zoinks! No map data for this photo.</div>
          </div>
      );
    }

    var toRender;

    if (this.state.photo.id) {
      this.addPrefetchTags();

      toRender = (
        <section>
          <div className="modal no-show" style={{ width: window.innerWidth, height: window.innerHeight, position: "absolute", zIndex: "101" }}></div>
          <div className="parent-container">
            <div className="photo-container">
            <a href={"#/albums/" + this.state.photo.album_id} className="back-to-album">← Back to Album</a>
              <div className="prev-photo" onClick={this._prevPhoto}><strong className="prev-photo-text">PREV</strong></div>
              <div className="next-photo" onClick={this._nextPhoto}><strong className="next-photo-text">NEXT</strong></div>
              <div className="spinner" style={{backgroundImage: 'url(' + window.FollowFocus.images.spinner + ')'}} />
              <img className="full-size-photo no-show" src={this.state.photo.large} onClick={this.bigger} onLoad={this.imageLoaded} />
              <a href={this.state.photo.photo_attachment_url} className="view-original">View Full Size ⊕</a>
            </div>
          </div>

          <div className="map-and-exif group">
            {photoMap}
            <ExifDetails className="group" photo={this.state.photo} />
          </div>

          <div className="tags-section">
            <TagForm photo={this.state.photo}/>
            <TagIndex photo={this.state.photo}/>
          </div>

          <div className="comments-section">
            <CommentForm photo={this.state.photo}/>

            <br />

            <CommentIndex photo={this.state.photo}/>
          </div>

        </section>
      );
    } else {
      toRender = (<div className="parent-container"></div>);
    }

    return (<div>{toRender}</div>);

  }

});
