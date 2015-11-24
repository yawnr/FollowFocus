var Profile = React.createClass({

  getInitialState: function () {
    return { user: UserStore.user() };
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

  render: function () {

          // <AlbumIndex userId={parseInt(this.props.routeParams.userId)}/>
    var toRender;

    if (this.state.user) {
      toRender = (
        <div>
          <ProfilePhoto user={this.state.user} />
          <CameraRoll user={this.state.user} />
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
