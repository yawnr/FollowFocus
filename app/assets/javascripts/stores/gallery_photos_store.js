(function (root) {

  var _galleryPhotos = [];
  var CHANGE_EVENT = "change";

  var resetGalleryPhotos = function (galleryPhotos) {
    _galleryPhotos = galleryPhotos;
  };

   root.GalleryPhotosStore = $.extend({}, EventEmitter.prototype, {

    all: function () {
      return _galleryPhotos.slice(0);
    },

    addChangeListener: function (callback) {
      this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function (callback) {
      this.removeListener(CHANGE_EVENT, callback);
    },

    dispatcherID: AppDispatcher.register(function (payload) {
      switch(payload.actionType){
        case GalleryConstants.GALLERY_PHOTOS_RECEIVED:
          resetGalleryPhotos(payload.photos);
          GalleryPhotosStore.emit(CHANGE_EVENT);
          break;
      }
    }),

  });

})(this);
