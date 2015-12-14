(function (root) {

  var _photos = [];
  var CHANGE_EVENT = "change";


   root.ExplorePhotosStore = $.extend({}, EventEmitter.prototype, {

    all: function () {
      return _photos.slice();
    },

    resetPhotos: function () {
      _photos = [];
    },

    addPhotos: function (photos) {
      photos.forEach(function (photo) {
        _photos.push(photo);
      });
    },

    addChangeListener: function (callback) {
      this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function (callback) {
      this.removeListener(CHANGE_EVENT, callback);
    },

    dispatcherID: AppDispatcher.register(function (payload) {
      switch(payload.actionType){
        case ExploreConstants.EXPLORE_PHOTOS_RECEIVED:
          ExplorePhotosStore.addPhotos(payload.explorePhotos);
          ExplorePhotosStore.emit(CHANGE_EVENT);
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
    },

    removeTagPhotos: function (tag) {
      var beginSplice;
      var endSplice;

      for (var i = 0; i < _photos.length; i++) {
        if (_photos[i].tags.indexOf(tag) ) {
          beginSplice = i;
          break;
        }
      }

      for (var j = _photos.length - 1; j >= 0; j--) {
        if (_photos[j].tags.indexOf(tag)) {
          endSplice = j + 1;
          break;
        }
      }

      _photos.splice(beginSplice, endSplice);
      ExplorePhotosStore.emit(CHANGE_EVENT);
    }

  });

})(this);
