var ProfilePhoto = React.createClass({

  render: function () {

    if (parseInt(window.FollowFocus.currentUser.id) === this.props.user.id) {

      return (
        <div>
          <div className="profile-photo-container">

            <div className="profile-photo">
              <img src={this.props.user.profile_photo_thumb} />
            </div>
            <ProfilePhotoForm user={this.props.user} />
          </div>

          <br />

          <h3 className="username-header"><a href={"#/users/" + this.props.user.id}>{this.props.user.username}</a></h3>
        </div>
      );
    } else {
      return (
        <div>
          <div className="profile-photo-container">

            <div className="profile-photo">
              <img src={this.props.user.profile_photo_thumb} />
            </div>
          </div>

          <br />

          <h3 className="username-header"><a href={"#/users/" + this.props.user.id}>{this.props.user.username}</a></h3>
        </div>
      );
    }
  }

});
