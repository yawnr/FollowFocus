var ProfilePhotoForm = React.createClass({

  getInitialState: function () {
    return { profilePhotoUrl: "", profilePhotoFile: null };
  },

  changePhoto: function(event) {
    var reader = new FileReader();
    var file = event.currentTarget.files[0];
    var that = this;

    reader.onloadend = function() {
      that.setState({ profilePhotoUrl: reader.result, profilePhotoFile: file });

      var newFile = that.state.profilePhotoFile;
      var formData = new FormData();
      formData.append("user[profile_photo]", newFile);

      UserUtil.changeProfilePhoto(that.props.user, formData, that.resetForm);
    };

    if (file) {
      reader.readAsDataURL(file);
    } else {
      this.setState({ profilePhotoUrl: "", profilePhotoFile: null });
    }
  },

  resetForm: function() {
    this.setState({ profilePhotoUrl: "", profilePhotoFile: null });
  },

  render: function () {
    return (
      <div>
        <input type="file" onChange={this.changePhoto} />
      </div>
    );
  }

});
