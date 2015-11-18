$(function () {

  var root = document.getElementById('content');
  var Router = ReactRouter.Router;
  var Route = ReactRouter.Route;

  var App = React.createClass({
    render: function () {
      return (
        <div>
          <NavBar />
          {this.props.children}
        </div>
      );
    }
  });

var routes = (
  <Route path="/" component={App}>
    <Route path="/users/:userId" component={AlbumIndex} />
  </Route>
);

React.render(<Router>{routes}</Router>, root);

});
