var ExploreTag = React.createClass({

  toggleActive: function (e) {
    ExploreUtil.fetchExplorePhotos(this.props.tag);
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
