var CommentIndex = React.createClass({

  getInitialState: function () {
    return { comments: CommentStore.all() };
  },

  componentDidMount: function () {
    CommentStore.addChangeListener(this._onChange);
    ApiUtil.fetchComments(this.props.photo.id);
  },

  componentWillUnmount: function () {
    CommentStore.removeChangeListener(this._onChange);
  },

  _onChange: function () {
    this.setState({ comments: CommentStore.all() });
  },

  componentWillReceiveProps: function (newProps) {
    ApiUtil.fetchComments(newProps.photo.id);
  },

  render: function () {
    var toRender;

    if (this.state.comments.length > 0) {
      toRender = (
        <div className="comments-index">
          <ul>
            {this.state.comments.map(function (comment) {
              return <Comment key={comment.id} comment={comment} />;
            })}
          </ul>
        </div>
      );
    } else {
      toRender = (
        <div>
          Comments
        </div>
      );
    }

    return(
      toRender
    );
  }

});
