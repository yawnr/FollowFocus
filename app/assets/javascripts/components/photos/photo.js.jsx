var Photo = React.createClass({

  componentWillMount: function () {
    ApiUtil.fetchPhoto(parseInt(this.props.routeParams.photoId));
    PhotoStore.addChangeListener(this._onChange);
    PhotosStore.addChangeListener(this._onChange);
  },

  getInitialState: function () {
    return { photo: PhotoStore.photo() };
  },

  _onChange: function (photo) {
    if (PhotosStore.all().length === 0) {
      ApiUtil.fetchPhotos(parseInt(this.state.photo.album_id));
    }

    if (photo === undefined) {
      this.setState({ photo: PhotoStore.photo() });
    } else {
      this.setState({ photo: photo });
    }
  },

  _prevPhoto: function () {
    var photo;
    var newIdx = PhotosStore.all().indexOf(this.state.photo) - 1;

    if ( newIdx < 0 ) {
      newIdx = PhotosStore.all().length - 1;
    }

    this._onChange(PhotosStore.all()[newIdx]);
  },

  _nextPhoto: function () {
    var photo;
    var newIdx = PhotosStore.findIndexInStore(this.state.photo) + 1;

    if ( newIdx > (PhotosStore.all().length - 1) ) {
      newIdx = 0;
    }

    this._onChange(PhotosStore.all()[newIdx]);
  },

  render: function () {
    console.log(PhotosStore.all());
    var toRender;

    if (this.state.photo) {
      toRender = (
        <section>


          <div className="parent-container">
            <strong className="prev-photo" onClick={this._prevPhoto}>PREV</strong>
            <strong className="next-photo" onClick={this._nextPhoto}>NEXT</strong>
            <div className="photo-container">
              <img className="full-size-photo" src={this.state.photo.url} />
            </div>
          </div>

          <div>
            <CommentForm photo={this.state.photo}/>

            <br />

            <CommentIndex photo={this.state.photo}/>
          </div>
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
