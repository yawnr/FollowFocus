ApiUtil = {

  fetchAlbums: function () {
    $.ajax({
      url: 'api/albums',
      method: "GET",
      dataType: "json",
      success: function (albums) {
        // ApiActions.receiveCurrentUser(albums[0].user_id);
        ApiActions.receiveAllAlbums(albums);
      }
    });
  },

  createAlbum: function (album, callback) {
    $.ajax({
      url: 'api/albums',
      method: "POST",
      dataType: "json",
      data: {album: album},
      success: function (album) {
        ApiActions.receiveAlbum(album);
        callback(album.id);
      }
    });
  },

  fetchPhotos: function (album_id) {
    $.ajax({
      url: 'api/photos',
      method: "GET",
      dataType: "json",
      data: {album_id: album_id},
      success: function (photos) {
        ApiActions.receiveAllPhotos(photos);
      }
    });
  },

};
