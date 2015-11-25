var Photo = React.createClass({

  mixins: [ReactRouter.History],

  componentWillMount: function () {
    ApiUtil.fetchPhoto(parseInt(this.props.routeParams.photoId));
    ApiUtil.fetchAlbumPhotos(parseInt(this.props.routeParams.albumId));
    PhotoStore.addChangeListener(this._onChange);
    PhotosStore.addChangeListener(this._onChange);
  },

  getInitialState: function () {
    return { photo: PhotoStore.photo() };
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
    var newPhoto = PhotosStore.findById(parseInt(newParams.params.photoId));
    PhotoStore.resetPhoto(newPhoto);
    // PhotoMap._setupMap();
    this.setState({ photo: newPhoto });
  },

  _prevPhoto: function () {
    var photo;
    var newIdx = PhotosStore.all().indexOf(this.state.photo) - 1;
    if ( newIdx < 0 ) {
      newIdx = PhotosStore.all().length - 1;
    }

    var newPhotoId = PhotosStore.all()[newIdx].id;
    this.history.pushState(null, "/albums/" + this.state.photo.album_id + "/photos/" + newPhotoId, {});

    // this._onChange(PhotosStore.all()[newIdx]);
  },

  _nextPhoto: function () {
    var photo;
    var newIdx = PhotosStore.findIndexInStore(this.state.photo.id) + 1;
    if ( newIdx > (PhotosStore.all().length - 1) ) {
      newIdx = 0;
    }

    var newPhotoId = PhotosStore.all()[newIdx].id;
    this.history.pushState(null, "/albums/" + this.state.photo.album_id + "/photos/" + newPhotoId, {});
    // this._onChange(PhotosStore.all()[newIdx]);
  },

  render: function () {

    var toRender;

    if (this.state.photo.id) {
      toRender = (
        <section>


          <div className="parent-container">
            <div className="photo-container">
              <div className="prev-photo" onClick={this._prevPhoto}><strong className="prev-photo-text">PREV</strong></div>
              <div className="next-photo" onClick={this._nextPhoto}><strong className="next-photo-text">NEXT</strong></div>
              <img className="full-size-photo" src={this.state.photo.photo_attachment_url}/>
            </div>
          </div>

          <div>
            <CommentForm photo={this.state.photo}/>

            <br />

            <CommentIndex photo={this.state.photo}/>
          </div>

          <ExifDetails photo={this.state.photo} />
          <PhotoMap photo={this.state.photo} />

        </section>
      );
    } else {
      toRender = (<div className="parent-container"></div>);
    }

    return(
      toRender
    );
  }

});
