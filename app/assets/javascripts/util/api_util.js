ApiUtil = {

  fetchAlbums: function () {
    $.ajax({
      url: 'api/albums',
      method: "GET",
      dataType: "json",
      success: function (albums) {
        ApiActions.receiveCurrentUser(albums[0].user_id);
        ApiActions.receiveAllAlbums(albums);
      }
    });
  }

};
