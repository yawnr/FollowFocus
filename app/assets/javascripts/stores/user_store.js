(function (root) {

  var CHANGE_EVENT = "change";
  var _user;

  var setUser = function (user) {
    _user = user;
  };

  root.UserStore = $.extend({}, EventEmitter.prototype, {

    user: function () {
      return _user;
    },

    addChangeListener: function (callback) {
      this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function (callback) {
      this.removeListener(CHANGE_EVENT, callback);
    },

    dispatcherID: AppDispatcher.register(function (payload) {
        switch(payload.actionType) {
          case UserConstants.USER_RECEIVED:
            setUser(payload.user);
            UserStore.emit(CHANGE_EVENT);
            break;
        }
    })

  });

})(this);
