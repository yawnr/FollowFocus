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
      $(".comments-index").animate({scrollTop: $('.comments-index').prop("scrollHeight")}, "slow");
    }, 500);
  },

  render: function () {
    return (
      <form className="new-comment-form group" onSubmit={this.createComment}>

        <label htmlFor="comment_body" />
        <div className="comment-body-input">
            <input type="text" id="comment_body"  valueLink={this.linkState("body")} placeholder="Add a comment"/>
        </div>

        <div>
          <button className="submit-comment">Submit Comment</button>
        </div>
        <br />
      </form>
    );
  }

});
