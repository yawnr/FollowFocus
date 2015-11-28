var NavBar = React.createClass({

  render: function () {

    var Link = ReactRouter.Link;

    var youLink;
    if (window.FollowFocus.currentUser.id !== "null") {
      youLink = "#/users/" + window.FollowFocus.currentUser.id;
    } else {
      youLink = "http://www.followfocus.co/session/new";
    }

    return (
      <div className="navbar-container">
        <div className="navbar">


            <Link to="/" >
              <img src={window.FollowFocus.images.logo} alt="logo" className="logo">
                <img src={window.FollowFocus.images.logoLens} alt="logo-lens" className="logo-lens" />
              </img>
            </ Link>

          <li><Link to="/" className="link to-home">Home</Link></li>
          <li><a href={youLink} className="link">You</a></li>
          <li><Link to="/explore" className="link">Explore</Link></li>

          <SearchBar />

          <Link to="/upload" className="upload-link">
            <img src={window.FollowFocus.images.uploadButton} alt="upload-button" className="upload-button" />
          </Link>

          <LoginLogoutButton />

        </div>
      </div>
    );
  }

});
