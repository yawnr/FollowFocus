var UserSearchResult = React.createClass({

  render: function () {
    return (
      <div className="search-result">
        <a href={"#/users/" + this.props.user.id}>
          <div className="comment-user-pic" style={{backgroundImage: 'url(' + this.props.user.profile_photo_small_thumb + ')'}}></div>
        </a>
        <a href={"#/users/" + this.props.user.id}>
          <div className="username-search-result">{"User: " + this.props.user.username}</div>
        </a>
        <ul>
          <li>Albums: {this.props.user.album_count}</li>
          <li>Photos: {this.props.user.photo_count}</li>
          <li>Last posted: {this.props.user.last_active}</li>
        </ul>
      </div>
    );
  }

});
