var ProfilePhoto = React.createClass({

  render: function () {
    return (
    <div>
      <img className="profile-photo" src={this.props.user.profile_photo_url} />
      <ProfilePhotoForm user={this.props.user} />
      <h3 className="username-header">{this.props.user.username}</h3>
    </div>
  );
  }

});
