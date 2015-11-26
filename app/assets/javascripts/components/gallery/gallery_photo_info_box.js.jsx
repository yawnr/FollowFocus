var GalleryPhotoInfoBox = React.createClass({

  render: function () {

    var Link = ReactRouter.Link;
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    var currentMonth = currentDate.getMonth();
    var yearPosted = this.props.photo.date_time.substring(0, 4);
    var monthPosted = this.props.photo.date_time.substring(5, 7);
    var timeSincePosted = ((currentYear - yearPosted) * 12) + (currentMonth - monthPosted);

    if (timeSincePosted > 0) {
      timeSincePosted += " months ago";
    } else {
      timeSincePosted = "Less than a month ago";
    }

    return (
      <div className="info-box-container">
        <div className="gallery-photo-info-box">
          <div className="info-box-photo-title">{this.props.photo.file_name}</div>
          <ul className="ul1">
            <li>By <Link to={"/users/" + this.props.photo.user_id} >{this.props.photo.username}</Link></li>
            <li>{timeSincePosted}</li>
          </ul>
          <ul className="ul2">
            <li></li>
            <li>From {this.props.photo.album_name}</li>
            <li>{this.props.photo.num_comments} comments</li>
          </ul>
        </div>
      </div>
    );
  }

});
