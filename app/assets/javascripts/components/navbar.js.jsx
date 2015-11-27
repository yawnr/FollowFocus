var NavBar = React.createClass({

  render: function () {

    var Link = ReactRouter.Link;

    return (
      <div className="navbar-container">
        <div className="navbar">


            <Link to="/" >
              <img src={window.FollowFocus.images.logo} alt="logo" className="logo">
                <img src={window.FollowFocus.images.logoLens} alt="logo-lens" className="logo-lens" />
              </img>
            </ Link>

          <li><Link to="/" className="link to-home">Home</Link></li>
          <li><Link to={"/users/" + window.FollowFocus.currentUser.id} className="link">You</Link></li>
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
