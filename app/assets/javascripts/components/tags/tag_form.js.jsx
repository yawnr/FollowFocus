var TagForm = React.createClass({

  mixins: [React.addons.LinkedStateMixin],

  getInitialState: function () {
    return { tag: '' };
  },

  createTag: function (event) {
    event.preventDefault();
    var tag = {
      tag: this.state.tag,
      photo_id: this.props.photo.id,
    };

    ApiUtil.createTag(tag);

    this.setState({ tag: '' });
  },

  render: function () {
    if (this.props.photo.user_id == window.FollowFocus.currentUser.id) {
      return (
        <form className="new-tag-form group" onSubmit={this.createTag}>

          <label htmlFor="tag" />
          <div className="tag-input">
              <input type="text" id="tag_tag"  valueLink={this.linkState("tag")} placeholder="Add a tag"/>
            <button className="submit-tag">+</button>
          </div>
          <br />
        </form>
      );
    } else {
      return <div></div>;
    }
  }

});
