'use strict';
/* global $ */


const videoList = (function() {
  const generateVideoItemHtml = function (video) {
    return `
    <li class='video'>
      <h2>${video.title}</h2>
      <a href='https://www.youtube.com/watch?v=${video.id}'><img src='${video.thumbnail}' alt='${video.description}'></a>
    </li>
  `;
  };
  const render = function () {
    const arrayOfDOMElements = store.videos.map(video => generateVideoItemHtml(video));
    $('.results').html(arrayOfDOMElements);
  };
  const handleFormSubmit = function () {
    $('form').submit(event => {
      event.preventDefault();
      const input = $(event.currentTarget).find('#search-term');
      const searchTerm = input.val();
      input.val('');
      fetchVideos(searchTerm, response => {
        const arrayOfObjVids = decorateResponse(response);
        addVideosToStore(arrayOfObjVids);
        render();
      });
    });
  };
  const bindEventListeners = function(){
    handleFormSubmit();
  };
  return {
    render,
    bindEventListeners
  };
});