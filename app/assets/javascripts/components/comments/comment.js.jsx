var Comment = React.createClass({

  render: function () {
    return (
      <li className="comment group" key={this.props.comment.id}>
        <a href={"#/users/" + this.props.comment.user_id}>
          <div className="comment-user-pic" style={{backgroundImage: 'url(' + this.props.comment.user_photo + ')'}}></div>
        </a>
        <a href={"#/users/" + this.props.comment.user_id}>
          <div className="comment-username">{this.props.comment.username}</div>
        </a>
        <div className="comment-date">{this.props.comment.created_at}</div>
        <div className="comment-body">{this.props.comment.body}</div>
      </li>
    );
  }

});
