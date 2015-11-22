GalleryUtil = {

  fetchGalleryPhotos: function (gallery_id) {
    $.ajax({
      url: 'api/photos',
      method: "GET",
      dataType: "json",
      data: {gallery_id: gallery_id},
      success: function (photos) {
        GalleryActions.receiveGalleryPhotos(photos);
      }
    });
  }

};
