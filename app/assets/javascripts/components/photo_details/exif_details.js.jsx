ExifDetails = React.createClass({

  _formatDate: function (dateString) {
    if (dateString === "Unknown") { return dateString; }

    var monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];

    var month = monthNames[parseInt(dateString.substring(5,7)) - 1];
    var day = dateString.substring(8,10);
    if (day[0] === "0") {
      day = day[1];
    }
    var year = dateString.substring(0,4);
    return  month + " " + day + ", " + year;
  },

  render: function () {
    var aper;
    if (this.props.photo.aperture != "Unknown") {
      aper = "ƒ/" + this.props.photo.aperture;
    } else {
      aper = "Unknown";
    }

    var model = this.props.photo.camera_model.split(' ');
    if (model.length > 1 && model[0] == model[1]) {
      model.splice(0, 1);
      model = model.join(' ');
    } else {
      model = this.props.photo.camera_model;
    }

    return(
      <div className="exif-container">
        <table className="exif-table">
          <tr className="exif-row">
            <td> Date taken </td>
            <td>{this._formatDate(this.props.photo.date_time)}</td>
          </tr>
          <tr className="exif-row">
            <td> Camera model </td>
            <td>{model || "Unknown"}</td>
          </tr>
          <tr className="exif-row">
            <td> Aperture </td>
            <td>{aper}</td>
          </tr>
          <tr className="exif-row">
            <td> Shutter Speed </td>
            <td>{this.props.photo.exposure_time || "Unknown"}</td>
          </tr>
          <tr className="exif-row">
            <td> ISO </td>
            <td>{this.props.photo.iso || "Unknown"}</td>
          </tr>
        </table>
      </div>
    );
  }

});
