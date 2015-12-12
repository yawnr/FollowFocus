(function (root) {

  var _tags = [];
  var CHANGE_EVENT = "change";

  var reset_tags = function (tags) {
    _tags = tags;
  };

  root.TagStore = $.extend({}, EventEmitter.prototype, {

    all: function () {
      return _tags.slice(0);
    },

    addChangeListener: function (callback) {
      this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function (callback) {
      this.removeListener(CHANGE_EVENT, callback);
    },

    DispatcherId: AppDispatcher.register(function (payload) {
      switch(payload.actionType){
        case TagConstants.TAGS_RECEIVED:
          reset_tags(payload.tags);
          TagStore.emit(CHANGE_EVENT);
          break;
        case TagConstants.TAG_RECEIVED:
          _tags.push(payload.tag);
          TagStore.emit(CHANGE_EVENT);
          break;
        case TagConstants.TAG_DELETED:
          var spliceIdx = TagStore.findIndexInStore(payload.tag.id);
          _tags.splice(spliceIdx, 1);
          TagStore.emit(CHANGE_EVENT);
          break;
      }
    }),

    findIndexInStore: function (tag_id) {
      for (var i = 0; i < _tags.length; i++) {
        if (_tags[i].id === tag_id) {
          return i;
        }
      }
      return -1;
    }

  });

})(this);
