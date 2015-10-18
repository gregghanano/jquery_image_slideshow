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
    console.log(slideShowData);
    var summary = slideShowData.summary;
    var pageTitle = slideShowData.title;
    var author = slideShowData.authfull[0];
    console.log(pageTitle, summary);
    $('#articleSection').html(
      "<h1>"+pageTitle+"</h1>"+
      "<h4>By "+author+" | "+summary+"</h4>"
    );
    var url = 'http://www.healthline.com';
    for(var i = 0; i < slideShowData.slides.length; i++){
      var title = slideShowData.slides[i].title;
      var newUrl = url + slideShowData.slides[i].image.imageUrl;
      var summary = slideShowData.slides[i].body;
      if(i === 0){
        $('.slides').append("<div class='slideData shown'>"+
          "<h3>"+title+"</h3>"+
          "<img src="+newUrl+">"+
          summary +
          "</div>"
        );
      } else {
        $('.slides').append("<div class='slideData hidden'>"+
          "<h3>"+title+"</h3>"+
          "<img src="+newUrl+">"+
          summary +
          "</div>"
        );
      }
    }
  })
  .fail( function(xhr, textStatus, errorThrown){
    console.log('fail!!');
    console.log(xhr.responseText);
    console.log(textStatus);
  });
});
