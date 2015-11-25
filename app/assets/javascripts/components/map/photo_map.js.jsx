PhotoMap = React.createClass({

  getInitialState: function () {
    return { lat: this.props.photo.lat, lng: this.props.photo.lng, marker: undefined };
  },

  componentDidMount: function () {
    var map = React.findDOMNode(this.refs.map);
    var mapOptions = {
      zoom: 13
    };
    this.map = new google.maps.Map(map, mapOptions);
    PhotoStore.addChangeListener(this._setupMap);
    this._setupMap();
  },

  _setupMap: function () {
    var coords = { lat: PhotoStore.photo().lat, lng: PhotoStore.photo().lng };
    if (this.state.marker !== undefined) {
      this.state.marker.setMap(null);
    }
    var newMarker = new google.maps.Marker({
        position: coords,
        map: this.map,
        animation: google.maps.Animation.DROP
      });
    this.map.setCenter(coords);
    newMarker.setMap(this.map);
    this.setState({ lat: PhotoStore.photo().lat, lng: PhotoStore.photo().lng, marker: newMarker });
  },

  componentWillReceiveProps: function (newParams) {
    this._setupMap();
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
