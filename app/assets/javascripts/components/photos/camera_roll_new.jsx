var CameraRollFreewall = React.createClass({

  componentWillMount: function () {
    UserUtil.fetchUserPhotos(this.props.user.id);
    PhotosStore.addChangeListener(this.onChange);
  },

  getInitialState: function () {
    return { photos: [] };
  },

  componentWillUnmount: function () {
    PhotosStore.removeChangeListener(this.onChange);
  },

  onChange: function () {
    var photos = PhotosStore.all();

    if (photos.length > 0) {
      var temp = "<a href='#/'><div class='cell' style='width:{width}px; height: {height}px; background-image: url(http://s3.amazonaws.com/FOLLOW-FOCUS-DEV/photos/photo_attachments/000/000/302/original/250352_587840231385_6942936_n.jpg?1448467066)'></div></a>";
        var w = 1, html = '', limitItem = photos.length;
        for (var i = 0; i < limitItem; ++i) {

            var width = photos[i].width || 200 + Math.random() * 200;
            var height = photos[i].height || 200 + Math.random() * 200;

            while (width > 400 && height > 400) {
              width = width / 2;
              height = height / 2;
            }

            if (photos[i].orientation > 4) {
              var tempWidth = width;
              width = height;
              height = tempWidth;
            }

          html += temp.replace("#/", "#/albums/" + PhotosStore.all()[i].album_id + "/photos/" + PhotosStore.all()[i].id).replace(/\{height\}/g, height).replace(/\{width\}/g, width).replace("{index}", i + 1).replace("http://s3.amazonaws.com/FOLLOW-FOCUS-DEV/photos/photo_attachments/000/000/302/original/250352_587840231385_6942936_n.jpg?1448467066", PhotosStore.all()[i].small);
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

    }
      this.setState({ photos: PhotosStore.all() });
  },

  render: function () {

      return(
          <div id="freewall" className="free-wall"></div>
      );

    }
});
