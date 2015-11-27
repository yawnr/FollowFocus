(function (root) {

  var _comments = [];
  var CHANGE_EVENT = "change";

  var reset_comments = function (comments) {
    _comments = comments;
  };

  root.CommentStore = $.extend({}, EventEmitter.prototype, {

    all: function () {
      return _comments.slice(0);
    },

    addChangeListener: function (callback) {
      this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function (callback) {
      this.removeListener(CHANGE_EVENT, callback);
    },

    DispatcherId: AppDispatcher.register(function (payload) {
      switch(payload.actionType){
        case CommentConstants.COMMENTS_RECEIVED:
          reset_comments(payload.comments);
          CommentStore.emit(CHANGE_EVENT);
          break;
        case CommentConstants.COMMENT_RECEIVED:
          _comments.push(payload.comment);
          CommentStore.emit(CHANGE_EVENT);
          break;
        case CommentConstants.COMMENT_DELETED:
          var spliceIdx = CommentStore.findIndexInStore(payload.comment.id);
          _comments.splice(spliceIdx, 1);
          CommentStore.emit(CHANGE_EVENT);
          break;
      }
    }),

    findIndexInStore: function (comment_id) {
      for (var i = 0; i < _comments.length; i++) {
        if (_comments[i].id === comment_id) {
          return i;
        }
      }
      return -1;
    }

  });

})(this);
