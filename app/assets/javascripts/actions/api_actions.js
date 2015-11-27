ApiActions = {

  receiveGalleryPhotos: function (photos) {
    AppDispatcher.dispatch({
      actionType: PhotoConstants.GALLERY_PHOTOS_RECEIVED,
      photos: photos
    });
  },

  receiveUserAlbums: function (albums) {
    AppDispatcher.dispatch({
      actionType: AlbumConstants.USER_ALBUMS_RECEIVED,
      albums: albums
    });
  },

  receiveAlbum: function (album) {
    AppDispatcher.dispatch({
      actionType: AlbumConstants.ALBUM_RECEIVED,
      album: album
    });
  },

  receiveUpdatedAlbum: function (album) {
    AppDispatcher.dispatch({
      actionType: AlbumConstants.UPDATED_ALBUM_RECEIVED,
      album: album
    });
  },

  receiveAlbumPhotos: function (photos) {
    AppDispatcher.dispatch({
      actionType: PhotoConstants.ALBUM_PHOTOS_RECEIVED,
      photos: photos
    });
  },

  receivePhoto: function (photo) {
    AppDispatcher.dispatch({
      actionType: PhotoConstants.PHOTO_RECEIVED,
      photo: photo
    });
  },

  deletePhoto: function (photo_id) {
    AppDispatcher.dispatch({
      actionType: PhotoConstants.PHOTO_DELETED,
      photo_id: photo_id
    });
  },

  receiveAllComments: function (comments) {
    AppDispatcher.dispatch({
      actionType: CommentConstants.COMMENTS_RECEIVED,
      comments: comments
    });
  },

  receiveComment: function (comment) {
    AppDispatcher.dispatch({
      actionType: CommentConstants.COMMENT_RECEIVED,
      comment: comment
    });
  },

  deleteComment: function (comment) {
    AppDispatcher.dispatch({
      actionType: CommentConstants.COMMENT_DELETED,
      comment: comment
    });
  }

};
