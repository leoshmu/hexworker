'use strict';

/* Filters */

angular.module('hexWorker.filters', []).
  filter('interpolate', ['version', function(version) {
    return function(text) {
      return String(text).replace(/\%VERSION\%/mg, version);
    }
  }]).
  filter('hex2decimal', function(){
    return function(string){
      return parseInt(string, 16);
    }
  }).
  filter('binary', function(){
    return function(value){
      return ((0xff+1)|value).toString(2).slice(1);
    }
  }).
  filter('hexadecimal', function(){
    return function(value){
      return ((0xff+1)|value).toString(16).slice(1);
    }
  }).
  filter('ascii', function(){
    return function(value){
      return String.fromCharCode(value);
    }
  });
