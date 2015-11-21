var AlbumForm = React.createClass({

  mixins: [React.addons.LinkedStateMixin, ReactRouter.History],

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
      // user_id: window.FollowFocus.currentUser.id
      // temporary until we learn how to get current user
    };

    ApiUtil.createAlbum(album, function (id) {
      this.history.pushState(null, "/albums/" + id, {});
    }.bind(this));

    this.setState(this.blankAttrs);
  },

  render: function () {
    return (
      <form className="new-album-form group" onSubmit={this.createAlbum}>
        <label htmlFor="album_title" />
        <div className="album-title-input">
            <input type="text" id="album_title" valueLink={this.linkState("title")} placeholder="Title"/>
        </div>

        <label htmlFor="album_description" />
        <div className="album-description-input">
            <textarea id="album_description" cols="40" rows="1" valueLink={this.linkState("description")} placeholder="Description"/>
        </div>

        <div>
          <button>Create New Album</button>
        </div>
        <br />
      </form>
    );
  }



});
