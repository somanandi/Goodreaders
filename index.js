
// java-script code
$(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if (scroll >= 200) {
      $(".goodreaders-navbar").addClass("fixed-top");
    } else {
      $(".goodreaders-navbar").removeClass("fixed-top");
    }
  });

