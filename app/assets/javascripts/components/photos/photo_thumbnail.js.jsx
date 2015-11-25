var PhotoThumbnail = React.createClass({

  mixins: [ReactRouter.History],

  renderFullSize: function () {
    this.history.pushState(null, "/albums/" + this.props.photo.album_id + "/photos/" + this.props.photo.id, {});
  },

  deletePhoto: function () {
    ApiUtil.deletePhoto(this.props.photo.id);
  },

  render: function () {

    return (
      <li className="photo-thumbnail-container" key={this.props.photo.id} >
        <img src={this.props.photo.photo_attachment_url} onClick={this.renderFullSize}/>
        <span onClick={this.deletePhoto}>Delete</span>
      </li>
    );

  }

});
