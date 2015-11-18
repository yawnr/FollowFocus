var NavBar = React.createClass({

  render: function () {

    var Link = ReactRouter.Link;

    return (
      <div className="navbar">

          <Link to="/" >
            <img src={window.FollowFocus.images.logo} alt="logo" className="logo">
              <img src={window.FollowFocus.images.logoLens} alt="logo-lens" className="logo-lens" />
            </img>
          </ Link>

        <li><Link to="/" className="link">Home</Link></li>
        <li><Link to="/user/:userId" className="link">You</Link></li>
        <li><Link to="/explore" className="link">Explore</Link></li>
        <Link to="/upload" className="upload-link">
          <img src={window.FollowFocus.images.uploadButton} alt="upload-button" className="upload-button" />
        </Link>
      </div>
    );
  }

});
