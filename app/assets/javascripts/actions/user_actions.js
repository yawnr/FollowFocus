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
  }

};
