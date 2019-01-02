document.addEventListener('DOMContentLoaded', function () {
    var slider = document.querySelector('.js_slider');
    var slideCount = slider.querySelectorAll('.js_slide').length;
    var dotContainer = slider.querySelector('.slider_navigation_dots');
    var templateListItem = document.createElement('li');
    
    function handleEvents(e) {
      if (e.type === 'before.lory.init') {
        for (var i = 0, len = slideCount; i < len; i++) {
          var clone = templateListItem.cloneNode();
          dotContainer.appendChild(clone);
        }
        dotContainer.childNodes[0].classList.add('active');
      }
      if (e.type === 'after.lory.init') {
        for (var i = 0, len = slideCount; i < len; i++) {
          dotContainer.childNodes[i].addEventListener('click', function(e) {
            lorySlider.slideTo(Array.prototype.indexOf.call(dotContainer.childNodes, e.target));
          });
        }
      }
      if (e.type === 'after.lory.slide') {
        for (var i = 0, len = dotContainer.childNodes.length; i < len; i++) {
          dotContainer.childNodes[i].classList.remove('active');
        }
        dotContainer.childNodes[e.detail.currentSlide - 1].classList.add('active');
      }
    }
  
    slider.addEventListener('before.lory.init', handleEvents);
    slider.addEventListener('after.lory.init', handleEvents); 
    slider.addEventListener('after.lory.slide', handleEvents); 
  
    var lorySlider = lory(slider, {
      infinite: 1
    });
  });