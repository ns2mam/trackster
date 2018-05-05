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

};

/*
  Given a search term as a string, query the LastFM API.
  Render the tracks given in the API query response.
*/
Trackster.searchTracksByTitle = function(title) {
  $.ajax({
    url: ("http://ws.audioscrobbler.com/2.0/?method=track.search&track="+title+"&api_key="+API_KEY+"&format=json"),
    dataType: "jsonp",
    success: function(data) {
      console.log(data)
    }
  });
};
});
