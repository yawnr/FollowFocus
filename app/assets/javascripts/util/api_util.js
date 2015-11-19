ApiUtil = {

  fetchAlbums: function (user_id) {
    $.ajax({
      url: 'api/albums',
      method: "GET",
      dataType: "json",
      data: {user_id: user_id},
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

  fetchPhoto: function (photo_id) {
    $.ajax({
      url: 'api/photos/' + photo_id,
      method: "GET",
      dataType: "json",
      success: function (photo) {
        ApiActions.receivePhoto(photo);
      }
    });
  },

  fetchComments: function (photo_id) {
    $.ajax({
      url: 'api/comments',
      method: "GET",
      dataType: "json",
      data: {photo_id: photo_id},
      success: function (comments) {
        ApiActions.receiveAllComments(comments);
      }
    });
  },

  createComment: function (comment) {
    $.ajax({
      url: 'api/comments',
      method: "POST",
      dataType: "json",
      data: {comment: comment},
      success: function (comment) {
        ApiActions.receiveComment(comment);
        setTimeout(function () {
          $("#comments").animate({ scrollTop: $("#comments")[0].scrollHeight}, 1000);
        }, 500);
      }
    });
  },

};
