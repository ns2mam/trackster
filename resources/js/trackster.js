var Trackster = {};
$(document).ready(function() {
$("#search-button").click(function() {
  Trackster.searchTracksByTitle(($('#search-input').val()));

/*
  Given an array of track data, create the HTML for a Bootstrap row for each.
  Append each "row" to the container in the body to display all tracks.
*/
});

const API_KEY = "1d1f6112df559817f5b57b4a5f8a6356";

Trackster.renderTracks = function(tracks) {
  var $songList = $("#song-list");

  $songList.empty();

  for (var songIndex = 0; songIndex < tracks.length; songIndex++) {
    var songNumber = songIndex + 1;
    var thisSong = tracks[songIndex];
    var mediumAlbumArt = thisSong.image[1]["#text"];
    var songRowHtml =
      '<div class="row song">'+
        '<div class="col-xs-1 col-xs-offset-1 play-button">'+
          '<a href="'+ thisSong.url +'" target="_blank">'+
            '<i class="fa fa-play-circle-o fa-2x"></i>'+
          '</a>'+
        '</div>'+
        '<div class="col-xs-1">'+ songNumber +'</div>'+
        '<div class="col-xs-3">'+ thisSong.name +'</div>'+
        '<div class="col-xs-2">'+ thisSong.artist +'</div>'+
        '<div class="col-xs-2"><img src="'+ mediumAlbumArt +'"></div>'+
        '<div class="col-xs-1">'+ thisSong.listeners +'</div>'+
      '</div>';

    console.log(thisSong);
    $songList.append(songRowHtml);
  }
};

/*
  Given a search term as a string, query the LastFM API.
  Render the tracks given in the API query response.
*/
Trackster.searchTracksByTitle = function(title) {
  $.ajax({
    url: "https://ws.audioscrobbler.com/2.0/?method=track.search&track=" + title + "&api_key=" + API_KEY + "&format=json",
    dataType: "jsonp",
    success: function(response) {
      Trackster.renderTracks(response.results.trackmatches.track);
    }
  });
};
});
