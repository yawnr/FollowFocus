var Profile = React.createClass({

  getInitialState: function () {
    return { user: UserStore.user(), view: "CameraRoll" };
  },

  componentDidMount: function () {
    UserStore.addChangeListener(this._userChanged);
    var userId = parseInt(this.props.routeParams.userId);
    UserUtil.fetchUser(userId);
  },

  _userChanged: function () {
    this.setState({ user: UserStore.user() });
  },

  componentWillUnmount: function () {
    UserStore.removeChangeListener(this._userChanged);
  },

  componentWillReceiveProps: function (newParams) {
    UserUtil.fetchUser(newParams.params.userId);
  },

  _switchView: function (e) {
    if (e.currentTarget.className === "camera-roll-selector" && this.state.view !== "CameraRoll") {
      this.setState({ view: "CameraRoll" });
    } else if (e.currentTarget.className === "album-view-selector" && this.state.view !== "AlbumView"){
      this.setState({ view: "AlbumView" });
    }
  },

  render: function () {


    var toRender;

    if (this.state.user && this.state.view === "CameraRoll") {
      toRender = (
        <div>
          <ProfilePhoto user={this.state.user} />
          <span className="camera-roll-selector" onClick={this._switchView}>Camera Roll</span>
          <span className="album-view-selector" onClick={this._switchView}>Albums</span>
          <CameraRoll user={this.state.user} />
        </div>
      );
    } else if (this.state.user && this.state.view === "AlbumView") {
      toRender = (
        <div>
          <ProfilePhoto user={this.state.user} />
          <span className="camera-roll-selector" onClick={this._switchView}>Camera Roll</span>
          <span className="album-view-selector" onClick={this._switchView}>Albums</span>
          <AlbumIndex userId={this.state.user.id} />
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
