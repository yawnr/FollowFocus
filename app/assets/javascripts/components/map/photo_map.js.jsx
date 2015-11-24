PhotoMap = React.createClass({

  getInitialState: function () {
    return { lat: this.props.photo.lat, lng: this.props.photo.lng };
  },

  componentDidMount: function () {
    var map = React.findDOMNode(this.refs.map);
    var mapOptions = {
      center: this.state,
      zoom: 13
    };
    this.map = new google.maps.Map(map, mapOptions);
    PhotoStore.addChangeListener(this._setupMap);
    this._setupMap();
  },

  _setupMap: function () {
    var coords = { lat: PhotoStore.photo().lat, lng: PhotoStore.photo().lng };
    var marker = new google.maps.Marker({
        position: coords,
        map: this.map,
        animation: google.maps.Animation.DROP
      });
    this.map.setCenter(coords);
    this.setState(coords);
  },

  render: function () {
    var toRender;

    if (this.state.lat !== undefined && this.state.lng !== undefined) {
      toRender = (<div className="photo-map" ref="map">Map</div>);
    } else {
      toRender = (<div></div>);
    }
    return (toRender);
  }

});
