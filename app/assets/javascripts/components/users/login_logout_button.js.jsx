var LoginLogoutButton = React.createClass({

  mixins: [ReactRouter.History],

  logOut: function () {
    UserStore.addChangeListener(this.redirectToLogin);
    UserUtil.logOut();
  },

  redirectToLogin: function () {
    window.location.href= "http://localhost:3000/session/new";
  },

  render: function () {

    if (window.FollowFocus.currentUser.id !== "null") {
      return (
        <div className="login-logout" onClick={this.logOut}>Log Out</div>
      );
    } else {
      return (
        <a href="http://localhost:3000/session/new" className="login-logout" onClick={this.redirectToLogin}>Log In</a>
      );
    }

  }

});
