var AlbumIndexItem = React.createClass({

  render: function () {

    var Link = ReactRouter.Link;
    var albumCover = AlbumCoversStore.findCoverByAlbumId(this.props.album.id);

    var coverImage;
    if (albumCover !== undefined) {
      coverImage = albumCover.photo_attachment_url;
    } else {
      coverImage = window.FollowFocus.images.logoLens;
    }

    return (
      <div className="index-item-container">
        <img src={coverImage} />
        <a href={"#/albums/" + this.props.album.id} className="album-index-item" >
          <div className="table-cell">
            <span className="album-index-item-text">{this.props.album.title}</span>
          </div>
        </a>
      </div>
    );
  }

});
