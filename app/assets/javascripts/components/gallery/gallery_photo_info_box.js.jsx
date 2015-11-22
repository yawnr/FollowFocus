var GalleryPhotoInfoBox = React.createClass({

  render: function () {
    return (
      <div className="gallery-photo-info">
        <ul>
          <li>{this.props.photo.username}</li>
          <li>{this.props.photo.file_name}</li>
          <li>{this.props.photo.album_name}</li>
          <li>{this.props.photo.num_comments}</li>
        </ul>
      </div>
    );
  }

});
