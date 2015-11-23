var GalleryPhotoInfoBox = React.createClass({

  render: function () {

    var Link = ReactRouter.Link;
    var currentDate = new Date();
    var currentYear = currentDate.getYear();
    var currentMonth = currentDate.getMonth();
    var yearPosted = this.props.photo.date_time.substring(0,4);
    var monthsSincePosted = dateNow - datePosted;

    return (
      <div className="gallery-photo-info-box">
        <ul>
          <li><Link to={"/users/" + this.props.photo.user_id} >{this.props.photo.username}</Link></li>
          <li>{this.props.photo.username}</li>
        </ul>
        <ul>
          <li></li>
          <li>{this.props.photo.file_name}</li>
          <li>{this.props.photo.album_name}</li>
          <li>{this.props.photo.num_comments}</li>
        </ul>
      </div>
    );
  }

});
