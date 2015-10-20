var startingIndex = 0;
$('.nextButton').on('click', function(e){
  //user event tracking section
  var track = $('<img id="track-img">');
  track.attr('src', 'http://www.healthline.com/images/clear.gif');
  track.attr('alt', "next click");
  $('.image-tracker').append(track);
  //--end--
  var currentActiveImage = $(".shown");
  var nextActiveImage = currentActiveImage.next();

  if(nextActiveImage.length===0){
  	nextActiveImage = $(".slides .slideData").first();
    startingIndex= -1;
  }

  startingIndex++;
  endingIndex = startingIndex+2;
  renderImages(articleData.slides, startingIndex, endingIndex);

  e.preventDefault();
});
$('.prevButton').on('click', function(e){
  //user event tracking section
  var track = $('<img id="track-img">');
  track.attr('src', 'http://www.healthline.com/images/clear.gif');
  track.attr('alt', "previous click");
  $('.image-tracker').append(track);
  //--end--
  var currentActiveImage = $(".shown");
  var nextActiveImage = currentActiveImage.prev();

  if(nextActiveImage.length===0){
  	nextActiveImage = $(".slides .slideData").last();
    startingIndex=articleData.slides.length;
  }

  startingIndex--;
  endingIndex = startingIndex + 2;
  renderImages(articleData.slides, startingIndex, endingIndex);

  e.preventDefault();
});

function sortArticle(array, index){
  var result = array.sort(function(a, b) {
    return a[index] > b[index] ? 1 : -1;
  });
  return result;
}

$('.filter-button').on('click', function(e){
  $('.slides').html('');
  startingIndex = 0;
  if(document.getElementById('default').checked){
    var testArray = articleData.slides;
    var newArticle = sortArticle(testArray, 3);
    renderImages(newArticle, 0, 2);
  }
  else if(document.getElementById('alpha').checked){
    startIndex = 0;
    var testArray = articleData.slides;
    var newArticle = sortArticle(testArray, 0);
    renderImages(newArticle, 0, 2);
  }
  e.preventDefault();
});
