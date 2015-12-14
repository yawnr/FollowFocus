var ExploreTag = React.createClass({

  toggleActive: function (e) {
    if (e.target.classList[1] == "inactive") {
      ExploreUtil.fetchExplorePhotos(this.props.tag);
    } else {
      ExplorePhotosStore.removeTagPhotos(e.target.textContent);
    }
    $(e.target).toggleClass('inactive');
  },

  render: function () {
      return (
        <div className="tag-container">
          <div className="explore-tag inactive" onClick={this.toggleActive}>{this.props.tag}</div>
        </div>
      );
  }

});
