var Album = React.createClass({

  getInitialState: function () {
    return { photos: [] };
  },

  render: function () {

    var toRender;

    var album = AlbumStore.findById(parseInt(this.props.routeParams.albumId));

    return (
      <div>
        <div>
          <ProfilePhoto user={UserStore.user()} />
        </div>

        <h3>{album.title}</h3>
        <UploadToAlbumForm album={album} />
        <PhotoIndex album={album} />
      </div>
    );
  }

});
