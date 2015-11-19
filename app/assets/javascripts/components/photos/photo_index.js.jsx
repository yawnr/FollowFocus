var PhotoIndex = React.createClass({

  getInitialState: function () {
    return { photos: PhotoStore.all() };
  },

  componentDidMount: function () {
    PhotoStore.addChangeListener(this._photosChanged);
    ApiUtil.fetchPhotos(this.props.album.id);
  },

  _photosChanged: function () {
    this.setState({ photos: PhotoStore.all() });
  },

  componentWillUnmount: function () {
    PhotoStore.removeChangeListener(this._photosChanged);
  },

  render: function () {

    var Link = ReactRouter.Link;
    var toRender;

    if (this.state.photos.length > 0) {
      toRender = (
        <div>
          <ul className="photo-index">
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
          <div className="empty-photo-index">No photos here yet!</div>
        </div>
      );
    }

    return (
      toRender
    );
  }

});
