ExifDetails = React.createClass({

  _formatDate: function (dateString) {
          // formData.append("photo[date_time]", dateTime);
          // formData.append("photo[lat]", lat);
          // formData.append("photo[lng]", lng);
          // formData.append("photo[iso]", iso);
          // formData.append("photo[aperture]", aperture);
          // formData.append("photo[exposure_time]", exposureTime);
          // formData.append("photo[camera_model]", cameraModel);
          debugger
    var monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];

    var month = monthNames[dateString.substring(5,7)];
    var day = dateString.substring(8,10);
    if (day[0] === "0") {
      day = day[1];
    }
    var year = dateString.substring(0,4);
    return  month + " " + day + ", " + year;
  },

  render: function () {
    return(
      <div>
        <ul>
          <li>Date taken: {this._formatDate(this.props.photo.date_time)}</li>
          <li>Camera model: {this.props.photo.camera_model || "Unknown"}</li>
          <li>Aperture: {this.props.photo.aperture || "Unknown"}</li>
          <li>Shutter Speed: {this.props.photo.exposure_time || "Unknown"}</li>
          <li>ISO: {this.props.photo.iso || "Unknown"}</li>
          <li>Latitude: {this.props.photo.lat || "Unknown"}</li>
          <li>Longitude: {this.props.photo.lng || "Unknown"}</li>
        </ul>
      </div>
    );
  }

});
