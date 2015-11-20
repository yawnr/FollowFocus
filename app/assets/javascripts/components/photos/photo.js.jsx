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
        <section>
          <div className="parent-container">
            <div className="photo-container">
              <img className="full-size-photo" src={this.state.photo.url} />
            </div>
          </div>

          <div>
            <CommentForm photo={this.state.photo}/>

            <br />

            <CommentIndex photo={this.state.photo}/>
          </div>
        </section>
      );
    } else {
      toRender = (<div className="parent-container"></div>);
    }

    return(
      toRender
    );
  }

});
