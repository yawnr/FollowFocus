var Gallery = React.createClass({

  getInitialState: function () {
    return { gallery: GalleryPhotosStore.all() };
  },

  componentDidMount: function () {
    GalleryPhotosStore.addChangeListener(this._onChange);
    GalleryUtil.fetchGalleryPhotos(1);
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
        <div>
          <h3 className="gallery-header">Gallery</h3>
          <ul>
            {this.state.gallery.map(function (photo) {
              return <GalleryPhoto key = {photo.id} photo={photo} />;
            })}
          </ul>
        </div>
      );
    } else {
      toRender = (<h3 className="gallery-header">Gallery</h3>);
    }

    return (
      toRender
    );
  }

});
