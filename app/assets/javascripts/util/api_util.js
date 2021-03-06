ApiUtil = {

  fetchUserAlbums: function (user_id) {
    $.ajax({
      url: 'api/albums',
      method: "GET",
      dataType: "json",
      data: {user_id: user_id},
      success: function (albums) {
        ApiActions.receiveUserAlbums(albums);
      }
    });
  },

  fetchAlbum: function (album_id) {
    $.ajax({
      url: 'api/albums/' + album_id,
      method: "GET",
      dataType: "json",
      data: {album_id: album_id},
      success: function (album) {
        ApiActions.receiveAlbum(album);
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

  editAlbumTitle: function (album) {
    $.ajax({
      url: 'api/albums/' + album.id,
      method: "PATCH",
      dataType: "json",
      data: {album: album},
      success: function (album) {
        ApiActions.receiveUpdatedAlbum(album);
      }
    });
  },

  fetchAlbumPhotos: function (album_id) {
    $.ajax({
      url: 'api/photos',
      method: "GET",
      dataType: "json",
      data: {album_id: album_id},
      success: function (photos) {
        ApiActions.receiveAlbumPhotos(photos);
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

  uploadPhoto: function (album_id, formData) {
    $.ajax({
      url: 'api/photos',
      type: 'POST',
      processData: false,
      contentType: false,
      dataType: 'json',
      data: formData,
      success: function(photo) {
        ApiUtil.fetchAlbumPhotos(album_id);
      }
    });
  },

  deletePhoto: function (photo_id) {
    $.ajax({
      url: 'api/photos/' + photo_id,
      method: "DELETE",
      dataType: "json",
      data: {photo_id: photo_id},
      success: function () {
        ApiActions.deletePhoto(photo_id);
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
        ApiUtil.fetchComments(comment.photo_id);
      }
    });
  },

  deleteComment: function (comment_id) {
    $.ajax({
      url: 'api/comments/' + comment_id,
      method: "DELETE",
      dataType: "json",
      success: function (comment) {
        ApiActions.deleteComment(comment);
      }
    });
  },

  fetchTags: function (photo_id) {
    $.ajax({
      url: 'api/tags',
      method: "GET",
      dataType: "json",
      data: {photo_id: photo_id},
      success: function (tags) {
        ApiActions.receiveAllTags(tags);
      }
    });
  },

  createTag: function (tag) {
    $.ajax({
      url: 'api/tags',
      method: "POST",
      dataType: "json",
      data: {tag: tag},
      success: function (tag) {
        ApiUtil.fetchTags(tag.photo_id);
      }
    });
  },

  deleteTag: function (tag_id) {
    $.ajax({
      url: 'api/tags/' + tag_id,
      method: "DELETE",
      dataType: "json",
      success: function (tag) {
        ApiActions.deleteTag(tag);
      }
    });
  },

};
