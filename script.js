$('.nextButton').on('click', function(e){
  console.log('next button!');
  var currentActiveImage = $(".slideData-shown");
  var nextActiveImage = currentActiveImage.next();
  console.log(nextActiveImage.length);

  if(nextActiveImage.length===0){
    console.log('hello!');
  	nextActiveImage = $(".slides").first();
    console.log(nextActiveImage);
  }

  currentActiveImage.removeClass("slideData-shown").addClass("slideData-hidden").css("z-index", -10);
  nextActiveImage.addClass("slideData-shown").removeClass("slideData-hidden").css("z-index", 20);
  $(".slides").not([currentActiveImage, nextActiveImage]).css("z-index", 1);

  e.preventDefault();
});
$('.prevButton').on('click', function(e){
  var currentActiveImage = $(".slideData-shown");
  var nextActiveImage = currentActiveImage.prev();

  if(nextActiveImage.length===0){
  	nextActiveImage = $(".slides").last();
  }

  currentActiveImage.removeClass("slideData-shown").addClass("slideData-hidden").css("z-index", -10);
  nextActiveImage.addClass("slideData-shown").removeClass("slideData-hidden").css("z-index", 20);
  $(".slides").not([currentActiveImage, nextActiveImage]).css("z-index", 1);

  e.preventDefault();
});

// var currentIndex = 0,
//     items = $('.container div'),
//     itemAmt = items.length;
//
// console.log(itemAmt);
//
// function cycleItems() {
//   var item = $('.container div').eq(currentIndex);
//   items.hide();
//   item.css('display','inline-block');
// }
//
// var autoSlide = setInterval(function() {
//   currentIndex += 1;
//   if (currentIndex > itemAmt - 1) {
//     currentIndex = 0;
//   }
//   cycleItems();
// }, 3000);
//
// $('.next').click(function() {
//   clearInterval(autoSlide);
//   currentIndex += 1;
//   if (currentIndex > itemAmt - 1) {
//     currentIndex = 0;
//   }
//   cycleItems();
// });
//
// $('.prev').click(function() {
//   clearInterval(autoSlide);
//   currentIndex -= 1;
//   if (currentIndex < 0) {
//     currentIndex = itemAmt - 1;
//   }
//   cycleItems();
// });
