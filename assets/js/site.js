// Loop through light gallery groups and initilize lightgallery    
var lightGalleries = document.getElementsByClassName('lightgallery');
Array.prototype.forEach.call(lightGalleries, function(gallery) {
  lightGallery(gallery, {
    selector: '.lightgallery--trigger',
    download: false,
    getCaptionFromTitleOrAlt: true,
    });
  });