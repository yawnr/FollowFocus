(function (root) {

  var _albums = [];
  var CHANGE_EVENT = "change";

  var resetAlbums = function (albums) {
    _albums = albums;
  };

  root.AlbumStore = $.extend({}, EventEmitter.prototype, {

    all: function () {
      return _albums.slice(0);
    },

    addChangeListener: function (callback) {
      this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function (callback) {
      this.removeListener(CHANGE_EVENT, callback);
    },

    dispatcherID: AppDispatcher.register(function (payload) {
      switch(payload.actionType){
        case AlbumConstants.ALBUMS_RECEIVED:
          resetAlbums(payload.albums);
          AlbumStore.emit(CHANGE_EVENT);
          break;
        case AlbumConstants.ALBUM_RECEIVED:
          _albums.push(payload.album);
          AlbumStore.emit(CHANGE_EVENT);
          break;
      }
    }),

    findById: function (id) {
      var album;
      _albums.forEach(function (a) {
        if (a.id === id) { album = a; }
      });
      return album;
    }

  });

})(this);
