var ExplorePage = React.createClass({

  render: function () {
    return (
      <div className="explore-page">
        <h3>Popular Tags</h3>
        <ExploreTagsIndex />
        <ExploreResults />
      </div>
    );
  }

});
