var CameraRollFreewall = React.createClass({

  getInitialState: function () {
    return { photos: this.props.photos };
  },

  componentDidMount: function () {
    var temp = "<a href='#/'><div class='cell' style='width:{width}px; height: {height}px; background-image: url(http://s3.amazonaws.com/FOLLOW-FOCUS-DEV/photos/photo_attachments/000/000/302/original/250352_587840231385_6942936_n.jpg?1448467066)'></div></a>";
			var w = 1, html = '', limitItem = this.state.photos.length;
			for (var i = 0; i < limitItem; ++i) {

          var image = new Image();
          image.src = this.state.photos[i].photo_attachment_url;

          var width = image.width;
          var height = image.height;

				w = 200 +  200 * Math.random() << 0;
				html += temp.replace("#/", "#/albums/" + this.state.photos[i].album_id + "/photos/" + this.state.photos[i].id).replace(/\{height\}/g, height / 2).replace(/\{width\}/g, width / 2).replace("{index}", i + 1).replace("http://s3.amazonaws.com/FOLLOW-FOCUS-DEV/photos/photo_attachments/000/000/302/original/250352_587840231385_6942936_n.jpg?1448467066", this.state.photos[i].photo_attachment_url);
			}
			$("#freewall").html(html);

			var wall = new freewall("#freewall");
			wall.reset({
				selector: '.cell',
				animate: true,
				cellW: 20,
				cellH: 200,
				onResize: function() {
					wall.fitWidth();
				}
			});
			wall.fitWidth();
			// for scroll bar appear;
			$(window).trigger("resize");

  },

  // getInitialState: function () {
  //   return { photos: [] };
  // },
  //
  // componentDidMount: function () {
  //   PhotosStore.addChangeListener(this._photosChanged);
  //   ApiUtil.fetchAlbumPhotos(this.props.album.id);
  // },
  //
  // _photosChanged: function () {
  //   this.setState({ photos: PhotosStore.all() });
  // },
  //
  // componentWillUnmount: function () {
  //   PhotosStore.removeChangeListener(this._photosChanged);
  // },
  //
  // componentWillReceiveProps: function (newParams) {
  //   ApiUtil.fetchAlbumPhotos(newParams.params.albumId);
  // },

  render: function () {
      // this return is the only thing that was here before trying out freewall
  //   return(
  //     <div>
  //       <ul className="photo-index group">
  //         {this.props.photos.map(function (photo) {
  //             return (<PhotoThumbnail key={photo.id} photo={photo} />);
  //           })
  //         }
  //       </ul>
  //     </div>
  //   );
  // }
    return(
        <div id="freewall" className="free-wall"></div>
    );
}
});
