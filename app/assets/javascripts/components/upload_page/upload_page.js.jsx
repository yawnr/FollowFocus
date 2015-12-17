var UploadPage = React.createClass({

  render: function () {
    return (
      <div>
        <BigAlbumForm userId={window.FollowFocus.currentUser.id} />
        <p>or select an existing album to upload to:</p>
        <UploadAlbumIndex userId={window.FollowFocus.currentUser.id} />
      </div>
    );
  }

});
