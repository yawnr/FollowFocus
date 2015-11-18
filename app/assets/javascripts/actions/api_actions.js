ApiActions = {

  receiveCurrentUser: function (currentUserId) {
    debugger
    AppDispatcher.dispatch({
      actionType: UserConstants.CURRENT_USER_RECEIVED,
      currentUserId: currentUserId
    });
  },

  receiveAllAlbums: function (albums) {
    AppDispatcher.dispatch({
      actionType: AlbumConstants.ALBUMS_RECEIVED,
      albums: albums
    });
  }

};
