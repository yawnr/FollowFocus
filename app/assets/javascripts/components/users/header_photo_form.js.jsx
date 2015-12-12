var HeaderPhotoForm = React.createClass({

  changeHeaderPhoto: function(event) {
    var reader = new FileReader();
    var file = event.currentTarget.files[0];
    var that = this;

    reader.onloadend = function() {
      that.setState({ headerPhotoUrl: reader.result, headerPhotoFile: file });

      var newFile = that.state.headerPhotoFile;
      var formData = new FormData();
      formData.append("user[header_photo]", newFile);

      UserUtil.changeHeaderPhoto(that.props.user, formData, that.resetForm);
    };

    if (file) {
      reader.readAsDataURL(file);
    } else {
      // this.setState({ headerPhotoUrl: "", headerPhotoFile: null });
    }
  },

  resetForm: function() {
    // this.setState({ headerPhotoUrl: "", headerPhotoFile: null });
  },

  clickButton: function (e) {
    e.preventDefault();
    document.getElementById('headerFileID').click();
  },

  render: function () {
    return (

      <div className="header-upload-container">
        <input id="headerFileID" type="file" className="header-upload" onChange={this.changeHeaderPhoto} />
        <span className="header-edit" onClick={this.clickButton}>&#9998; Edit</span>
      </div>
    );
  }

});
