var PhotoIndex = React.createClass({

  getInitialState: function () {
    return { page: 0, firstRender: true };
  },

  componentDidMount: function () {
    window.addEventListener('resize', this.handleResize);
  },

  handleResize: function () {
    var width = Math.floor((window.innerWidth - 40) / 160) * 160;
    $(".photo-index").width( width );
  },

  nextPage: function () {
    var newPage = this.state.page + 1;
    this.setState({ page: newPage });
  },

  prevPage: function () {
    var newPage = this.state.page - 1;
    this.setState({ page: newPage });
  },

  render: function () {

    var showNext = "";
    var showPrev = "";

    var photosPerPage = Math.floor((window.innerWidth - 40) / 160) * 4;

    if (this.state.page === 0) {
      showPrev = " no-show";
    }

    if (this.props.photos.length - (photosPerPage * (this.state.page + 1)) <= 0) {
      showNext = " no-show";
    }

    var photosToRender = this.props.photos.slice((photosPerPage * this.state.page), (photosPerPage * this.state.page) + photosPerPage);

    setTimeout(function () {
      $(".photo-index").animate( { width: Math.floor((window.innerWidth - 40) / 160) * 160 }, 500 );
    }, 50);

    return(
      <div className="group">
        <ul className="photo-index group">
          {photosToRender.map(function (photo) {
              return (<PhotoThumbnail key={photo.id} photo={photo} />);
            })
          }
        </ul>
        <div className={"album-page-num"}>{((photosPerPage * this.state.page) + 1) + " - " + ((photosPerPage * this.state.page) + photosToRender.length) + " of " + this.props.photos.length}</div>
        <div className="album-page-toggles group">
          <div className={"album-page" + showPrev} onClick={this.prevPage}>Prev</div>
          <div className={"album-page" + showNext} onClick={this.nextPage}>Next</div>
        </div>
      </div>
    );
  }

});
