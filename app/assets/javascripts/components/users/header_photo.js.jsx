var HeaderPhoto = React.createClass({

  render: function () {

    if (parseInt(window.FollowFocus.currentUser.id) === this.props.user.id) {

      return (
        <div>
          <div className="header-photo-container">
            <div className="header-photo">
              <img src={this.props.user.header_photo} />
            </div>
            <HeaderPhotoForm user={this.props.user} />
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <div className="header-photo-container">
            <div className="header-photo">
              <img src={this.props.user.header_photo} />
            </div>
          </div>
        </div>
      );
    }
  }

});
