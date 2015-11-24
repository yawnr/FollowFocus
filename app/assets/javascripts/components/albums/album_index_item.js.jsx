var AlbumIndexItem = React.createClass({

  render: function () {

    var Link = ReactRouter.Link;
    var albumCover = AlbumCoversStore.findCoverByAlbumId(this.props.album.id);

    return (
      <div className="album-index-item">
        <img src={albumCover.photo_attachment_url} className="album-cover-photo" />
        <div>
          <Link to={"/albums/" + this.props.album.id} className="album-link">
            <span className="album-index-item-text">{this.props.album.title}</span>
          </Link>
        </div>
      </div>
    );
  }

});
