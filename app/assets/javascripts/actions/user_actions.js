UserActions = {

  receiveUser: function (user) {
    AppDispatcher.dispatch({
      actionType: UserConstants.USER_RECEIVED,
      user: user
    });
  },

  receiveUserPhotos: function (photos) {
    AppDispatcher.dispatch({
      actionType: UserConstants.USER_PHOTOS_RECEIVED,
      photos: photos
    });
  },

  receiveAlbumCovers: function (photos) {
    AppDispatcher.dispatch({
      actionType: UserConstants.ALBUM_COVERS_RECEIVED,
      photos: photos
    });
  }

};
