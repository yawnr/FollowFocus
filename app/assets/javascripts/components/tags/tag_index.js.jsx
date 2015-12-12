var TagIndex = React.createClass({

  getInitialState: function () {
    return { tags: [] };
  },

  componentDidMount: function () {
    TagStore.addChangeListener(this._onChange);
    ApiUtil.fetchTags(this.props.photo.id);
  },

  componentWillUnmount: function () {
    TagStore.removeChangeListener(this._onChange);
  },

  _onChange: function () {
    this.setState({ tags: TagStore.all() });
  },

  componentWillReceiveProps: function (newProps) {
    ApiUtil.fetchTags(newProps.photo.id);
  },

  render: function () {
    var toRender;
    var that = this;

    if (this.state.tags.length > 0) {
      toRender = (
        <div className="tags-index group">
          <div>
            {this.state.tags.map(function (tag) {
              return <Tag key={tag.id} photo={that.props.photo} tag={tag} />;
            })}
          </div>
        </div>
      );
    } else if (this.props.photo.user_id == window.FollowFocus.currentUser.id){
        toRender = <div></div>;
    } else {
        toRender = (
          <div className="no-tag-text">
            No tags yet.
          </div>
        );
    }

    return(
      toRender
    );
  }

});
