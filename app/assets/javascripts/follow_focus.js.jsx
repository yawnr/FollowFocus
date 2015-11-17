$(function () {

  var root = document.getElementById('content');
  var Router = ReactRouter.Router;
  var Route = ReactRouter.Route;

  var App = React.createClass({
    render: function () {
      return (
        <div>
          <NavBar />
        </div>
      );
    }
  });

var routes = (
  <Route path="/" component={App}>

  </Route>
);

React.render(<Router>{routes}</Router>, root);

});
