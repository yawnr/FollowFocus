var GalleryPhoto = React.createClass({


  render: function () {

    var Link = ReactRouter.Link;
    var photo_path = "/albums/" + this.props.photo.album_id + "/photos/" + this.props.photo.id;

    // return (
    //   <tr key={this.props.photo.id} className="gallery-photo-li" >
    //   <div className="gallery-photo">
    //     <img src={this.props.photo.medium}  />
    //     </div>
    //   </tr>
    // );

    return (
      <li key={this.props.photo.id} className="gallery-photo-li">
        <div className="gallery-photo-container" >
          <Link to={photo_path} fromGallery={true}>
            <div className="gallery-photo">
              <img src={this.props.photo.small}  />
            </div>
            <GalleryPhotoInfoBox photo={this.props.photo} />
          </Link>
        </div>
      </li>
    );
  }

});
