(function (root) {

  var _photo = {};
  var CHANGE_EVENT = "change";

  var resetPhoto = function (photo) {
    _photo = photo;
  };

   root.PhotoStore = $.extend({}, EventEmitter.prototype, {

    photo: function () {
      return _photo;
    },

    addChangeListener: function (callback) {
      this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function (callback) {
      this.removeListener(CHANGE_EVENT, callback);
    },

    dispatcherID: AppDispatcher.register(function (payload) {
      switch(payload.actionType){
        // case PhotoConstants.PHOTOS_RECEIVED:
        //   resetPhotos(payload.photos);
        //   PhotoStore.emit(CHANGE_EVENT);
        //   break;
        case PhotoConstants.PHOTO_RECEIVED:
          resetPhoto(payload.photo);
          PhotoStore.emit(CHANGE_EVENT);
          break;
      }
    }),

    // findById: function (id) {
    //   var photo;
    //   _photos.forEach(function (p) {
    //     if (p.id === id) { photo = p; }
    //   });
    //   return photo;
    // }

  });

})(this);
