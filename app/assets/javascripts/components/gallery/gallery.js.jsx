var Gallery = React.createClass({

  getInitialState: function () {
    return { gallery: GalleryPhotosStore.all(), lastFetchTime: GalleryPhotosStore.lastFetch() };
  },

  componentDidMount: function () {
    GalleryPhotosStore.addChangeListener(this._onChange);

    var visitTime = new Date();
    if (!this.state.lastFetchTime || (visitTime - this.state.lastFetchTime) / 60000 > 30) {
      GalleryUtil.fetchGalleryPhotos();
    }
  },

  refreshGallery: function () {
    GalleryUtil.fetchGalleryPhotos();
  },

  componentWillUnmount: function () {
    GalleryPhotosStore.removeChangeListener(this._onChange);
  },

  _onChange: function () {
    this.setState({ gallery: GalleryPhotosStore.all() });
  },

  render: function () {

    var toRender;

    if (this.state.gallery.length > 0) {
      toRender = (
        <div className="gallery group">
          <h3 className="gallery-header"></h3>

          <div className="refresh-gallery" onClick={this.refreshGallery} >↻</div>

          <div className="gallery-photos-container group">
            <ul className="gallery-ul">
              {this.state.gallery.map(function (photo) {
                return <GalleryPhoto key = {photo.id} photo={photo} />;
              })}
            </ul>
          </div>

        </div>
      );
    } else {
      toRender = (<h3 className="gallery-header"></h3>);
    }

    return (
      toRender
    );
  }

});
