'use strict';
/* global $ */


const store = (function(){
  const videos = [];
  const addVideosToStore = function() {
    this.videos = videos;
  };
  return {
    videos,
    addVideosToStore
  };
}());