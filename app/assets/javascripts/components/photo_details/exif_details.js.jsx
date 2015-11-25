ExifDetails = React.createClass({

  _formatDate: function (dateString) {
    if (dateString === "Unknown") { return dateString; }

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
        </ul>
      </div>
    );
  }

});
