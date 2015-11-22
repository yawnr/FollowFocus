var GalleryPhoto = React.createClass({


  render: function () {

    var Link = ReactRouter.Link;
    var photo_path = "/albums/" + this.props.photo.album_id + "/photos/" + this.props.photo.id;

    return (
      <li key={this.props.photo.id} className="gallery-photo-li">
        <div className="gallery-photo-container" >
          <Link to={photo_path} fromGallery={true}>
          <img src={this.props.photo.photo_attachment_url} className="gallery-photo" />
          <GalleryPhotoInfoBox photo={this.props.photo} />
          </Link>
        </div>
      </li>
    );
  }

});
