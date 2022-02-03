var map;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 39.718439, lng: 2.902370},
        zoom: 13,
        mapId: "52388369dbe42abb"
    });
    new google.maps.Marker({
        position: {lat: 39.718439, lng: 2.902370},
        map,
        tittle: "Hello World!",
    });
}