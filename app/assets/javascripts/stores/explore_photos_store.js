(function (root) {

  var _photos = [];
  var _photoIds = [];
  var _activeTags = [];
  var CHANGE_EVENT = "change";

   root.ExplorePhotosStore = $.extend({}, EventEmitter.prototype, {

    all: function () {
      return _photos.slice();
    },

    allActiveTags: function () {
      return _activeTags.slice();
    },

    resetPhotos: function () {
      _photos = [];
    },

    addPhotos: function (photos) {
      photos.forEach(function (photo) {
        if (_photoIds.indexOf(photo.id) === -1) {
          _photos.push(photo);
          _photoIds.push(photo.id);
        }
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

    activateTag: function (tag) {
      _activeTags.push(tag);
    },

    deactivateTag: function (tag) {
      spliceIdx = _activeTags.indexOf(tag);
      _activeTags.splice(spliceIdx, 1);
    },

    removeTagPhotos: function (checkTag) {
      spliceIndices = [];

      for (var i = 0; i < _photos.length; i++) {
        var this_photo = _photos[i];
        var this_photo_tags = this_photo.tags;
        var numActiveTags = 0;
        var activeTags = ExplorePhotosStore.allActiveTags();

        var this_photo_tags_text = [];
        for (var h = 0; h < this_photo_tags.length; h++) {
          if (this_photo_tags_text.indexOf(this_photo_tags[h].tag) === -1) {
            this_photo_tags_text.push(this_photo_tags[h].tag);
          }
        }

        for (var j = 0; j < this_photo_tags_text.length; j++) {
          if (activeTags.indexOf(this_photo_tags_text[j]) !== -1) {
            numActiveTags++;
          }
        }

        if (numActiveTags === 1 && this_photo_tags_text.indexOf(checkTag) !== -1) {
          spliceIndices.push(i);
          _photoIds.splice(_photoIds.indexOf(this_photo.id));
        }
      }

      for (var k = spliceIndices.length - 1; k > -1; k--) {
        _photos.splice(spliceIndices[k], 1);
      }

      ExplorePhotosStore.emit(CHANGE_EVENT);
    }

  });

})(this);
