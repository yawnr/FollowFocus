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

    var toRender;

    if (this.state.user) {
      toRender = (
        <div>
          <ProfilePhoto user={this.state.user} />
          <AlbumIndex userId={parseInt(this.props.routeParams.userId)}/>
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
