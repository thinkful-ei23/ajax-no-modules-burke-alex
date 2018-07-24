'use strict';
/* global $ store api */


const videoList = (function() {
  const generateVideoItemHtml = function (video) {
    return `
    <li class='video'>
      <h2>${video.title}</h2>
      <a href='https://www.youtube.com/watch?v=${video.id}'><img src='${video.thumbnail}' alt='${video.description}'></a>
      <p><a href='https://www.youtube.com/channel/${video.channelId}'>See more videos from this channel...</a><p>
    </li>
  `;
  };
  const render = function () {
    const arrayOfDOMElements = store.videos.map(video => generateVideoItemHtml(video));
    $('.results').html(arrayOfDOMElements);
  };
  const decorateResponse = function(response) {
    const arrayOfVidObjects = response.items.map(item => {
      return {
        id : item.id.videoId,
        channelId : item.snippet.channelId,
        title : item.snippet.title,
        thumbnail : item.snippet.thumbnails.medium.url,
        description : item.snippet.description
      };
    });
    console.log(arrayOfVidObjects);
    return arrayOfVidObjects;
  };
  const handleFormSubmit = function () {
    $('form').submit(event => {
      event.preventDefault();
      const input = $(event.currentTarget).find('#search-term');
      const searchTerm = input.val();
      input.val('');
      api.fetchVideos(searchTerm, response => {
        const arrayOfObjVids = decorateResponse(response);
        store.addVideosToStore(arrayOfObjVids);
        render();
      });
    });
  };
  const handleButtonSubmit = function(){
    $('.button').click(function() {
      if ($(event.currentTarget( === ))
      $(this).removeClass('hidden');

    });
  };
  const bindEventListeners = function(){
    handleFormSubmit();
  };
  return {
    render,
    bindEventListeners
  };
}());