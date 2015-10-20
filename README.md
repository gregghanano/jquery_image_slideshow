# jquery image slideshow

My tasks:

1. Use HTML, CSS and JavaScript to build an image slideshow
2. Do not use any third party slideshow, image or photo gallery plugins
3. You may use a framework like jQuery or AngularJS
4. Use deferred image loading
   - load only two images on page load (the current slide and the next slide)
   - load two images at a time on next button click (the next slide image and the slide image after next)
5. User event tracking
   - on each previous or next button click, call single pixel image below
   - http://www.healthline.com/images/clear.gif
6. Use Healthline API to get slideshow data:
   - slideshow data URL:
   - https://api2.healthline.com/api/service/2.0/slideshow/content?partnerId=7eef498c-f7fa-4f7c-81fd-b1cc53ac7ebc&contentid=17103&includeLang=en
   - use the following data items:
   - Page title
   - summary
   - individual slide data (slides array):
     - title
     - image (image object)
     - slide text content (body)
7. Sort order filter:
   - create an interface to allow the user to change the sort order of the slides
   - two options: default, alpha
   - sort by alpha on slide title
   - default order is from JSON data
8. You may use Healthline Slideshow as inspiration for UI/UX (NOT a requirement)
   - http://www.healthline.com/health-slideshow/7-ways-lessen-your-back-pain
9. Update the HTML as needed
10. Display one image at a time
11. Your submitted work must be a functional stand-alone working HTML page
