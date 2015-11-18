var Album = React.createClass({

  getInitialState: function () {
    return { photos: [] };
  },

  render: function () {

    var toRender;

    var album = AlbumStore.findById(parseInt(this.props.routeParams.albumId));
    debugger
    if (this.state.photos.length > 0) {
      toRender = (
        <div>
          <h3>{album.title}</h3>
          <ul>
            {this.state.photos.map(function (photo) {
              return <li>"here's where a photo would go"</li>;
            })}
          </ul>
        </div>
      );
    } else {
      toRender = (<div><h3>{album.title}</h3></div>);
    }

    return (
      toRender
    );
  }

});
