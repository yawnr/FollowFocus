(function (root) {

  var _albumCovers = [];
  var CHANGE_EVENT = "change";

  var resetAlbumCovers = function (albumCovers) {
    _albumCovers = albumCovers;
  };

   root.AlbumCoversStore = $.extend({}, EventEmitter.prototype, {

    all: function () {
      return _albumCovers.slice(0);
    },

    addChangeListener: function (callback) {
      this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function (callback) {
      this.removeListener(CHANGE_EVENT, callback);
    },

    dispatcherID: AppDispatcher.register(function (payload) {
      switch(payload.actionType){
        case UserConstants.ALBUM_COVERS_RECEIVED:
          resetAlbumCovers(payload.photos);
          AlbumCoversStore.emit(CHANGE_EVENT);
          break;
      }
    }),

    findCoverByAlbumId: function (albumId) {
      var cover;
      _albumCovers.forEach(function (aC) {
        if (aC.album_id === albumId) { cover = aC; }
      });
      return cover;
    }

  });

})(this);
