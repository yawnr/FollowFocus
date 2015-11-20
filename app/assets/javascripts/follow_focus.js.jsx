$(function () {

  var root = document.getElementById('content');
  var Router = ReactRouter.Router;
  var Route = ReactRouter.Route;

  var App = React.createClass({
    render: function () {
      return (
        <div>
          <nav><NavBar /></nav>
          {this.props.children}
        </div>
      );
    }
  });

var routes = (
  <Route path="/" component={App}>
    <Route path="/users/:userId" component={Profile} />
    <Route path="/albums/:albumId" component={Album} />
    <Route path="/albums/new" component={AlbumForm} />
    <Route path="/photos/:photoId" component={Photo} />
  </Route>
);

React.render(<Router>{routes}</Router>, root);

});
