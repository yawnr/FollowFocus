var AlbumIndex = React.createClass({

  getInitialState: function () {
    return { albums: [] };
  },

  componentDidMount: function () {
    AlbumStore.addChangeListener(this._albumsChanged);
    AlbumCoversStore.addChangeListener(this._albumsChanged);
    ApiUtil.fetchUserAlbums(this.props.userId);
    UserUtil.fetchAlbumCovers(this.props.userId);
    window.addEventListener('resize', this.handleResize);
  },

  handleResize: function () {
    var width = Math.floor(window.innerWidth / 320) * 320;
    $(".album-index").width( width );
  },

  _albumsChanged: function () {
    this.setState({ albums: AlbumStore.all() });
  },

  componentWillUnmount: function () {
    AlbumStore.removeChangeListener(this._albumsChanged);
    AlbumCoversStore.removeChangeListener(this._albumsChanged);
    window.removeEventListener('resize', this.handleResize);
  },

  componentWillReceiveProps: function (newProps) {
    ApiUtil.fetchUserAlbums(newProps.userId);
    UserUtil.fetchAlbumCovers(newProps.userId);
  },

  render: function () {

    var Link = ReactRouter.Link;
    var toRender;

    if (AlbumStore.all().length > 0) {
      this.handleResize();
      toRender = (
        <div className="album-index-container">

          <ul className="album-index group">
            {this.state.albums.map(function (album) {
                return (<AlbumIndexItem key={album.id} album={album} />);
              })
            }
          </ul>
        </div>
      );
    } else {
      toRender = (
        <div className="album-index-container">


          <div className="album-index"></div>
        </div>
      );
    }

    return (
      toRender
    );
  }

});
