var AlbumForm = React.createClass({

  mixins: [React.addons.LinkedStateMixin, ReactRouter.history],

  blankAttrs: {
      title: '',
      description: ''
    },

  getInitialState: function () {
    return this.blankAttrs;
  },

  createAlbum: function (event) {
    event.preventDefault();
    var album = {
      title: this.state.title,
      description: this.state.description,
      user_id: CurrentUserStore.currentUserId()
    };

    ApiUtil.createAlbum(album, function (id) {
      this.history.pushState(null, "/albums/" + id, {});
    }.bind(this));

    this.setState(this.blankAttrs);
  },

  render: function () {
    return (
      <form className="new-album-form" onSubmit={this.createAlbum}>
        <div>
          <label htmlFor="album_title">Title</label>
            <input type="text" id="album_title" valueLink={this.linkState("title")} />
        </div>

        <div>
          <label htmlFor="album_description">Description</label>
            <textarea id="album_description" cols="40" rows="5" valueLink={this.linkState("description")} />
        </div>

        <button>Create Album</button>
        <br />
      </form>
    );
  }



});
