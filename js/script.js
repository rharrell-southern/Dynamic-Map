// Set Events and Locations
var coords = [ { date: new Date("1677"), 
			 title: "An Elephant?",
			 lat:51.75, lng:-1.28,
			 infoWin:   /* Header ----*/   "<h2>Oxfordshire, England</h2>" 
						/* Start DIV -*/ + "<div>"
						/* Image -----*/ + "<img src='images/1677.jpg' />"
						/* Paragraphs */ + "<p>The county was home to some of the most important finds during the pivotal early years in the study of palaeontology. Dinosaurs roamed the local landscape from the middle and upper parts of the Jurassic period, between 170 and 150 million years ago.</p>" + "<p>The earliest account we have a proper record of is in Robert Plot's Natural History of Oxfordshire that was published in 1677, and in that he illustrated what we would now recognise as the end of a dinosaur limb bone.</p>" + "<p>Because he knew elephants had come across to Britain during the Roman invasions, he concluded that that was a possible explanation of the object.</p>" + "<p>The bones were identified much later as a Megalosaurus bucklandii.</p>" + "<p>Megalosaurus was the first dinosaur ever described scientifically and first theropod dinosaur discovered (this is all in hindsight, because the dinosaurs had not yet been recognized as a separate taxonomic group - the word dinosaur hadn't even been invented yet).</p>"
						/* End DIV ---*/ + "</div>"
						
						// Image from dinosaurs.wikia.com
		   },
		   { date: new Date("1787"), 
			 title: "First US Fossil", 
			 lat:39.837907, lng:-75.15153,
			 infoWin:   /* Header ----*/   "<h2>Woodbury, New Jersey</h2>" 
						/* Start DIV -*/ + "<div>"
						/* Image -----*/ + "<img src='images/1787.jpg' />"
						/* Paragraphs */ + "<p>The earliest documented dinosaur bones discovered in North America... In 1787, a large thighbone -- perhaps a dinosaur limb -- was found near Woodbury Creek, Gloucester County, New Jersey, in what are now known to be Late Cretaceous strata. It was reported to the American Philosophical Society on October 5 by Dr. Caspar Wistar (1761-1818) and Timothy Matlack. It has since been lost.</p>"
						/* End DIV ---*/ + "</div>"
						
						// Image from http://www.nj.com/gloucester-county/towns/index.ssf/2012/04/whats_in_a_name_stewart_park_a.html, taken by Kelly Roncace
		   },
		   { date: new Date("1802"), 
			 title: "Noah's Raven", 
			 lat:42.258333, lng:-72.575,
			 infoWin:   /* Header ----*/   "<h2>South Hadley, Mass.</h2>" 
						/* Start DIV -*/ + "<div>"
						/* Image -----*/ + "<img src='images/1802.jpg' />"
						/* Paragraphs */ + "<p>In 1802, Pliny Moody unearthed a stone slab that had strange markings, speculated to be the tracks of Noah's raven. In the 1830's, Edward Hitchcock of Amherst College, declared them to be the tracks of ancient birds, not the tracks of Noah’s raven. After much time scientists revisited the ancient “bird tracks” and declared them to be the tracks of dinosaurs.</p>"
						/* End DIV ---*/ + "</div>"
						
						// Image from http://www.nashdinosaurtracks.com/nash-dinosaur-story.php
		   },
		   { date: new Date("1806"), 
			 title: "Lewis & Clark", 
			 lat:45.995278, lng:-108.005833,
			 infoWin:   /* Header ----*/   "<h2>Pompey's Tower, Mont.</h2>" 
						/* Start DIV -*/ + "<div>"
						/* Image -----*/ + "<img src='images/1806.jpg' />"
						/* Paragraphs */ + "<p>In the course of his exploratory expedition through the recently acquired Louisiana Purchase with Meriwether Lewis in 1806, Clark noted a large rib bone in a cliff on the south bank of the YellowstoneRiver, about 6 or 7 miles below Pompy's Tower (now Pompy's Pillar) close to what would be the site of Billings, Montana. In his journal, Clark noted it as being 3 feet in length, though part of the end was broken off, and about 3 inches in circumference. He thought it to be the bone of an immense fish.</p>"
						/* End DIV ---*/ + "</div>"
						
						// Image from http://lewisandclarktoday.net/7/images/pompeys_pillar_255.jpg
		   },
		   { date: new Date("1822"), 
			 title: "Honey, I found a tooth!", 
			 lat:51, lng:0,
			 infoWin:   /* Header ----*/   "<h2>Sussex Co, England</h2>" 
						/* Start DIV -*/ + "<div>"
						/* Image -----*/ + "<img src='images/1822.jpg' />"
						/* Paragraphs */ + "<p>Mary Mantell unearthed the teeth as she pulled at loose fragments of rock in Sussex. Gideon Mantell, an amateur palaeontologist, noticed they were similar to modern iguana teeth, but many times larger. Gideon had the imagination to suggest they belonged to a colossal ancient plant-eating lizard, which he named Iguanodon.</p>"
						/* End DIV ---*/ + "</div>"
						
						// Image from http://www.nhm.ac.uk/nature-online/collections-at-the-museum/museum-treasures/iguanodon-teeth/
		   },
		   { date: new Date("2005"), 
			 title: "Title", 
			 lat:55.7525, lng:37.6231,
			 infoWin: 	"<h2>Next Headline</h2>" + 
						"<div><img src='images/two.jpg' /><p>The county was home to some of the most important finds during the pivotal early years in the study of palaeontology.</p></div>"
			}];
					
