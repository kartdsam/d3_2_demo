const URL_CLUSTER_MARKER_RED_35 = "imgs/cluster_marker_red_35.png";
const URL_CLUSTER_MARKER_RED_45 = "imgs/cluster_marker_red_45.png";
const URL_CLUSTER_MARKER_RED_55 = "imgs/cluster_marker_red_55.png";
const CENTER_LAT = 23.97;
const CENTER_LNG = 120.98;
const CENTER_ZOOM = 8;
const POINT_SIZE = 15;

const MAP_OPTIONS = {
    center: {
        lat: CENTER_LAT,
        lng: CENTER_LNG
    },
    zoom: CENTER_ZOOM
};

const DATA_PATH = "data/08to16data_with_latlng.csv";

var map;
var dataArr;
var markers = [];
var info_window = new google.maps.InfoWindow({});

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
        url: "imgs/plane_crash.png",
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
		    },
			title: item.Location,
			obj: item
		});
		marker.addListener('mouseover', function () {
            info_window.setContent(createHTML(this.obj));
            info_window.open(map, this);
        });
		marker.addListener('mouseout', function () {
            info_window.close();
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

function createHTML(item) {
	return "<div style=\"color:black;text-align:left;\">" +
			"<br>" +
			"時間：" + item.Date + " " + item.Time + "<br>" +
			"地點：" + item.Location + "<br>" +
			"公司：" + item.Operator + "<br>" +
			"航班：" + item['Flight #'] + "<br>" +
			"航線：" + item.Route + "<br>" +
			"機型：" + item.Type + "<br>" +
			"死亡人數：" + item.Fatalities + "<br>" +
			// "概述：" + item.Summary + "<br>" +
			"</div>";
}





