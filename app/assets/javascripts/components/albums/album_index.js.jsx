var AlbumIndex = React.createClass({

  getInitialState: function () {
    return { albums: [] };
  },

  componentDidMount: function () {
    AlbumStore.addChangeListener(this._albumsChanged);
    ApiUtil.fetchAlbums();
  },

  _albumsChanged: function () {
    this.setState({ albums: AlbumStore.all() });
  },

  componentWillUnmount: function () {
    AlbumStore.removeChangeListener(this._albumsChanged);
  },

  render: function () {
    debugger
    var toRender;

    if (this.state.albums) {
      toRender = (
        <div>
          <ul className="album-index">
            {this.state.albums.map(function (album) {
                return (<AlbumIndexItem key={album.id} album={album} />);
              })
            }
          </ul>
        </div>
      );
    } else {
      toRender = (
        <div className="album-index"></div>
      );
    }

    return (
      toRender
    );
  }

});
