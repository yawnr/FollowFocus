$(function () {

  var root = document.getElementById('content');
  var Router = ReactRouter.Router;
  var Route = ReactRouter.Route;
  var IndexRoute = ReactRouter.IndexRoute;

  var App = React.createClass({
    render: function () {
      return (
        <div className="app">
          <nav><NavBar /></nav>
          {this.props.children}

        </div>
      );
    }
  });

var routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Gallery} />
    <Route path="/users/:userId" component={Profile} />
    <Route path="/albums/:albumId" component={Album} />
    <Route path="/albums/:albumId/photos/:photoId" component={Photo} />
    <Route path="/album/new" component={NewAlbum} />
    <Route path="/explore" component={ExplorePage} />
    <Route path="/search" component={Search} />
    <Route path="/upload" component={UploadPage} />
  </Route>
);

React.render(<Router>{routes}</Router>, root);

});
