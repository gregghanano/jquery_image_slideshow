$(document).ready(function(){
  console.log('hello world');
  var healthLineUrl = 'https://api2.healthline.com/api/service/2.0/slideshow/content?partnerId=7eef498c-f7fa-4f7c-81fd-b1cc53ac7ebc&contentid=17103&includeLang=en';
  $.ajax({
    type:'GET',
    dataType:'jsonp',
    url: healthLineUrl,
    crossDomain:true,
    xhrFields: {
        withCredentials: true
    }
  })
  .done(function(data){
    var slideShowData = data.data[0];
    var articleSummary = slideShowData.summary;
    var pageTitle = slideShowData.title;
    var author = slideShowData.authfull[0];
    articleData.articleSummary = articleSummary;
    articleData.pageTitle = pageTitle;
    articleData.author = author;
    $('#articleSection').html(
      "<h1>"+pageTitle+"</h1>"+
      "<h4>By "+author+" | "+articleSummary+"</h4>"
    );
    var url = 'http://www.healthline.com';
    articleData.slides = [];
    for(var i = 0; i < slideShowData.slides.length; i++){
      var title = slideShowData.slides[i].title;
      var newUrl = url + slideShowData.slides[i].image.imageUrl;
      var slideSummary = slideShowData.slides[i].body;
      var slideIndex = i;
      var slideArr = [];
      slideArr.push(title);
      slideArr.push(newUrl);
      slideArr.push(slideSummary);
      slideArr.push(slideIndex);
      articleData.slides.push(slideArr);
    }
    renderImages(articleData.slides, 0, 2);
  })
  .fail( function(xhr, textStatus, errorThrown){
    console.log('fail!!');
    console.log(xhr.responseText);
    console.log(textStatus);
  });

});
