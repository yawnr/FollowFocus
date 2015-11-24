(function (root) {

  var _photo = {};
  var CHANGE_EVENT = "change";


   root.PhotoStore = $.extend({}, EventEmitter.prototype, {

    photo: function () {
      return _photo;
    },

    resetPhoto: function (photo) {
      _photo = photo;
    },

    addChangeListener: function (callback) {
      this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function (callback) {
      this.removeListener(CHANGE_EVENT, callback);
    },

    dispatcherID: AppDispatcher.register(function (payload) {
      switch(payload.actionType){
        case PhotoConstants.PHOTO_RECEIVED:
          PhotoStore.resetPhoto(payload.photo);
          PhotoStore.emit(CHANGE_EVENT);
          break;
      }
    })

  });

})(this);
