ApiActions = {

  // receiveCurrentUser: function (currentUserId) {
  //   AppDispatcher.dispatch({
  //     actionType: UserConstants.CURRENT_USER_RECEIVED,
  //     currentUserId: currentUserId
  //   });
  // },

  receiveAllAlbums: function (albums) {
    AppDispatcher.dispatch({
      actionType: AlbumConstants.ALBUMS_RECEIVED,
      albums: albums
    });
  },

  receiveAlbum: function (album) {
    AppDispatcher.dispatch({
      actionType: AlbumConstants.ALBUM_RECEIVED,
      album: album
    });
  },

  receiveAllPhotos: function (photos) {
    AppDispatcher.dispatch({
      actionType: PhotoConstants.PHOTOS_RECEIVED,
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
