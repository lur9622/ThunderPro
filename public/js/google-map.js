function initialize() {
  var map_center = {lat: 52.402651, lng: 16.931344};
  var marker1 = {lat: 52.402651, lng: 16.931344};
  var styles = [
    {
      stylers: [
        { hue: 0},
        { saturation: -360}
      ]
    },{
      featureType: "road",
      elementType: "geometry",
      stylers: [
        { lightness: 0 },
        { visibility: "simplified" }
      ]
    },{
      featureType: "road",
      elementType: "labels",
      stylers: [
        { visibility: "off" }
      ]
    }
  ];
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 16,
    center: map_center,
    scrollwheel: false
  });
  map.setOptions({styles: styles});
  var marker1 = new google.maps.Marker({
    position: marker1,
    map: map,
    title: 'Przedszkole',
    icon: './img/marker.png'
  });
}
google.maps.event.addDomListener(window, 'load', initialize);
