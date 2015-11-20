var PhotoIndexPreview = React.createClass({

  getInitialState: function () {
    return { photos: PhotosStore.all() };
  },

  componentDidMount: function () {
    PhotosStore.addChangeListener(this._photosChanged);
    ApiUtil.fetchPhotos(this.props.album.id);
  },

  _photosChanged: function () {
    this.setState({ photos: PhotosStore.all() });
  },

  componentWillUnmount: function () {
    PhotosStore.removeChangeListener(this._photosChanged);
  },

  render: function () {

    var Link = ReactRouter.Link;
    var toRender;

    if (this.state.photos.length > 0) {
      toRender = (
        <div>
          <ul className="photo-index-preview group">
            {this.state.photos.map(function (photo) {
                return (<PhotoThumbnail key={photo.id} photo={photo} />);
              })
            }
          </ul>
        </div>
      );
    } else {
      toRender = (
        <div>
          <div className="empty-photo-index-preview">No photos here yet!</div>
        </div>
      );
    }

    return (
      toRender
    );
  }

});
