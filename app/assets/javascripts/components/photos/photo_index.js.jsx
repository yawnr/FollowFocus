var PhotoIndex = React.createClass({

  // getInitialState: function () {
  //   return { photos: [] };
  // },
  //
  // componentDidMount: function () {
  //   PhotosStore.addChangeListener(this._photosChanged);
  //   ApiUtil.fetchAlbumPhotos(this.props.album.id);
  // },
  //
  // _photosChanged: function () {
  //   this.setState({ photos: PhotosStore.all() });
  // },
  //
  // componentWillUnmount: function () {
  //   PhotosStore.removeChangeListener(this._photosChanged);
  // },
  //
  // componentWillReceiveProps: function (newParams) {
  //   ApiUtil.fetchAlbumPhotos(newParams.params.albumId);
  // },

  render: function () {

    return(
      <div>
        <ul className="photo-index group">
          {this.props.photos.map(function (photo) {
              return (<PhotoThumbnail key={photo.id} photo={photo} />);
            })
          }
        </ul>
      </div>
    );
  }

});
