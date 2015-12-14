ExploreActions = {

  receiveExploreTags: function (exploreTags) {
    AppDispatcher.dispatch({
      actionType: ExploreConstants.EXPLORE_TAGS_RECEIVED,
      exploreTags: exploreTags
    });
  },

  receiveExplorePhotos: function (explorePhotos) {
    AppDispatcher.dispatch({
      actionType: ExploreConstants.EXPLORE_PHOTOS_RECEIVED,
      explorePhotos: explorePhotos
    });
  }

};
