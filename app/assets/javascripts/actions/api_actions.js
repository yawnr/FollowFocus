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

};
