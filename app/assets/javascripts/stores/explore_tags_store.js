(function (root) {

  var _exploreTags = [];
  var CHANGE_EVENT = "change";

  var resetExploreTags = function (tags) {
    _exploreTags = tags;
  };

  root.ExploreTagsStore = $.extend({}, EventEmitter.prototype, {

    all: function () {
      return _exploreTags.slice();
    },

    addChangeListener: function (callback) {
      this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function (callback) {
      this.removeListener(CHANGE_EVENT, callback);
    },

    DispatcherId: AppDispatcher.register(function (payload) {
      switch(payload.actionType){
        case ExploreConstants.EXPLORE_TAGS_RECEIVED:
          resetExploreTags(payload.exploreTags);
          ExploreTagsStore.emit(CHANGE_EVENT);
          break;
      }
    }),


  });

})(this);
