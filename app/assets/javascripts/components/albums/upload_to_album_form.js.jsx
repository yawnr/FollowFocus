var UploadToAlbumForm = React.createClass({

  getInitialState: function () {
    return { photoUrl: "", photoFile: null };
  },

  uploadPhotos: function (event) {
    var files = event.currentTarget.files;
    var lastFileCheck = false;

    for (var i = 0; i < files.length; i++) {
      if (i === (files.length - 1)) {
        lastFileCheck = true;
      }
      this.uploadEachPhoto(files[i], lastFileCheck);
    }
  },

  uploadEachPhoto: function(file, lastFileCheck) {
    var reader = new FileReader();
    var album_id = this.props.album.id;
    var that = this;

    reader.onloadend = function() {
      that.setState({ photoUrl: reader.result, photoFile: file });

      var loadedFile = that.state.photoFile;
      var formData = new FormData();
      formData.append("photo[photo_attachment]", loadedFile);
      formData.append("photo[album_id]", album_id);

      ApiUtil.uploadPhoto(album_id, formData);

      // ApiUtil.createPhotoObject(album_id, formData);

      // if (lastFileCheck) {
        // ApiUtil.uploadPhoto(album, formData);
      //   console.log("this is the last file");
      // } else {
      //   ApiUtil.uploadPhoto(formData);
      // }
    };

    if (file) {
        reader.readAsDataURL(file);
        this.resetForm();
    } else {
      console.log("no files");
      // this.setState({ photoUrl: "", photoFile: null });
    }
  },

  resetForm: function() {
    this.setState({ photoUrl: "", photoFile: null });
  },

  render: function () {
    return (
      <div>
        <h3>Add Photos</h3>
        <input className="profile-photo-input" type="file" multiple onChange={this.uploadPhotos} />
      </div>
    );
  }

});
