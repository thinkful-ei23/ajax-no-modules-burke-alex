'use strict';
/* global $ */

const store = (function(){
  const videos = [];
  const setVideos = function() {
    this.videos = videos;
  };
  return {
    videos,
    setVideos
  };
}());