const URL_CLUSTER_MARKER_RED_35 = "img/cluster_marker_red_35.png";
const URL_CLUSTER_MARKER_RED_45 = "img/cluster_marker_red_45.png";
const URL_CLUSTER_MARKER_RED_55 = "img/cluster_marker_red_55.png";
const CENTER_LAT = 25.05;
const CENTER_LNG = 121.54;
const CENTER_ZOOM = 13;
const POINT_SIZE = 7.5;

const MAP_OPTIONS = {
    center: {
        lat: CENTER_LAT,
        lng: CENTER_LNG
    },
    zoom: CENTER_ZOOM
};

const DATA_PATH = "data/data_with_latlng.csv";

var map;
var dataArr;
var markers = [];

loadData(DATA_PATH);

function initMap() {
    map = new google.maps.Map(
        document.getElementById("map-canvas"),
        MAP_OPTIONS
    );
    console.log("Google Map Initialized.");

    loadMarkers();
}

function loadData(file) {
	d3.csv(file, function(data) {
		dataArr = data;
		console.log("Data loaded.");
		initMap();
	});
}

function loadMarkers() {
	var redImage = {
        url: 'http://i.imgur.com/C21qc4j.gif',
        scaledSize: new google.maps.Size(POINT_SIZE, POINT_SIZE),
        anchor: new google.maps.Point(POINT_SIZE / 2.0, POINT_SIZE / 2.0)
    };
	var cluster_styles = [
		{
			url: URL_CLUSTER_MARKER_RED_35,
			width: 35,
			height: 35,
			textColor: '#b50000',
			textSize: 10
        }, {
			url: URL_CLUSTER_MARKER_RED_45,
			width: 45,
			height: 45,
			textColor: '#b50000',
			textSize: 11
        }, {
			url: URL_CLUSTER_MARKER_RED_55,
			width: 55,
			height: 55,
			textColor: '#b50000',
			textSize: 12
		}
	];

	dataArr.forEach(item => {
		var marker = new google.maps.Marker({
		    position: {
				lat: parseFloat(item.lat),
				lng: parseFloat(item.lng)
		    }
		});
		marker.setIcon(redImage);
		markers.push(marker);
	});

	var markerCluster = new MarkerClusterer(map, markers, {
        maxZoom: 14,
        minimumClusterSize: 5,
        styles: cluster_styles
    });
}





