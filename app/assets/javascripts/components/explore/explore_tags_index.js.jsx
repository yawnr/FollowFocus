var ExploreTagsIndex = React.createClass({

  getInitialState: function () {
    return { tags: [] };
  },

  componentDidMount: function () {
    ExploreTagsStore.addChangeListener(this._onChange);
    ExploreUtil.fetchExploreTags();
  },

  componentWillUnmount: function () {
    ExploreTagsStore.removeChangeListener(this._onChange);
  },

  _onChange: function () {
    this.setState({ tags: ExploreTagsStore.all() });
  },

  render: function () {
    if (this.state.tags.length > 0) {
      return (
        <div className="explore-tags-index group">
          {this.state.tags.map(function (tag) {
            return <ExploreTag key={tag} tag={tag} />;
          })}
        </div>
      );
    } else {
      return <div className="explore-tags-index"></div>;
    }
  }


});
