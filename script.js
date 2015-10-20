var currentIndex = 0;

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
  }

  currentActiveImage.removeClass("shown").addClass("hidden").css("z-index", -10);
  nextActiveImage.addClass("shown").removeClass("hidden").css("z-index", 20);
  $(".slides").not([currentActiveImage, nextActiveImage]).css("z-index", 1);

  e.preventDefault();
  currentIndex++;
  console.log(currentIndex);
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
  }

  currentActiveImage.removeClass("shown").addClass("hidden").css("z-index", -10);
  nextActiveImage.addClass("shown").removeClass("hidden").css("z-index", 20);
  $(".slides").not([currentActiveImage, nextActiveImage]).css("z-index", 1);

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
  if(document.getElementById('default').checked){
    var testArray = articleData.slides;
    var newArticle = sortArticle(testArray, 3);
    for(var i = 0; i < newArticle.length; i++){
      var title = newArticle[i][0];
      var newUrl = newArticle[i][1];
      var slideSummary = newArticle[i][2];
      var slideIndex = newArticle[i][3];
      if(i === 0){
        $('.slides').append("<div class='slideData shown text-center'>"+
          "<h3>"+title+"</h3>"+
          "<img src="+newUrl+">"+
          slideSummary +
          "</div>"
        );
      } else {
        $('.slides').append("<div class='slideData hidden text-center'>"+
          "<h3>"+title+"</h3>"+
          "<img src="+newUrl+">"+
          slideSummary +
          "</div>"
        );
      }
    }
  }
  else if(document.getElementById('alpha').checked){
    var testArray = articleData.slides;
    var newArticle = sortArticle(testArray, 0);
    for(var i = 0; i < newArticle.length; i++){
      var title = newArticle[i][0];
      var newUrl = newArticle[i][1];
      var slideSummary = newArticle[i][2];
      var slideIndex = newArticle[i][3];
      if(i === 0){
        $('.slides').append("<div class='slideData shown text-center'>"+
          "<h3>"+title+"</h3>"+
          "<img src="+newUrl+">"+
          slideSummary +
          "</div>"
        );
      } else {
        $('.slides').append("<div class='slideData hidden text-center'>"+
          "<h3>"+title+"</h3>"+
          "<img src="+newUrl+">"+
          slideSummary +
          "</div>"
        );
      }
    }
  }
  e.preventDefault();
});
