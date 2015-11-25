var Album = React.createClass({

  getInitialState: function () {
    return { album: AlbumStore.findById(parseInt(this.props.params.albumId)), photos: [] };
  },

  componentDidMount: function () {
    PhotosStore.addChangeListener(this._photosChanged);
    ApiUtil.fetchAlbumPhotos(this.props.params.albumId);
  },

  _photosChanged: function () {
    this.setState({ album: AlbumStore.findById(parseInt(this.props.params.albumId)), photos: PhotosStore.all() });
  },

  componentWillUnmount: function () {
    PhotosStore.removeChangeListener(this._photosChanged);
  },

  componentWillReceiveProps: function (newParams) {
    ApiUtil.fetchAlbumPhotos(newParams.params.albumId);
  },


  render: function () {

    if (!this.state.album) {return <div></div>;}

    var isOwner = (this.state.album && this.state.album.user_id == window.FollowFocus.currentUser.id);

    var toRender;

    if (this.state.photos.length > 0) {
      return (
        <div>
          <div>
            <ProfilePhoto user={UserStore.user()} />
          </div>

          <h3>{this.state.album.title}</h3>
          <UploadToAlbumForm album={this.state.album} isOwner={isOwner}/>
          <PhotoIndex photos={this.state.photos} />
        </div>
      );
    } else {
      return (
        <div>
          <div>
            <ProfilePhoto user={UserStore.user()} />
          </div>

          <h3>{this.state.album.title}</h3>
          <UploadToAlbumForm album={this.state.album} isOwner={isOwner}/>
        </div>
      );
    }
  }

});
