var PhotoThumbnail = React.createClass({

  render: function () {
    return (
      <li key={this.props.photo.id}>
        <img src={this.props.photo.url} className="photo-thumbnail" />
      </li>
    );
  }

});
