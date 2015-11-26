UserUtil = {

  fetchUser: function (user_id) {
    $.ajax({
      url: '/users/' + user_id,
      method: "GET",
      dataType: "json",
      // data: {user_id: user_id},
      success: function (user) {
        UserActions.receiveUser(user);
      }
    });
  },

  changeProfilePhoto: function (user, formData, callback) {
    $.ajax({
      url: '/users/' + user.id,
      type: 'PATCH',
      processData: false,
      contentType: false,
      dataType: 'json',
      data: formData,
      success: function(user) {
        UserActions.receiveUser(user);
        if (callback) {
          callback();
        }
      }
    });
  },

  fetchUserPhotos: function (user_id) {
    $.ajax({
      url: 'api/photos',
      method: "GET",
      dataType: "json",
      data: {user_id: user_id},
      success: function (photos) {
        UserActions.receiveUserPhotos(photos);
      }
    });
  },

  fetchAlbumCovers: function (user_id) {
    $.ajax({
      url: 'api/photos',
      method: "GET",
      dataType: "json",
      data: {album_covers: true, user_id: user_id},
      success: function (photos) {
        UserActions.receiveAlbumCovers(photos);
      }
    });
  }

};
