var UploadToAlbumForm = React.createClass({

  getInitialState: function () {
    return { photoUrl: "", photoFile: null };
  },

  componentDidMount: function () {
    var dropZone = document.getElementById('dropZone');

    if (dropZone) {
      dropZone.addEventListener('dragover', function(e) {
          e.stopPropagation();
          e.preventDefault();
          e.dataTransfer.dropEffect = 'copy';
      });

    dropZone.addEventListener('drop', this.uploadPhotos);
    }
  },

  uploadPhotos: function (event) {
    event.stopPropagation();
    event.preventDefault();

    var files;
    if (event.currentTarget.id === "dropZone") {
      files = event.dataTransfer.files;
    } else {
      files = event.currentTarget.files;
    }

    for (var i = 0; i < files.length; i++) {
      this.uploadEachPhoto(files[i]);
    }
  },

  uploadEachPhoto: function(file) {
    var reader = new FileReader();
    var album_id = this.props.album.id;
    var that = this;

    var base64ToArrayBuffer = function  (base64) {
      base64 = base64.replace(/^data\:([^\;]+)\;base64,/gmi, '');
      var binary_string = window.atob(base64);
      var len = binary_string.length;
      var bytes = new Uint8Array( len );
      for (var i = 0; i < len; i++) {
          bytes[i] = binary_string.charCodeAt(i);
      }
      return bytes.buffer;
    };

    reader.onloadend = function() {
      that.setState({ photoUrl: reader.result, photoFile: file });
      var loadedFile = that.state.photoFile;

      var exif = EXIF.readFromBinaryFile(base64ToArrayBuffer(this.result));

      var lat = exif.GPSLatitude;
      var lng = exif.GPSLongitude;

      //Convert coordinates to WGS84 decimal
      if (lat && lng) {
        var latRef = exif.GPSLatitudeRef || "N";
        var lngRef = exif.GPSLongitudeRef || "W";
        lat = (lat[0] + lat[1]/60 + lat[2]/3600) * (latRef == "N" ? 1 : -1);
        lng = (lng[0] + lng[1]/60 + lng[2]/3600) * (lngRef == "W" ? -1 : 1);
      }

      var dateTime;
      if (exif.DateTimeOriginal !== undefined) {
        dateTime = exif.DateTimeOriginal;
      } else {
        dateTime = "Unknown";
      }

      var iso = exif.ISOSpeedRatings;
      if (exif.ISOSpeedRatings !== undefined) {
        iso = exif.ISOSpeedRatings;
      } else {
        iso = "Unknown";
      }

      var aperture;
      if (exif.FNumber !== undefined) {
          aperture = "" + (exif.FNumber.numerator / exif.FNumber.denominator);
      } else {
        aperture = "Unknown";
      }

      var exposureTime;
      if (exif.ExposureTime !== undefined) {
        exposureTime = exif.ExposureTime.numerator + "/" + exif.ExposureTime.denominator;
      } else {
        exposureTime = "Unknown";
      }

      var width;
      var height;
      if (exif.PixelXDimension !== undefined && exif.PixelYDimension !== undefined) {
        width = exif.PixelXDimension;
        height = exif.PixelYDimension;
      }

      var orientation;
      if (exif.Orientation !== undefined) {
        orientation = exif.Orientation;
      }

      var cameraModel;
      if (exif.Make !== undefined && exif.Model !== undefined) {
        cameraModel = exif.Make + " " + exif.Model;
      } else if (exif.Make !== undefined && exif.Model === undefined){
        cameraModel = exif.Make;
      } else if (exif.Make === undefined && exif.Model !== undefined){
        cameraModel = exif.Model;
      } else {
        cameraModel = "Unknown";
      }

      var formData = new FormData();
      formData.append("photo[photo_attachment]", loadedFile);
      formData.append("photo[album_id]", album_id);
      formData.append("photo[date_time]", dateTime);
      formData.append("photo[lat]", lat);
      formData.append("photo[lng]", lng);
      formData.append("photo[iso]", iso);
      formData.append("photo[aperture]", aperture);
      formData.append("photo[exposure_time]", exposureTime);
      formData.append("photo[width]", width);
      formData.append("photo[height]", height);
      formData.append("photo[orientation]", orientation);
      formData.append("photo[camera_model]", cameraModel);

      ApiUtil.uploadPhoto(album_id, formData);
    };

    if (file) {
        reader.readAsDataURL(file);
        this.resetForm();
      }
  },

  resetForm: function() {
    this.setState({ photoUrl: "", photoFile: null });
  },

  clickButton: function (e) {
    e.preventDefault();
    document.getElementById('file').click();
  },

  render: function () {
    if (this.props.isOwner) {
      return (
        <div>
          <div className="album-title"><ChangeAlbumForm album={this.props.album} /></div>

          <div className="dropZone-container">
            <div className="table-cell">
              <div id="dropZone" onClick={this.clickButton}>Drag Files Here
              <div className="or">or</div>
              <div className="click-here">Click to Select Photos</div>
              </div>
            </div>
              <input id="file" className="profile-photo-input" type="file" multiple onChange={this.uploadPhotos} />
          </div>
        </div>
      );
    } else {
      return (<div>
                <div className="album-title">{this.props.album.title}</div>
              </div>
      );
    }
  }

});
