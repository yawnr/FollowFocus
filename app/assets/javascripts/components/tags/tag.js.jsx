var Tag = React.createClass({

  deleteTag: function () {
    ApiUtil.deleteTag(this.props.tag.id);
  },

  render: function () {
    if (this.props.photo.user_id == window.FollowFocus.currentUser.id) {
      return (
        <div className="tag-container">
          <div className="tag">{this.props.tag.tag}
          <div className="delete-tag" onClick={this.deleteTag}>x</div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="tag-container-not-own ">
            <div className="tag-not-own">{this.props.tag.tag}</div>
        </div>
      );
    }
  }

});
