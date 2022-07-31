$(window).scroll(function () {
  let home = $(".home-section").height();
  let wScroll = $(window).scrollTop();
  let navbar = $("#navbar");
  let buttonUp = $("#buttonUp");
  if (wScroll > home) {
    navbar.removeClass("bg-transparent");
    buttonUp.animate(
      {
        bottom: "50px",
        right: "50px",
      },
      1000
    );
  } else {
    navbar.addClass("bg-transparent");
  }
});

$("#buttonUp").on("click", function () {
  $("body,html").animate({ scrollTop: "0" }, 500);
});

$(".link-control").on("click", function (eve){
    eve.preventDefault();
  let linkValue =  $(`#${eve.target.innerHTML}`).offset().top;
  $("body").animate({scrollTop:linkValue},500);
});