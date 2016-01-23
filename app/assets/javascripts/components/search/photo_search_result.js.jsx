var PhotoSearchResult = React.createClass({

  render: function () {

    var comments;
    if (this.props.photo.num_comments == 1) {
      comments = "comment";
    } else {
      comments = "comments";
    }

    return (
      <div className="search-result">
        <a href={"#/albums/" + this.props.photo.album_id + "/photos/" + this.props.photo.id}>
          <div className="comment-user-pic" style={{backgroundImage: 'url(' + this.props.photo.large_thumb + ')'}}></div>
        </a>
        <a href={"#/albums/" + this.props.photo.album_id + "/photos/" + this.props.photo.id}>
          <div className="username-search-result">{"Photo: " + this.props.photo.title}</div>
        </a>
        <ul>
          <li>{this.props.photo.num_comments} {comments}</li>
          <li>Uploaded: {this.props.photo.created_at}</li>
        </ul>
      </div>
    );
  }

});
