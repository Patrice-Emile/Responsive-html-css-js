
function MenuToggle() {
    
    if ($("#menu").hasClass("getMenu")) {
        $("#title").css('-webkit-text-stroke', '2px #ffff93');
        $(".intro").css('background-color', '#E3B2AE');
        $('#menu').addClass('removeMenu').removeClass('getMenu');
    } else {
        $("#title").css('-webkit-text-stroke', '2px #000');
        $(".intro").css('background-color', 'rgb(138, 138, 138,0.3)');
        $('#menu').addClass('getMenu').removeClass('removeMenu');
    }
}

window.onscroll = function() {myFunction()};

var header = document.getElementsByName("intro-update");
header.forEach((el) => {
    console.log(el)
});
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.removeClass("sticky");
  }
}