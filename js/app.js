jQuery(document).ready(function($){

 document.getElementById('slideshow').getElementsByTagName('img')[0].className = "fx";

  window.setInterval(kenBurns, 6000);   

   var images          = document.getElementById('slideshow').getElementsByTagName('img'),
      numberOfImages  = images.length,
      i               = 1;

  function kenBurns() {
  if(i==numberOfImages){ i = 0;}
  images[i].className = "fx";

  if(i===0){ images[numberOfImages-2].className = "";}
  if(i===1){ images[numberOfImages-1].className = "";}
  if(i>1){ images[i-2].className = "";}
  i++;

  }

  //AOS
  AOS.init();

  //Banner Slide show end



   //sticky Header start
   
  //  $(document).scroll(function(){
	// 	let scroll = $(window).scrollTop();
	// 	let header = $('header');

	// 	if(scroll >= 50){
	// 		header.addClass('sticky');
	// 	}else{
	// 		header.removeClass('sticky');
	// 	}
	// })


   //sticky Header end




//Back to top JS start
$(document).scroll(function(){
    
  let scroll = $(window).scrollTop();
  
  if(scroll >= 100){
     $('#top').fadeIn(200)
  } else {
    
    $('#top').fadeOut(200)
  }
  
})


$('#top').click(function(){
    scrollToTop();
  });
  
  function scrollToTop() {
    $("html, body").animate({scrollTop:0},0);
  };


  //Back to top JS end




  //number counter start 
   
  const numberLoader = document.getElementById('numberLoader');
  const finalNumber = 2500;
  const duration = 3000;
  const interval = 20;
  let currentNumber = 0;
  const step = (finalNumber / duration) * interval;
  
  function animateNumber() {
    const animation = setInterval(function() {
      currentNumber += step;
      if (currentNumber >= finalNumber) {
        clearInterval(animation);
        currentNumber = finalNumber;
      }
      numberLoader.textContent = Math.floor(currentNumber).toLocaleString();
    }, interval);
  }
  
  function startCountOnScroll() {
    let isCounting = false;
    window.addEventListener('scroll', function() {
      const elementTop = numberLoader.getBoundingClientRect().top;
      const viewportHeight = window.innerHeight;
      if (elementTop < viewportHeight && !isCounting) {
        animateNumber();
        isCounting = true;
      }
    });
  }
  
  startCountOnScroll();
  

  //number counter start





  // form start

  // $('form').click(function(e){
  //   e.preventDefault();
  // })

  // form end


// number-counter-section start


$(window).on('scroll', function() {
  var windowHeight = $(window).height();
  var scrollPosition = $(window).scrollTop();
  var triggerPosition = $('.count').offset().top - windowHeight;

  if (scrollPosition > triggerPosition) {
    $('.count').each(function () {
      $(this).prop('Counter',0).animate({
        Counter: $(this).text()
      }, {
        duration: 2500,
        easing: 'swing',
        step: function (now) {
          $(this).text(Math.ceil(now));
          $(this).text( $(this).text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,") ); 
        }
      });
    });


    $('.count-1').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 2500,
        easing: 'swing',
        step: function (now) {
          $(this).text(Math.ceil(now));
          $(this).text( $(this).text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,") ); 
        },
        complete: function() {
          $(this).text($(this).text() + '%');
        }
    });
});
    
    $(window).off('scroll');
  }
});

});

// number-counter-section end










jQuery('.stellarnav').stellarNav({
  theme: 'plain', // adds default color to nav. (light, dark)
  breakpoint: 991, // number in pixels to determine when the nav should turn mobile friendly
  menuLabel: '', // label for the mobile nav
  sticky: false, // makes nav sticky on scroll (desktop only)
  position: 'static', // 'static', 'top', 'left', 'right' - when set to 'top', this forces the mobile nav to be placed absolutely on the very top of page
  openingSpeed: 250, // how fast the dropdown should open in milliseconds
  closingDelay: 250, // controls how long the dropdowns stay open for in milliseconds
  showArrows: true, // shows dropdown arrows next to the items that have sub menus
  phoneBtn: '', // adds a click-to-call phone link to the top of menu - i.e.: "18009084500"
  phoneLabel: 'Call Us', // label for the phone button
  locationBtn: '', // adds a location link to the top of menu - i.e.: "/location/", "http://site.com/contact-us/"
  locationLabel: 'Location', // label for the location button
  closeBtn: false, // adds a close button to the end of nav
  closeLabel: 'Close', // label for the close button
  mobileMode: false,
  scrollbarFix: false // fixes horizontal scrollbar issue on very long navs
});