$(document).ready(function () {
  $(".header__burger").click(function (event) {
    $(".header__burger, .nav__ul").toggleClass("active");
  });
});
$(".theme").on("click", function () {
  $(".theme").toggleClass("theme--night");
  $("body").toggleClass("body--night");
});
