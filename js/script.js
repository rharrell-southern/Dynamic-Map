// Set Events and Locations
var coords = [ { date: new Date("1677"), 
			 title: "An Elephant?",
			 lat:51.75, lng:-1.28,
			 infoWin:   "<h2>Oxfordshire, England</h2>" + 
						"<div><img src='images/two.jpg' /><p>The county was home to some of the most important finds during the pivotal early years in the study of palaeontology.</p></div>"
		   },
		   { date: new Date("1787"), 
			 title: "First US Fossil", 
			 lat:39.837907, lng:-75.15153,
			 infoWin:   "<h2>Woodbury, New Jersey</h2>" + 
						"<div><img src='images/two.jpg' /><p>The county was home to some of the most important finds during the pivotal early years in the study of palaeontology.</p></div>"
		   },
		   { date: new Date("1912"), 
			 title: "Title", 
			 lat: 3.7231, lng:10.3964,
			 infoWin: 	"<h2>Next Headline</h2>" + 
						"<div><img src='images/two.jpg' /><p>The county was home to some of the most important finds during the pivotal early years in the study of palaeontology.</p></div>"
		   },
		   { date: new Date("2005"), 
			 title: "Title", 
			 lat:55.7525, lng:37.6231,
			 infoWin: 	"<h2>Next Headline</h2>" + 
						"<div><img src='images/two.jpg' /><p>The county was home to some of the most important finds during the pivotal early years in the study of palaeontology.</p></div>"
		   },
		   { date: new Date("2000"), 
			 title: "Title", 
			 lat:40.7484, lng:73.9857,
			 infoWin: 	"<h2>Next Headline</h2>" + 
						"<div><img src='images/two.jpg' /><p>The county was home to some of the most important finds during the pivotal early years in the study of palaeontology.</p></div>"
			}];
					
// Set Configuration Options
var mapCenter = { lat: 48.8582, lng: 2.2945 }; // initial center point for map
var wideZoom = 2;	// Set default zoom level for initial map
var macroZoom = 10;	// Set zoom for close up to pin
var panDelay = 500 	// change the delay when zooming in and out to allow panning animation
var yearIncrements = 50; //set the increments for the start and end selections


// Set Global Variables		   
var markers = new Array();
var radioButtons;
var thisMap;
var todaysDate = new Date(); // This year, 2014
	
function setMapMarker(thisID, thisLat, thisLng) {
	markers[thisID] = new google.maps.Marker({
		position: {
			lat:thisLat,
			lng:thisLng
		},
		icon: 'images/dinoicon.png'
		
	});
	google.maps.event.addListener(markers[thisID], 'click', function() {
		if (thisMap.getZoom() <= (wideZoom + 1)) {
			zoomToMarker(thisID);
		}
  	});

	markers[thisID].setMap(thisMap);
}

function displayMarker(thisID, thisDisplay) {
	if(thisDisplay) {
		markers[thisID].setMap(thisMap);
	} else {
		markers[thisID].setMap(null);
	}
}

function scrollArrowShow() {
        var maxScroll = ($('#timeline ul').width() - $('#timeline').scrollLeft()) - $('#timeline').width();
        if ( 0 == $('#timeline').scrollLeft()) {
            $('#leftArrow').fadeOut();
        }else{
            $('#leftArrow').fadeIn();
        }
        if ( 0 == maxScroll) {
            $('#rightArrow').fadeOut();
        }else{
            $('#rightArrow').fadeIn();
        }
    }

function scrollThumb(direction) {
        if (direction=='left') {
            $('#timeline').animate({
                scrollLeft: "-=" + 600 + "px"
            }, function(){
                scrollArrowShow();
            });
        }else
        if (direction=='right') {
            $('#timeline').animate({
                scrollLeft: "+=" + 600 + "px"
            }, function(){
                scrollArrowShow();
            });
        }
       }

// No custom Google animations available between markers
// So custom code to zoom out, then pan to next marker
function zoomToMarker(thisID) {
		
		$('#infoWindow').hide('slide',{direction:'right'}, 200);
		$('#resetMap').fadeOut(200);
		
		if (thisID == 'center') {
			thisMap.setZoom(wideZoom);
			setTimeout(function(){
				thisMap.panTo(mapCenter);
			}, panDelay);
			$('#timeline ul li input[type="radio"]').each(function() {
				$(this).prop('checked', false);
			});
		} else {
			var thisMarker = markers[thisID];
			thisMap.setZoom(wideZoom);
			
			var liIndex = 0;
			$('#timeline ul li input[type="radio"]').each(function() {
				if (liIndex != thisID) {
					$(this).prop('checked', false);
				} else {
					$(this).prop('checked', true);
				}
				liIndex++;
			});
			
			setTimeout(function(){
				thisMap.panTo(thisMarker.getPosition());
				setTimeout(function(){
					var thisPoint = thisMap.getProjection().fromLatLngToPoint(thisMarker.getPosition());
					thisMap.setZoom(macroZoom);
					$('#infoWindow').html(coords[thisID].infoWin);
					setTimeout(function(){
					$('#infoWindow').show('slide',{direction:'right'}, 200);
					thisMap.panTo(thisMap.getProjection().fromPointToLatLng(new google.maps.Point(
						thisPoint.x + 0.128,
						thisPoint.y - 0.0
					)));
					}, 250);
					$('#resetMap').fadeIn();
				}, panDelay);
			}, panDelay);
		}
	}
		
