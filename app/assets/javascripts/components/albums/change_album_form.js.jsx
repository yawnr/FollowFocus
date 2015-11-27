var ChangeAlbumForm = React.createClass({

  getInitialState: function () {
    return { editing: false };
  },

  componentDidMount: function () {
    AlbumStore.addChangeListener(this.doneEditing);
  },

  componentWillUnmount: function () {
    AlbumStore.removeChangeListener(this.doneEditing);
  },

  beginEditing: function () {
    this.setState({ editing: true });
  },

  changeAlbumTitle: function (e) {
    var album = { id: this.props.album.id, title: e.currentTarget.firstChild.value };
    ApiUtil.editAlbumTitle(album);
  },

  doneEditing: function () {
    this.setState({ editing: false });
  },

  render: function () {

    var toRender;

    if (this.state.editing) {
      toRender = (
        <div>
          <form className="album-title-form" onSubmit={this.changeAlbumTitle}>
            <input type="text" className="album-title" htmlFor="album[title]" placeholder={this.props.album.title}/>
          </form>
          <div className="cancel-edit" onClick={this.doneEditing}>Cancel</div>
        </div>
      );
    } else {
      toRender = (
        <div>
          <div className="album-title" onClick={this.beginEditing}>{this.props.album.title}</div>
        </div>
      );
    }

    return toRender;
  }

});
