var BigAlbumForm = React.createClass({

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
      title: "New Album - " + (currDate.getMonth() + 1) + "/" + currDate.getDate() + "/" + currDate.getFullYear()
    };

    ApiUtil.createAlbum(album, function (id) {
      this.history.pushState(null, "/albums/" + id, {});
    }.bind(this));

    this.setState(this.blankAttrs);
  },

  render: function () {
    if (this.props.userId == window.FollowFocus.currentUser.id) {
      return (
        <form className="big-album-form group" onSubmit={this.createAlbum}>
            <button>Upload to a New Album</button>
        </form>
      );
    } else {
      return (<div></div>);
    }
  }



});
