ExploreResults = React.createClass({

  getInitialState: function () {
    return { photos: [] };
  },

  componentDidMount: function () {
    ExplorePhotosStore.resetPhotos();
    ExplorePhotosStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function () {
    ExplorePhotosStore.resetPhotos();
    ExplorePhotosStore.removeChangeListener(this._onChange);
  },

  _onChange: function () {
    this.setState({ photos: ExplorePhotosStore.all() });
  },

  render: function () {
    if (this.state.photos.length > 0) {
      return (
        <div className="explore-results">
          <PhotoIndex photos={this.state.photos} />
        </div>
      );
    } else {
      return (
        <div className="explore-results">
        </div>
      );
    }
  }

});