function generateTimeline(startYear, endYear, thisScale) {
	if (!startYear) startYear = 1650;
	if (!endYear) endYear = todaysDate.getFullYear();
	if (!thisScale) thisScale = 2;
	
	// Zoom out, clear timeline to make space for new list
	zoomToMarker("center");
	$('#timeline').html("");
	
	radioButtons = "<hr/><ul>\r\n";
	// set all information into coords array, place markers
	var prevYear;
	var css = "";
	var totalWidth = 85;
	var markersSet = markers.length;
	var activeMarkers = 0;
	for (var i = 0; i < coords.length; i++) {
		var thisYear = coords[i].date.getFullYear();
		if (markersSet < 1) {
			setMapMarker(i,coords[i].lat,coords[i].lng,thisMap);
		} 
		if(thisYear > startYear && thisYear < endYear) {
			if (activeMarkers > 0) {
				var thisWidth = (thisYear - prevYear)*thisScale;
				css = 'style="margin-left:';
				css += thisWidth + 'px;"';
				totalWidth += thisWidth + 66;
			}
			displayMarker(i, true);
			radioButtons += '<li '+css+'><label>'+(coords[i].date.getFullYear()+1)+'<br /><input type="radio" name="facts" onClick="zoomToMarker('+i+')"></label></li>\r\n';
			activeMarkers++;
		}	else {
				displayMarker(i, false);
		}
		prevYear = thisYear;
	}
	radioButtons += "</ul>";
	$("#timeline").append(radioButtons);
	$('#timeline ul').css({width: totalWidth+"px"});
}

(function (window, google) {
	//thisMap options
	var options = {
		//set center of thisMap on load
		center: mapCenter,
		zoom: wideZoom,
		disableDefaultUI:true,
		
		//styling from SnazzyMaps		
		styles: [{"stylers":[{"saturation":-45},{"lightness":13}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#8fa7b3"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#667780"}]},{"featureType":"road.highway","elementType":"labels.text.fill","stylers":[{"color":"#333333"}]},{"featureType":"road.highway","elementType":"labels.text.stroke","stylers":[{"color":"#8fa7b3"},{"gamma":2}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#a3becc"}]},{"featureType":"road.arterial","elementType":"geometry.stroke","stylers":[{"color":"#7a8f99"}]},{"featureType":"road.arterial","elementType":"labels.text.fill","stylers":[{"color":"#555555"}]},{"featureType":"road.local","elementType":"geometry.fill","stylers":[{"color":"#a3becc"}]},{"featureType":"road.local","elementType":"geometry.stroke","stylers":[{"color":"#7a8f99"}]},{"featureType":"road.local","elementType":"labels.text.fill","stylers":[{"color":"#555555"}]},{"featureType":"water","elementType":"geometry.fill","stylers":[{"color":"#bbd9e9"}]},{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#525f66"}]},{"featureType":"transit","elementType":"labels.text.stroke","stylers":[{"color":"#bbd9e9"},{"gamma":2}]},{"featureType":"transit.line","elementType":"geometry.fill","stylers":[{"color":"#a3aeb5"}]}]
	};
	
		//thisMap
		element = document.getElementById('map-canvas'),
		thisMap = new google.maps.Map(element, options);
}(window, google));

// Receive Start/End Dates from User, Pass to GenerateTimeline
$(function() {
	for (i=1650; i<=todaysDate.getFullYear(); i++) {
		if(i % yearIncrements === 0 || i == todaysDate.getFullYear()) {
			$('select[name="startYear"], select[name="endYear"]').append('<option value="'+i+'">'+i+'</option>');
		}
	}
	$('select[name="endYear"]').val(todaysDate.getFullYear());
	$('select[name="startYear"], select[name="endYear"]').on("change",function(){
		generateTimeline($('select[name="startYear"]').val(),$('select[name="endYear"]').val());
	});
	$('#resetMap').on('click', function(){
		zoomToMarker('center');
	});
	coords.sort(function(a,b) { return parseFloat(a.date.getFullYear()) - parseFloat(b.date.getFullYear()) } );
	generateTimeline();
	scrollArrowShow();
	
});
