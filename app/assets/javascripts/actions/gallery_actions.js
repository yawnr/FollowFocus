GalleryActions = {

  receiveGalleryPhotos: function (photos) {
    AppDispatcher.dispatch({
      actionType: GalleryConstants.GALLERY_PHOTOS_RECEIVED,
      photos: photos
    });
  },

  receiveMorePhotos: function (photos) {
    AppDispatcher.dispatch({
      actionType: GalleryConstants.MORE_PHOTOS_RECEIVED,
      photos: photos
    });
  }

};
