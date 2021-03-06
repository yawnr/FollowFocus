(function (root) {

  var _photos = [];
  var CHANGE_EVENT = "change";

  var resetPhotos = function (photos) {
    _photos = photos;
  };

   root.PhotosStore = $.extend({}, EventEmitter.prototype, {

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
        case PhotoConstants.ALBUM_PHOTOS_RECEIVED:
          resetPhotos(payload.photos);
          PhotosStore.emit(CHANGE_EVENT);
          break;
        case UserConstants.USER_PHOTOS_RECEIVED:
          resetPhotos(payload.photos);
          PhotosStore.emit(CHANGE_EVENT);
          break;
        case PhotoConstants.PHOTO_DELETED:
          var spliceIdx = PhotosStore.findIndexInStore(payload.photo_id);
          _photos.splice(spliceIdx, 1);
          PhotosStore.emit(CHANGE_EVENT);
          break;
      }
    }),

    findById: function (id) {
      var photo;
      _photos.forEach(function (p) {
        if (p.id === id) { photo = p; }
      });
      return photo;
    },

    findIndexInStore: function (photo_id) {
      for (var i = 0; i < _photos.length; i++) {
        if (_photos[i].id === photo_id) {
          return i;
        }
      }
      return -1;
    }

  });

})(this);
