(function (root) {

  var _galleryPhotos = [];
  var lastFetchTime;
  var CHANGE_EVENT = "change";

  var resetGalleryPhotos = function (galleryPhotos) {
    _galleryPhotos = galleryPhotos;
  };

  var addGalleryPhotos = function (galleryPhotos) {
    for (var i = 0; i < _galleryPhotos.length; i++) {
      for (var j = 0; j < galleryPhotos.length; j++) {
        if (_galleryPhotos[i].id == galleryPhotos[j].id) {
          galleryPhotos.splice(j, 1);
        }
      }
    }

    _galleryPhotos = _galleryPhotos.concat(galleryPhotos);
  };

  var setLastFetchTime = function () {
    lastFetchTime = new Date();
  };

   root.GalleryPhotosStore = $.extend({}, EventEmitter.prototype, {

    all: function () {
      return _galleryPhotos.slice(0);
    },

    lastFetch: function () {
      return lastFetchTime;
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
          setLastFetchTime();
          GalleryPhotosStore.emit(CHANGE_EVENT);
          break;
        case GalleryConstants.MORE_PHOTOS_RECEIVED:
          addGalleryPhotos(payload.photos);
          GalleryPhotosStore.emit(CHANGE_EVENT);
          break;
      }
    }),

  });

})(this);
