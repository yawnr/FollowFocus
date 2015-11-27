var AlbumSearchResult = React.createClass({

  render: function () {

    return (
      <div className="search-result">
        <a href={"#/albums/" + this.props.album.id}>
          <div className="comment-user-pic" style={{backgroundImage: 'url(' + this.props.album.first_photo_thumb + ')'}}></div>
        </a>
        <a href={"#/albums/" + this.props.album.id}>
          <div className="username-search-result">{"Album: " + this.props.album.title}</div>
        </a>
        <ul>
          <li>Photos: {this.props.album.photo_count}</li>
          <li>Last updated: {this.props.album.last_updated}</li>
        </ul>
      </div>
    );
  }

});
