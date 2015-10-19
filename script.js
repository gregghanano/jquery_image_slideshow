var currentIndex = 0;

$('.nextButton').on('click', function(e){
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
