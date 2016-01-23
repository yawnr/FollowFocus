GalleryUtil = {

  fetchGalleryPhotos: function () {
    $.ajax({
      url: 'api/photos',
      method: "GET",
      dataType: "json",
      data: {gallery_photos: true},
      success: function (photos) {
        GalleryActions.receiveGalleryPhotos(photos);
      }
    });
  },

  fetchMorePhotos: function () {
    $.ajax({
      url: 'api/photos',
      method: "GET",
      dataType: "json",
      data: {gallery_photos: true},
      success: function (photos) {
        GalleryActions.receiveMorePhotos(photos);
      }
    });
  }

};
