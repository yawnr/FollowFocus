var Album = React.createClass({

  render: function () {

    var toRender;

    var album = AlbumStore.findById(parseInt(this.props.routeParams.albumId));

    var isOwner = (album.user_id == window.FollowFocus.currentUser.id);

    return (
      <div>
        <div>
          <ProfilePhoto user={UserStore.user()} />
        </div>

        <h3>{album.title}</h3>
        <UploadToAlbumForm album={album} isOwner={isOwner}/>
        <PhotoIndex album={album} />
      </div>
    );
  }

});
