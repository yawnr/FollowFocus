var AlbumIndex = React.createClass({

  getInitialState: function () {
    return { albums: [] };
  },

  componentDidMount: function () {
    AlbumStore.addChangeListener(this._albumsChanged);
    this._albumsChanged();
  },

  _albumsChanged: function () {
    this.setState({ albums: ApiUtil.fetchAlbums() });
  },

  componentWillUnmount: function () {
    AlbumStore.removeChangeListener(this._albumsChanged);
  },

  render: function () {

    var toRender;

    if (this.state.albums) {
      toRender = (
        <div>
          <ul>
            {this.state.albums.map(function (album) {
                return (<li>{album.title}</li>);
              })
            }
          </ul>
        </div>
      );
    } else {
      toRender = (<div></div>);
    }

    return (
      toRender
    );
  }

});
