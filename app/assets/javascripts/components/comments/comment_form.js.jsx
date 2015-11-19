var CommentForm = React.createClass({

  mixins: [React.addons.LinkedStateMixin],

  getInitialState: function () {
    return { body: '' };
  },

  createComment: function (event) {
    event.preventDefault();
    var comment = {
      body: this.state.body,
      photo_id: this.props.photo.id,
    };

    ApiUtil.createComment(comment);

    this.setState({ body: '' });

    setTimeout(function () {
      $("html, body").animate({ scrollTop: $(document).height() }, "slow");
    }, 500);
  },

  render: function () {
    return (
      <form className="new-comment-form group" onSubmit={this.createComment}>

        <label htmlFor="comment_body" />
        <div className="comment-body-input">
            <textarea id="comment_body" cols="100" rows="5" valueLink={this.linkState("body")} placeholder="New Comment"/>
        </div>

        <div>
          <button>Submit Comment</button>
        </div>
        <br />
      </form>
    );
  }

});
