var Photo = React.createClass({

  componentWillMount: function () {
    ApiUtil.fetchPhoto(parseInt(this.props.routeParams.photoId));
    PhotoStore.addChangeListener(this._onChange);
  },

  _onChange: function () {
    this.setState({ photo: PhotoStore.findById(parseInt(this.props.routeParams.photoId)) });
  },

  render: function () {

    var toRender;

    if (this.state) {
      toRender = (
        <div className="parent-container">
          <div className="photo-container">
            <img src={this.state.photo.url} />
          </div>
        </div>
      );
    } else {
      toRender = (<div className="parent-container"></div>);
    }

    return(
      toRender
    );
  }

});
