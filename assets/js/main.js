var settingsItemsMap = {
    zoom: 15,
    center: new google.maps.LatLng(10.489357, -66.870621),
    zoomControlOptions: {
      style: google.maps.ZoomControlStyle.LARGE
    },
    mapTypeId: google.maps.MapTypeId.ROADMAP
};
var map = new google.maps.Map(document.getElementById('map_canvas'), settingsItemsMap );

var myMarker = new google.maps.Marker({
    position: new google.maps.LatLng(10.489357, -66.870621),
    draggable: true
});

map.setCenter(myMarker.position);
myMarker.setMap(map);


// var map;
// function initialize() {
//   var mapOptions = {
//     zoom: 8,
//     center: new google.maps.LatLng(-34.397, 150.644),
//     mapTypeId: google.maps.MapTypeId.ROADMAP
//   };
//   map = new google.maps.Map(document.getElementById('map-canvas'),
//       mapOptions);
// }

// google.maps.event.addDomListener(window, 'load', initialize);

