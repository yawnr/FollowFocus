var Profile = React.createClass({

  getInitialState: function () {
    return { user: {}, view: "AlbumView" };
  },

  componentDidMount: function () {
    UserStore.addChangeListener(this._userChanged);
    var userId = parseInt(this.props.params.userId);
    UserUtil.fetchUser(userId);
  },

  _userChanged: function () {
    this.setState({ user: UserStore.user() });
  },

  componentWillUnmount: function () {
    UserStore.removeChangeListener(this._userChanged);
  },

  componentWillReceiveProps: function (newProps) {
    this.setState({ user: {}, view: "AlbumView" });
    UserUtil.fetchUser(newProps.params.userId);
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
          <HeaderPhoto user={this.state.user} />
          <ProfilePhoto user={this.state.user} />
          <div className="view-selectors group">
            <ul className="view-ul group">
              <li className="camera-roll-selector selected" onClick={this._switchView}>Camera Roll</li>
              <li className="album-view-selector" onClick={this._switchView}>Albums</li>
            </ul>
          </div>
          <CameraRollFreewall user={this.state.user} />
        </div>
      );
    } else if (this.state.user && this.state.view === "AlbumView") {
        var checkView = "";
      if (this.state.user.id == window.FollowFocus.currentUser.id) {
        checkView = " album-view";
      }
      toRender = (
        <div>
          <HeaderPhoto user={this.state.user} />
          <ProfilePhoto user={this.state.user} />
          <div className="view-selectors group">
            <ul className={"view-ul group" + checkView}>
              <li className="camera-roll-selector" onClick={this._switchView}>Camera Roll</li>
              <li className="album-view-selector selected" onClick={this._switchView}>Albums</li>
              <li className="album-form-button" ><AlbumForm userId={this.props.params.userId}/></li>
            </ul>
          </div>
          <AlbumIndex userId={this.props.params.userId} />
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
