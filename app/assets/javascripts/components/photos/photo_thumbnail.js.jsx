var PhotoThumbnail = React.createClass({

  mixins: [ReactRouter.History],

  renderFullSize: function () {
    this.history.pushState(null, "/albums/" + this.props.photo.album_id + "/photos/" + this.props.photo.id, {});
  },

  deletePhoto: function () {
    ApiUtil.deletePhoto(this.props.photo.id);
  },

  render: function () {
    if (this.props.photo.user_id == window.FollowFocus.currentUser.id) {
      return (
        <li className="photo-thumbnail" key={this.props.photo.id} >
        <div className="photo-thumbnail-container">
          <img src={this.props.photo.large_thumb} onClick={this.renderFullSize}/>
          <span className="delete-photo-button" onClick={this.deletePhoto}>Delete</span>
        </div>
        </li>
      );
    } else {
      return (
        <li className="photo-thumbnail" key={this.props.photo.id} >
        <div className="photo-thumbnail-container">
          <img src={this.props.photo.large_thumb} onClick={this.renderFullSize}/>
        </div>
        </li>
      );
    }

  }

});
