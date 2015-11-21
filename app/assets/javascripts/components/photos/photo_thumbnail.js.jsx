var PhotoThumbnail = React.createClass({

  mixins: [ReactRouter.History],

  renderFullSize: function () {
    this.history.pushState(null, "/photos/" + this.props.photo.id, {});
  },

  render: function () {

    return (
      <li className="photo-thumbnail-container" key={this.props.photo.id} onClick={this.renderFullSize}>
        <img src={this.props.photo.photo_attachment_url} />
      </li>
    );

  }

});
