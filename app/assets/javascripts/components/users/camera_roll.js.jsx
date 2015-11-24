CameraRoll = React.createClass({

  getInitialState: function () {
    return { photos: PhotosStore.all(), view: "CameraRoll" };
  },

  componentDidMount: function () {
    PhotosStore.addChangeListener(this._onChange);
    UserUtil.fetchUserPhotos(this.props.user.id);
  },

  componentWillUnmount: function () {
    PhotosStore.removeChangeListener(this._onChange);
  },

  _onChange: function () {
    this.setState({ photos: PhotosStore.all() });
  },

  _switchView: function (e) {
    if (e.currentTarget.className === "camera-roll-selector" && this.state.view !== "CameraRoll") {
      this.setState({ view: "CameraRoll" });
    } else if (e.currentTarget.className === "album-view-selector" && this.state.view !== "AlbumView"){
      this.setState({ view: "AlbumView" });
    }
  },

  render: function () {
    if (this.state.view === "CameraRoll") {
      return(
        <div>
        <span className="camera-roll-selector" onClick={this._switchView}>Camera Roll</span>
        <span className="album-view-selector" onClick={this._switchView}>Albums</span>
          <ul>
            {this.state.photos.map(function (photo) {
              return <PhotoThumbnail photo={photo} />;
            })}
          </ul>
        </div>
      );
    } else {
      return(
        <div>
        <span className="camera-roll-selector" onClick={this._switchView}>Camera Roll</span>
        <span className="album-view-selector" onClick={this._switchView}>Albums</span>
          <AlbumIndex userId={this.props.user.id} />
        </div>
      );
    }
  }

});
