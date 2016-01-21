var PhotoIndex = React.createClass({

  componentDidMount: function () {
    window.addEventListener('resize', this.handleResize);
  },

  handleResize: function () {
    var width = Math.floor((window.innerWidth - 40) / 160) * 160;
    $(".photo-index").width( width );
  },

  render: function () {
    this.handleResize();
    return(
      <div className="group">
        <ul className="photo-index group">
          {this.props.photos.map(function (photo) {
              return (<PhotoThumbnail key={photo.id} photo={photo} />);
            })
          }
        </ul>
      </div>
    );
  }

});
