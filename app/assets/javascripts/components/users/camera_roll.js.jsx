CameraRoll = React.createClass({

  getInitialState: function () {
    return { photos: PhotosStore.all() };
  },

  componentDidMount: function () {
    PhotosStore.addChangeListener(this._onChange);
    UserUtil.fetchUserPhotos(this.props.user.id);
  },

  componentWillUnmount: function () {
    PhotosStore.removeChangeListener(this._onChange);
  },

  componentWillReceiveProps: function (newParams) {
    UserUtil.fetchUserPhotos(newParams.user.id);
  },

  _onChange: function () {
    this.setState({ photos: PhotosStore.all() });
  },

  render: function () {
      return(
        <div className="group">
          <ul className="group">
            {this.state.photos.map(function (photo) {
              return <PhotoThumbnail photo={photo} />;
            })}
          </ul>
        </div>
      );
    }

});
