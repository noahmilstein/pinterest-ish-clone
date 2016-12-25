// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

// // coffeescript
// $ ->
//   $('#pins').imagesLoaded ->
//     $('#pins').masonry
//       itemSelector: '.box'
//       ifFitWidth: true

// javascript
$(function() {
  return $('#pins').imagesLoaded(function() {
    return $('#pins').masonry({
      itemSelector: '.box',
      ifFitWidth: true
    });
  });
});
