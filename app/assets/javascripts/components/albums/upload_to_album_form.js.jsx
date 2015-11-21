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
      uploadEachPhoto(files[i], lastFileCheck);
    }
  },

  uploadEachPhoto: function(file, lastFileCheck) {
    var reader = new FileReader();
    var that = this;

    reader.onloadend = function() {
      that.setState({ photoUrl: reader.result, photoFile: file });

      var xfile = that.state.photoFile;
      var formData = new FormData();
      formData.append("photo[photo]", file);

      if (lastFileCheck) {
        ApiUtil.uploadPhoto(formData, this.goToAlbum);
      } else {
        ApiUtil.uploadPhoto(formData);
      }
    };

    if (file) {
        reader.readAsDataURL(file);
    } else {
      this.setState({ photoUrl: "", photoFile: null });
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
