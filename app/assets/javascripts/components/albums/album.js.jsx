var Album = React.createClass({

  getInitialState: function () {
    return { album: AlbumStore.findById(parseInt(this.props.params.albumId)), photos: [] };
  },

  componentDidMount: function () {
    AlbumStore.addChangeListener(this._albumChanged);
    ApiUtil.fetchAlbum(this.props.params.albumId);
  },

  _albumChanged: function () {
    PhotosStore.addChangeListener(this._photosChanged);
    ApiUtil.fetchAlbumPhotos(this.props.params.albumId);
  },

  _photosChanged: function () {
    UserStore.addChangeListener(this._allReady);
    UserUtil.fetchUser(AlbumStore.all()[0].user_id);
  },

  _allReady: function () {
    this.setState({ album: AlbumStore.all()[0], photos: PhotosStore.all() });
  },

  componentWillUnmount: function () {
    AlbumStore.removeChangeListener(this._albumChanged);
    PhotosStore.removeChangeListener(this._photosChanged);
    UserStore.removeChangeListener(this._allReady);
  },

  componentWillReceiveProps: function (newParams) {
    ApiUtil.fetchAlbumPhotos(newParams.params.albumId);
  },

  render: function () {

    if (!this.state.album || !UserStore.user() ) {return <div></div>;}

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
