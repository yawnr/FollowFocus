var AlbumIndex = React.createClass({

  getInitialState: function () {
    return { albums: AlbumStore.all() };
  },

  componentDidMount: function () {
    AlbumStore.addChangeListener(this._albumsChanged);
    ApiUtil.fetchUserAlbums(this.props.userId);
    UserUtil.fetchAlbumCovers(this.props.userId);
  },

  _albumsChanged: function () {
    this.setState({ albums: AlbumStore.all() });
  },

  componentWillUnmount: function () {
    AlbumStore.removeChangeListener(this._albumsChanged);
  },

  render: function () {

    var Link = ReactRouter.Link;
    var toRender;

    if (this.state.albums.length > 0) {
      toRender = (
        <div>

        <AlbumForm />
        <br />

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
        <div>
          <AlbumForm />

          <div className="album-index"></div>
        </div>
      );
    }

    return (
      toRender
    );
  }

});