// Set Configuration Options
var mapCenter = { lat: 48.8582, lng: 2.2945 }; // initial center point for map
var wideZoom = 2;	// Set default zoom level for initial map
var macroZoom = 10;	// Set zoom for close up to pin
var panDelay = 500 	// change the delay when zooming in and out to allow panning animation
var yearIncrements = 50; //set the increments for the start and end selections
var timelineScale = 2;


// Set Global Variables		   
var markers = new Array();
var radioButtons;
var thisMap;
var todaysDate = new Date(); // This year, 2014



// ################################################################## //
// ############# SET MARKERS, ICON, CLICKABLE, DISPLAY ############## //
// ################################################################## //

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



// ################################################################## //
// #################### TIMELINESCROLL CONTROLS ##################### //
// ################################################################## //

// Show arrows based on timeline position
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

// leftArrow and rightArrow have onClicks in HTML that sends data to scrollThuumb
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



// ################################################################## //
// ###### NO CUSTOM GOOGLE ANIMATIONS, SO WE MADE ZOOMTOMARKER ###### //
// ##### CONTROLS INFOWINDOWS, RESET MAP, WHICH RADIO IS CHECKED #### //
// ########### CONTROLS SCROLLBAR WHEN USER CLICKS ON ICON ########## //
// ################################################################## //

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
				$(this).parent().removeClass('active');
			});
		} else {
			var dateGap = (coords[thisID].date.getFullYear() - coords[0].date.getFullYear()) * timelineScale;
			dateGap += (66 * (thisID) );
			console.log(dateGap);
			
			
			//math.round rounds up to the nearest interger, math.floor rounds down
			var targetDistance = dateGap / 600;
			var currentDistance = $('#timeline').scrollLeft()/600;
			console.log("Scroll Distance: " + targetDistance);
			console.log("Current Scroll" + currentDistance);
			
			setTimeout (function() {
				if (targetDistance > currentDistance) {
					for(var i=currentDistance;i<targetDistance; i++) {
						scrollThumb('right');
					}
				} else if(targetDistance < currentDistance){
					for(var i=currentDistance;i>targetDistance; i--) {
						scrollThumb('left');
					}
				} 
			}, 522);
			
			var thisMarker = markers[thisID];
			thisMap.setZoom(wideZoom);
			
			var liIndex = 0;
			$('#timeline ul li input[type="radio"]').each(function() {
				if (liIndex != thisID) {
					$(this).prop('checked', false);
					$(this).parent().removeClass("active");
				} else {
					$(this).prop('checked', true);
					$(this).parent().addClass("active");
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
		


// ################################################################## //
// ############### GENERATE TIMELINE & RADIO BUTTONS ################ //
// ################################################################## //

function generateTimeline(startYear, endYear) {
	if (!startYear) startYear = 1650;
	if (!endYear) endYear = todaysDate.getFullYear();
	thisScale = timelineScale;
	
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



// ################################################################## //
// ################ SET GOOGLE MAPS OPTIONS AND API ################# //
// ################################################################## //

(function (window, google) {
	//thisMap options
	var options = {
		//set center of thisMap on load
		center: mapCenter,
		zoom: wideZoom,
		disableDefaultUI:true,
		//mapTypeId: google.maps.MapTypeId.HYBRID,
		
		//styling from SnazzyMaps		
		styles: [{"stylers":[{"saturation":-45},{"lightness":13}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#8fa7b3"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#667780"}]},{"featureType":"road.highway","elementType":"labels.text.fill","stylers":[{"color":"#333333"}]},{"featureType":"road.highway","elementType":"labels.text.stroke","stylers":[{"color":"#8fa7b3"},{"gamma":2}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#a3becc"}]},{"featureType":"road.arterial","elementType":"geometry.stroke","stylers":[{"color":"#7a8f99"}]},{"featureType":"road.arterial","elementType":"labels.text.fill","stylers":[{"color":"#555555"}]},{"featureType":"road.local","elementType":"geometry.fill","stylers":[{"color":"#a3becc"}]},{"featureType":"road.local","elementType":"geometry.stroke","stylers":[{"color":"#7a8f99"}]},{"featureType":"road.local","elementType":"labels.text.fill","stylers":[{"color":"#555555"}]},{"featureType":"water","elementType":"geometry.fill","stylers":[{"color":"#bbd9e9"}]},{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#525f66"}]},{"featureType":"transit","elementType":"labels.text.stroke","stylers":[{"color":"#bbd9e9"},{"gamma":2}]},{"featureType":"transit.line","elementType":"geometry.fill","stylers":[{"color":"#a3aeb5"}]}]
	};
	
		//thisMap
		element = document.getElementById('map-canvas'),
		thisMap = new google.maps.Map(element, options);
}(window, google));



// ################################################################## //
// # RECEIVE START/END DATES FROM USER, PASS TO GENERATETIMELINE()  # //
// ################################################################## //

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
