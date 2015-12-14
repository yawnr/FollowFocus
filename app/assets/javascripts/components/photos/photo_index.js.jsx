var PhotoIndex = React.createClass({

  render: function () {
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
