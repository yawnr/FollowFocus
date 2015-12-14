ExploreUtil = {

  fetchExploreTags: function () {
    $.ajax({
      url: 'api/tags',
      method: "GET",
      dataType: "json",
      data: {explore_tags: true},
      success: function (exploreTags) {
        ExploreActions.receiveExploreTags(exploreTags);
      }
    });
  },

  fetchExplorePhotos: function (tag) {
    $.ajax({
      url: 'api/photos',
      method: "GET",
      dataType: "json",
      data: {explore_photos: true, tag: tag},
      success: function (explorePhotos) {
        ExploreActions.receiveExplorePhotos(explorePhotos);
      }
    });
  }

};
