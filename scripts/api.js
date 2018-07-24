// Declare a BASE_URL constant appropriate for the Youtube API.
// Expose an asyncronous fetchVideos function, which receives a searchTerm and callback
// The function will retrieve Youtube data, filter out only the content it needs 
// (video title, image and link), and send that array back in the callback

'use strict';
/* global $ */


const api = (function(){
  const API_KEY = 'AIzaSyDQfK2W0plrCh6jtYPh6onooBqOLii_-Mg';
  const BASE_URL = 'https://www.googleapis.com/youtube/v3/search';

  const fetchVideos = function(searchTerm, callback) {
    const query = {
      key: API_KEY,
      q: `${searchTerm} in:name`,
      per_page: 5,
      part: 'snippet'
    };
    $.getJSON(BASE_URL, query, callback);
  };

  return {
    fetchVideos
  };
}());