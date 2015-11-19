(function (root) {

  var _photos = [];
  var CHANGE_EVENT = "change";

  var resetPhotos = function (photos) {
    _photos = photos;
  };

   root.PhotoStore = $.extend({}, EventEmitter.prototype, {

    all: function () {
      return _photos.slice(0);
    },

    addChangeListener: function (callback) {
      this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function (callback) {
      this.removeListener(CHANGE_EVENT, callback);
    },

    dispatcherID: AppDispatcher.register(function (payload) {
      switch(payload.actionType){
        case PhotoConstants.PHOTOS_RECEIVED:
          resetPhotos(payload.photos);
          PhotoStore.emit(CHANGE_EVENT);
          break;
        case PhotoConstants.PHOTO_RECEIVED:
          _photos.push(payload.photo);
          PhotoStore.emit(CHANGE_EVENT);
          break;
      }
    }),

    findById: function (id) {
      var photo;
      _photos.forEach(function (p) {
        if (p.id === id) { photo = p; }
      });
      return photo;
    }

  });

})(this);
