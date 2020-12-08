$(document).ready(function () {
  $('.player .vp-title .vp-title-header h1 a').css('color', '#EB1A3B');

  //Get the button
  var mybutton = $("button#myBtn");

  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function () { scrollFunction() };

  function scrollFunction() {
    console.log(document.documentElement.offsetHeight, mybutton.offset().top)
    if (document.documentElement.offsetHeight - mybutton.offset().top > 400) {
      mybutton.css('opacity', '0');
    } else {
      mybutton.css('opacity', '1');
    }
  }

  
});
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

