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
    var currDate = new Date();
    var album = {
      title: "New Album - " + currDate.getMonth() + "/" + currDate.getDay() + "/" + currDate.getFullYear()
    };

    ApiUtil.createAlbum(album, function (id) {
      this.history.pushState(null, "/albums/" + id, {});
    }.bind(this));

    this.setState(this.blankAttrs);
  },

  render: function () {
    return (
      <form className="new-album-form group" onSubmit={this.createAlbum}>
          <button>Create New Album</button>
      </form>
    );
  }



});
