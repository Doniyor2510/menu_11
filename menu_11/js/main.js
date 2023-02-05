$(document).ready(function () {
  var $menu = $("menu");
  var $close = $(".close-btn");
  var $menuLink = $(".menu-link");
  var $linkUL = $("menu ul li a");
  var $attr = $(this).attr("href");
  var $top = $($attr).offset();

  $linkUL.click(function (e) {
    e.preventDefault();

    $linkUL.removeClass("active");

    $(this).addClass("active");

    var $attr = $(this).attr("href");

    var $top = $($attr).offset().top;

    $("html, body").animate(
      {
        scrollTop: $top,
      },
      700
    );
  });

  $menuLink.click(function () {
    $menu.css({
      transform: "translateX(0%)",
      transition: "1s",
    });
  });

  $close.click(function () {
    $menu.css({
      transform: "translateX(-100%)",
      transition: "1s",
    });
  });

  $("html, body").animate(
    {
      scrollTop: $top,
    },
    1000
  );
  $linkUL.click(function () {
    $(window).scroll(function (e) {
      var $top = $(this).scrollTop();

      $linkUL.each(function () {
        var $attr = $(this).attr("href");

       
        $menu.css({
          transform: "translateX(-100%)",
          transition: "0.8s",
        });
      });
    });
  });
});
