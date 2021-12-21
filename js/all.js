(function ($) {
  "use strict"; // Start of use strict

  /* ---------------------------------------------
     Scripts initialization
     --------------------------------------------- */

  $(window).load(function () {
    // Page loader

    $("body").imagesLoaded(function () {
      $(".page-loader div").fadeOut();
      $(".page-loader").delay(200).fadeOut("slow");
    });

    initWorkFilter();
    init_scroll_navigate();

    $(window).trigger("scroll");
    $(window).trigger("resize");

    // Hash menu forwarding
    if (window.location.hash && $(window.location.hash).length) {
      var hash_offset = $(window.location.hash).offset().top;
      $("html, body").animate({
        scrollTop: hash_offset,
      });
    }
  });

  $(document).ready(function () {
    $(window).trigger("resize");
    init_classic_menu();
    init_fullscreen_menu();
    init_side_panel();
    init_lightbox();
    init_parallax();
    init_shortcodes();
    init_tooltips();
    init_counters();
    init_team();
    initPageSliders();
    init_map();
    init_wow();
    init_masonry();
  });

  $(window).resize(function () {
    init_classic_menu_resize();
    init_side_panel_resize();
    js_height_init();
    split_height_init();
  });

  /* --------------------------------------------
     Platform detect
     --------------------------------------------- */
  var mobileTest;
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
    mobileTest = true;
    $("html").addClass("mobile");
  } else {
    mobileTest = false;
    $("html").addClass("no-mobile");
  }

  var mozillaTest;
  if (/mozilla/.test(navigator.userAgent)) {
    mozillaTest = true;
  } else {
    mozillaTest = false;
  }
  var safariTest;
  if (/safari/.test(navigator.userAgent)) {
    safariTest = true;
  } else {
    safariTest = false;
  }

  // Detect touch devices
  if (!("ontouchstart" in document.documentElement)) {
    document.documentElement.className += " no-touch";
  }

  /* ---------------------------------------------
     Sections helpers
     --------------------------------------------- */

  // Sections backgrounds

  var pageSection = $(
    ".home-section, .page-section, .small-section, .split-section"
  );
  pageSection.each(function (indx) {
    if ($(this).attr("data-background")) {
      $(this).css(
        "background-image",
        "url(" + $(this).data("background") + ")"
      );
    }
  });

  // Function for block height 100%
  function height_line(height_object, height_donor) {
    height_object.height(height_donor.height());
    height_object.css({
      "line-height": height_donor.height() + "px",
    });
  }

  // Function equal height
  !(function (a) {
    (a.fn.equalHeights = function () {
      var b = 0,
        c = a(this);
      return (
        c.each(function () {
          var c = a(this).innerHeight();
          c > b && (b = c);
        }),
        c.css("height", b)
      );
    }),
      a("[data-equal]").each(function () {
        var b = a(this),
          c = b.data("equal");
        b.find(c).equalHeights();
      });
  })(jQuery);

  // Progress bars
  var progressBar = $(".progress-bar");
  progressBar.each(function (indx) {
    $(this).css("width", $(this).attr("aria-valuenow") + "%");
  });

  /* ---------------------------------------------
     Nav panel classic
     --------------------------------------------- */

  var mobile_nav = $(".mobile-nav");
  var desktop_nav = $(".desktop-nav");

  function init_classic_menu_resize() {
    // Mobile menu max height
    $(".mobile-on .desktop-nav > ul").css(
      "max-height",
      $(window).height() - $(".main-nav").height() - 20 + "px"
    );

    // Mobile menu style toggle
    if ($(window).width() <= 1024) {
      $(".main-nav").addClass("mobile-on");
    } else if ($(window).width() > 1024) {
      $(".main-nav").removeClass("mobile-on");
      desktop_nav.show();
    }
  }

  function init_classic_menu() {
    // Navbar sticky

    $(".js-stick").sticky({
      topSpacing: 0,
    });

    height_line($(".inner-nav > ul > li > a"), $(".main-nav"));
    height_line(mobile_nav, $(".main-nav"));

    mobile_nav.css({
      width: $(".main-nav").height() + "px",
    });

    // Transpaner menu

    if ($(".main-nav").hasClass("transparent")) {
      $(".main-nav").addClass("js-transparent");
    }

    $(window).scroll(function () {
      if ($(window).scrollTop() > 10) {
        $(".js-transparent").removeClass("transparent");
        $(".main-nav, .nav-logo-wrap .logo, .mobile-nav").addClass(
          "small-height"
        );
      } else {
        $(".js-transparent").addClass("transparent");
        $(".main-nav, .nav-logo-wrap .logo, .mobile-nav").removeClass(
          "small-height"
        );
      }
    });

    // Mobile menu toggle

    mobile_nav.click(function () {
      if (desktop_nav.hasClass("js-opened")) {
        desktop_nav.slideUp("slow", "easeOutExpo").removeClass("js-opened");
        $(this).removeClass("active");
      } else {
        desktop_nav.slideDown("slow", "easeOutQuart").addClass("js-opened");
        $(this).addClass("active");

        // Fix for responsive menu
        if ($(".main-nav").hasClass("not-top")) {
          $(window).scrollTo(".main-nav", "slow");
        }
      }
    });

    desktop_nav.find("a:not(.mn-has-sub)").click(function () {
      if (mobile_nav.hasClass("active")) {
        desktop_nav.slideUp("slow", "easeOutExpo").removeClass("js-opened");
        mobile_nav.removeClass("active");
      }
    });

    // Sub menu

    var mnHasSub = $(".mn-has-sub");
    var mnThisLi;

    $(".mobile-on .mn-has-sub")
      .find(".fa:first")
      .removeClass("fa-angle-right")
      .addClass("fa-angle-down");

    mnHasSub.click(function () {
      if ($(".main-nav").hasClass("mobile-on")) {
        mnThisLi = $(this).parent("li:first");
        if (mnThisLi.hasClass("js-opened")) {
          mnThisLi.find(".mn-sub:first").slideUp(function () {
            mnThisLi.removeClass("js-opened");
            mnThisLi
              .find(".mn-has-sub")
              .find(".fa:first")
              .removeClass("fa-angle-up")
              .addClass("fa-angle-down");
          });
        } else {
          $(this)
            .find(".fa:first")
            .removeClass("fa-angle-down")
            .addClass("fa-angle-up");
          mnThisLi.addClass("js-opened");
          mnThisLi.find(".mn-sub:first").slideDown();
        }

        return false;
      } else {
      }
    });

    mnThisLi = mnHasSub.parent("li");
    mnThisLi.hover(
      function () {
        if (!$(".main-nav").hasClass("mobile-on")) {
          $(this).find(".mn-sub:first").stop(true, true).fadeIn("fast");
        }
      },
      function () {
        if (!$(".main-nav").hasClass("mobile-on")) {
          $(this)
            .find(".mn-sub:first")
            .stop(true, true)
            .delay(100)
            .fadeOut("fast");
        }
      }
    );
  }

  /* ---------------------------------------------
     Scroll navigation
     --------------------------------------------- */

  function init_scroll_navigate() {
    $(".local-scroll").localScroll({
      target: "body",
      duration: 1500,
      offset: 0,
      easing: "easeInOutExpo",
    });

    var sections = $(".home-section, .split-section, .page-section");
    var menu_links = $(".scroll-nav li a");

    $(window).scroll(function () {
      sections.filter(":in-viewport:first").each(function () {
        var active_section = $(this);
        var active_link = $(
          '.scroll-nav li a[href="#' + active_section.attr("id") + '"]'
        );
        menu_links.removeClass("active");
        active_link.addClass("active");
      });
    });
  }

  /* ---------------------------------------------
     Lightboxes
     --------------------------------------------- */

  function init_lightbox() {
    // Works Item Lightbox
    $(".work-lightbox-link").magnificPopup({
      gallery: {
        enabled: true,
      },
      mainClass: "mfp-fade",
    });

    // Works Item Lightbox
    $(".lightbox-gallery-1").magnificPopup({
      gallery: {
        enabled: true,
      },
    });

    // Other Custom Lightbox
    $(".lightbox-gallery-2").magnificPopup({
      gallery: {
        enabled: true,
      },
    });
    $(".lightbox-gallery-3").magnificPopup({
      gallery: {
        enabled: true,
      },
    });

    $(".open-popup").magnificPopup({
      items: [
        {
          src: "https://vimeo.com/263997170",
          type: "iframe", // this overrides default type
        },
        {
          src: "https://i.imgur.com/SdLFU2d.jpg",
          title: "Music Video Stills",
        },
      ],
      gallery: {
        enabled: true,
      },
      type: "image", // this is a default type
    });

    // Maddy Jane - Thank you and sorry
    $(".mjane-thankyou").magnificPopup({
      items: [
        {
          src: "https://vimeo.com/263997170",
          type: "iframe", // this overrides default type
        },
        {
          src: "https://i.imgur.com/IHdRti0.jpg",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/JI4DQOr.jpg",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/X4IIXwD.jpg",
          title: "Stills",
        },
      ],
      gallery: {
        enabled: true,
      },
      type: "image", // this is a default type
    });

    $(".olivia-foy").magnificPopup({
      items: [
        {
          src: "https://vimeo.com/308649940",
          type: "iframe", // this overrides default type
        },
        {
          src: "https://i.imgur.com/emsbpUl.jpg",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/xmp5ZXW.jpg",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/8wLI1Wh.jpg",
          title: "Stills",
        },
      ],
      gallery: {
        enabled: true,
      },
      type: "image", // this is a default type
    });

    $(".sydney-childrens-choir").magnificPopup({
      items: [
        {
          src: "https://vimeo.com/624045346",
          type: "iframe", // this overrides default type
        },
        {
          src: "https://i.imgur.com/XZgN9qu.png",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/9BFc5zO.png",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/7BoZovz.png",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/IUIovsJ.png",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/cvgnjgJ.png",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/9earLV7.png",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/gnStBtN.png",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/fwqEOk4.png",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/ZQtklyP.png",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/jg9u5VR.png",
          title: "Stills",
        },
      ],
      gallery: {
        enabled: true,
      },
      type: "image", // this is a default type
    });

    $(".yer-gurl").magnificPopup({
      items: [
        {
          src: "https://vimeo.com/340086207",
          type: "iframe", // this overrides default type
        },
        {
          src: "https://i.imgur.com/7EhU7kB.jpg",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/yTbxTQw.jpg",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/YIndGWU.jpg",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/eEpbee7.jpg",
          title: "Stills",
        },
      ],
      gallery: {
        enabled: true,
      },
      type: "image", // this is a default type
    });

    $(".back-pocket").magnificPopup({
      items: [
        {
          src: "https://vimeo.com/308675800",
          type: "iframe", // this overrides default type
        },
        {
          src: "https://i.imgur.com/I7NHjyg.jpg",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/aN7UUAK.jpg",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/MLlHXmN.jpg",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/jtsyQih.png",
          title: "Stills",
        },
      ],
      gallery: {
        enabled: true,
      },
      type: "image", // this is a default type
    });

    $(".sahara-beck").magnificPopup({
      items: [
        {
          src: "https://vimeo.com/308638511",
          type: "iframe", // this overrides default type
        },
        {
          src: "https://i.imgur.com/ZELNKY9.jpg",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/nQed9YC.jpg",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/NEkHxja.jpg",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/0i2nFtF.jpg",
          title: "Stills",
        },
      ],
      gallery: {
        enabled: true,
      },
      type: "image", // this is a default type
    });

    $(".wolf-willow").magnificPopup({
      items: [
        {
          src: "https://vimeo.com/308646260",
          type: "iframe", // this overrides default type
        },
        {
          src: "https://i.imgur.com/q5w91Rp.jpg",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/KLeCXZC.jpg",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/2v9eSU0.jpg",
          title: "Stills",
        },
      ],
      gallery: {
        enabled: true,
      },
      type: "image", // this is a default type
    });

    $(".speaking-fire").magnificPopup({
      items: [
        {
          src: "https://vimeo.com/308644304",
          type: "iframe", // this overrides default type
        },
        {
          src: "https://i.imgur.com/bmfNuws.jpg",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/eblzJAJ.jpg",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/iUs2w0A.jpg",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/oZP4HPy.jpg",
          title: "Stills",
        },
      ],
      gallery: {
        enabled: true,
      },
      type: "image", // this is a default type
    });

    $(".asma-tassie").magnificPopup({
      items: [
        {
          src: "https://vimeo.com/278085328",
          type: "iframe", // this overrides default type
        },
        {
          src: "https://i.imgur.com/GOGY9sy.jpg",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/OPCFocW.jpg",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/FjE4u41.jpg",
          title: "Stills",
        },
      ],
      gallery: {
        enabled: true,
      },
      type: "image", // this is a default type
    });

    $(".asma-melb").magnificPopup({
      items: [
        {
          src: "https://vimeo.com/348956656",
          type: "iframe", // this overrides default type
        },
        {
          src: "https://i.imgur.com/5NxSYnO.jpg",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/TGPVc1T.jpg",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/eNzjSQ1.jpg",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/MXO2G7p.jpg",
          title: "Stills",
        },
      ],
      gallery: {
        enabled: true,
      },
      type: "image", // this is a default type
    });

    $(".wag").magnificPopup({
      items: [
        {
          src: "https://vimeo.com/331202034",
          type: "iframe", // this overrides default type
        },
        {
          src: "https://i.imgur.com/lr3YmkS.jpg",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/GybayE3.jpg",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/8puV3Dc.jpg",
          title: "Stills",
        },
      ],
      gallery: {
        enabled: true,
      },
      type: "image", // this is a default type
    });

    $(".wag").magnificPopup({
      items: [
        {
          src: "https://vimeo.com/331202034",
          type: "iframe", // this overrides default type
        },
        {
          src: "https://i.imgur.com/gRtaqVL.jpg",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/Cx67Tzh.png",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/gJJX5h8.jpg",
          title: "Stills",
        },
      ],
      gallery: {
        enabled: true,
      },
      type: "image", // this is a default type
    });

    $(".home-deborah-hutton").magnificPopup({
      items: [
        {
          src: "https://vimeo.com/568746490",
          type: "iframe", // this overrides default type
        },
        {
          src: "https://i.imgur.com/3SZNbZG.png",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/hP8XesE.png",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/uDx5e7C.png",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/YBdPUIi.png",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/zwYBVFc.png",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/HCZdGDS.png",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/jLVR5TM.png",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/0uX919s.png",
          title: "Stills",
        },
      ],
      gallery: {
        enabled: true,
      },
      type: "image", // this is a default type
    });

    $(".bentley-gt").magnificPopup({
      items: [
        {
          src: "https://vimeo.com/366223461",
          type: "iframe", // this overrides default type
        },
        {
          src: "https://i.imgur.com/4Xh70ge.jpg",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/BMAQ8EW.jpg",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/BWsxRaF.jpg",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/KY1GqZD.jpg",
          title: "Stills",
        },
      ],
      gallery: {
        enabled: true,
      },
      type: "image", // this is a default type
    });

    $(".merrypeople-19").magnificPopup({
      items: [
        {
          src: "https://vimeo.com/364672261",
          type: "iframe", // this overrides default type
        },
        {
          src: "https://i.imgur.com/UPu99eK.jpg",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/dUxjSVL.jpg",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/Ehq2n5L.jpg",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/NxiRMI5.jpg",
          title: "Stills",
        },
      ],
      gallery: {
        enabled: true,
      },
      type: "image", // this is a default type
    });

    $(".leneeva-homes").magnificPopup({
      items: [
        {
          src: "https://vimeo.com/308638818",
          type: "iframe", // this overrides default type
        },
        {
          src: "https://i.imgur.com/yu5MMbc.jpg",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/z5bOPj3.jpg",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/QYJOsja.jpg",
          title: "Stills",
        },
      ],
      gallery: {
        enabled: true,
      },
      type: "image", // this is a default type
    });

    $(".hfh").magnificPopup({
      items: [
        {
          src: "https://vimeo.com/321657406",
          type: "iframe", // this overrides default type
        },
        {
          src: "https://i.imgur.com/Gyh2hzG.jpg",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/rNLv5vy.jpg",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/1CNyHks.jpg",
          title: "Stills",
        },
      ],
      gallery: {
        enabled: true,
      },
      type: "image", // this is a default type
    });

    $(".merry-people").magnificPopup({
      items: [
        {
          src: "https://vimeo.com/263997689",
          type: "iframe", // this overrides default type
        },
        {
          src: "https://i.imgur.com/7ywL1gE.jpg",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/MF2zsbS.jpg",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/e3Ro2OI.jpg",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/0PKoZ4y.jpg",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/WNdxBWP.jpg",
          title: "Stills",
        },
      ],
      gallery: {
        enabled: true,
      },
      type: "image", // this is a default type
    });

    $(".hyde").magnificPopup({
      items: [
        {
          src: '<div class="white-popup"><h3>Hi!</h3><p>If you would like to watch this, please feel free to contact me directly for a private link.</p><a href="mailto:ben.bellette@gmail.com">Ben.Bellette@gmail.com</a></div>',
          type: "inline", // this overrides default type
        },
        {
          src: "https://i.imgur.com/hKvdDSc.jpg",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/ZrmdRso.jpg",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/t5Y7LZl.jpg",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/anFg0ZZ.jpg",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/jg1OQ3i.jpg",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/1Zkg3jc.jpg",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/AdgqCAl.jpg",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/YhwCj1V.jpg",
          title: "Stills",
        },
      ],
      gallery: {
        enabled: true,
      },
      type: "image", // this is a default type
    });

    $(".dating-violet").magnificPopup({
      items: [
        {
          src: "https://vimeo.com/658390978",
          type: "iframe",
        },
        {
          src: "https://i.imgur.com/47C42gy.png",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/DYjGP5g.png",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/CW5oRQr.png",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/DheoiUB.png",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/AIe3pxd.png",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/fjlArIK.png",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/wJ5XYEx.png",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/K7EC5Lr.png",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/be2uYM2.png",
          title: "Stills",
        },
      ],
      gallery: {
        enabled: true,
      },
      type: "image", // this is a default type
    });

    $(".swimming-chair").magnificPopup({
      items: [
        {
          src: '<div class="white-popup"><h3>Hi!</h3><p>If you would like to watch this, please feel free to contact me directly for a private link.</p><a href="mailto:ben.bellette@gmail.com">Ben.Bellette@gmail.com</a></div>',
          type: "inline", // this overrides default type
        },
        {
          src: "https://i.imgur.com/tZH72wz.jpg",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/x5TtD5u.jpg",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/t51ksBR.jpg",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/scoByeX.jpg",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/3QIMde0.jpg",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/BOkIp0T.jpg",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/CUNxtuj.jpg",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/OsctiMq.jpg",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/fuUJbSB.jpg",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/gB0KXOL.jpg",
          title: "Stills",
        },
      ],
      gallery: {
        enabled: true,
      },
      type: "image", // this is a default type
    });

    $(".silent-key").magnificPopup({
      items: [
        {
          src: "https://vimeo.com/310434277",
          type: "iframe", // this overrides default type
        },
        {
          src: "https://i.imgur.com/fFgTERz.jpg",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/3kfpBYT.jpg",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/Oc13q5J.jpg",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/zJ8AdcZ.jpg",
          title: "Stills",
        },
      ],
      gallery: {
        enabled: true,
      },
      type: "image", // this is a default type
    });

    $(".funeral-films").magnificPopup({
      items: [
        {
          src: "https://vimeo.com/309620529",
          type: "iframe", // this overrides default type
        },
        {
          src: "https://i.imgur.com/X0nI4Mv.jpg",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/DpWjKil.jpg",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/lDCSmQM.jpg",
          title: "Stills",
        },
      ],
      gallery: {
        enabled: true,
      },
      type: "image", // this is a default type
    });

    $(".contrition-experimental").magnificPopup({
      items: [
        {
          src: "https://vimeo.com/167267065",
          type: "iframe", // this overrides default type
        },
        {
          src: "https://i.imgur.com/qaLCvQI.jpg",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/WrJmx9T.jpg",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/Otm0AXF.jpg",
          title: "Stills",
        },
      ],
      gallery: {
        enabled: true,
      },
      type: "image", // this is a default type
    });

    $(".sister-hood").magnificPopup({
      items: [
        {
          src: "https://vimeo.com/308777134",
          type: "iframe", // this overrides default type
        },
        {
          src: "https://i.imgur.com/WttVhEe.jpg",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/Tb967xN.jpg",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/CWRGYNx.jpg",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/byBM2Jf.jpg",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/QvOW2fw.jpg",
          title: "Stills",
        },
      ],
      gallery: {
        enabled: true,
      },
      type: "image", // this is a default type
    });

    $(".recrudescence").magnificPopup({
      items: [
        {
          src: "https://vimeo.com/309275624/638458eaf1",
          type: "iframe", // this overrides default type
        },
        {
          src: "https://i.imgur.com/0fOs6WS.jpg",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/XE5ryYA.jpg",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/3yG1Qkm.jpg",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/FGRRmd8.jpg",
          title: "Stills",
        },
      ],
      gallery: {
        enabled: true,
      },
      type: "image", // this is a default type
    });

    $(".samsurah-melbourne").magnificPopup({
      items: [
        {
          src: "https://vimeo.com/308641336",
          type: "iframe", // this overrides default type
        },
        {
          src: "https://i.imgur.com/4lRJReX.jpg",
          title: "Stills",
        },
      ],
      gallery: {
        enabled: true,
      },
      type: "image", // this is a default type
    });

    $(".burger-cookoff").magnificPopup({
      items: [
        {
          src: "https://vimeo.com/502777886",
          type: "iframe", // this overrides default type
        },
        {
          src: "https://i.imgur.com/FXXoOTy.jpg",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/jNtrAoR.jpg",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/jTXOgKu.jpg",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/xB31i5j.jpg",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/oHRjR39.jpg",
          title: "Stills",
        },
      ],
      gallery: {
        enabled: true,
      },
      type: "image", // this is a default type
    });

    $(".planet-protector").magnificPopup({
      items: [
        {
          src: "https://vimeo.com/624001918",
          type: "iframe", // this overrides default type
        },
        {
          src: "https://i.imgur.com/MMQ6ygt.png",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/HIJ7Co9.png",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/u1OsvUx.png",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/ozYD0rW.png",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/Wm24Cus.png",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/tMiPxrx.png",
          title: "Stills",
        },
      ],
      gallery: {
        enabled: true,
      },
      type: "image", // this is a default type
    });

    $(".numerik").magnificPopup({
      items: [
        {
          src: "https://vimeo.com/539463525",
          type: "iframe", // this overrides default type
        },
        {
          src: "https://i.imgur.com/RVVd9Xt.png",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/f1PrNHf.png",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/mXDS3PD.png",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/4rnqvv8.png",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/JMkTLtI.png",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/PRawiel.png",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/aHJ1jn6.png",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/fVsnkdx.png",
          title: "Stills",
        },
      ],
      gallery: {
        enabled: true,
      },
      type: "image", // this is a default type
    });

    $(".med-ball").magnificPopup({
      items: [
        {
          src: "https://vimeo.com/263445879",
          type: "iframe", // this overrides default type
        },
        {
          src: "https://i.imgur.com/MF6kuuK.jpg",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/usPyShM.jpg",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/iHM3Cup.jpg",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/muZA7XR.jpg",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/sdQAOHp.jpg",
          title: "Stills",
        },
      ],
      gallery: {
        enabled: true,
      },
      type: "image", // this is a default type
    });

    $(".nicky-wedding").magnificPopup({
      items: [
        {
          src: "https://vimeo.com/264354257",
          type: "iframe", // this overrides default type
        },
        {
          src: "https://i.imgur.com/vHEoLQS.jpg",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/CydxE09.jpg",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/FMAiGuC.jpg",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/y84gazN.jpg",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/VRXrZXq.jpg",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/amo5eY9.jpg",
          title: "Stills",
        },
      ],
      gallery: {
        enabled: true,
      },
      type: "image", // this is a default type
    });
    $(".ahmad-engagement").magnificPopup({
      items: [
        {
          src: "https://vimeo.com/263629121",
          type: "iframe", // this overrides default type
        },
        {
          src: "https://i.imgur.com/YAw0Oih.jpg",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/oSsx4Am.jpg",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/wXhr0yo.jpg",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/wc9NnF7.jpg",
          title: "Stills",
        },
      ],
      gallery: {
        enabled: true,
      },
      type: "image", // this is a default type
    });

    $(".kookai-show").magnificPopup({
      items: [
        {
          src: "https://vimeo.com/366880189",
          type: "iframe", // this overrides default type
        },
        {
          src: "https://i.imgur.com/JWKvHsu.jpg",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/YZdBWOh.jpg",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/t9bD7lw.jpg",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/eFOEv3d.jpg",
          title: "Stills",
        },
      ],
      gallery: {
        enabled: true,
      },
      type: "image", // this is a default type
    });

    $(".samsaruh-live").magnificPopup({
      items: [
        {
          src: "https://vimeo.com/308641336",
          type: "iframe", // this overrides default type
        },
        {
          src: "https://i.imgur.com/ifPjr2e.jpg",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/AmIePR4.jpg",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/7spE9iv.jpg",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/3W1AAz6.jpg",
          title: "Stills",
        },
      ],
      gallery: {
        enabled: true,
      },
      type: "image", // this is a default type
    });

    $(".willow-beats").magnificPopup({
      items: [
        {
          src: "https://vimeo.com/264202181",
          type: "iframe", // this overrides default type
        },
        {
          src: "https://i.imgur.com/2nsBK4t.jpg",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/SePHKbj.jpg",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/yOU4Z5z.jpg",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/qwYXdfr.jpg",
          title: "Stills",
        },
      ],
      gallery: {
        enabled: true,
      },
      type: "image", // this is a default type
    });
    $(".sydney-bts").magnificPopup({
      items: [
        {
          src: "https://vimeo.com/624045285",
          type: "iframe", // this overrides default type
        },
        {
          src: "https://i.imgur.com/gbK6dKe.png",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/AfCIsBx.png",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/UkAfRCj.png",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/nyVziL9.png",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/7jNaqJj.png",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/8W9BxoB.png",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/4HNTTdV.png",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/JdZ48mH.png",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/JWtwq5P.png",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/fA09s22.png",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/JqcOTtd.png",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/TvFPXO5.png",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/4Tu6kQi.png",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/4yditnd.png",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/UerCrmh.png",
          title: "Stills",
        },
      ],
      gallery: {
        enabled: true,
      },
      type: "image", // this is a default type
    });
    $(".fresenius").magnificPopup({
      items: [
        {
          src: "https://vimeo.com/654315362",
          type: "iframe", // this overrides default type
        },
        {
          src: "https://i.imgur.com/CYi5mC3.png",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/X78AwpG.png",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/ZQ5lv1j.png",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/p6UMxuo.png",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/iQ57yQI.png",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/ewcJin7.png",
          title: "Stills",
        },
      ],
      gallery: {
        enabled: true,
      },
      type: "image", // this is a default type
    });
    $(".just-strong").magnificPopup({
      items: [
        {
          src: "https://vimeo.com/278086344",
          type: "iframe", // this overrides default type
        },
        {
          src: "https://i.imgur.com/C7SCxu4.png",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/USSag2i.png",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/OqDgHlK.png",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/r32oG7C.png",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/eTPN86r.png",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/Pi52Y4z.png",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/EU1YpLZ.png",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/1BaNpk3.png",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/zXekjiX.png",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/AaoqFfj.png",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/fJPAm0l.png",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/5XYa8hQ.png",
          title: "Stills",
        },
      ],
      gallery: {
        enabled: true,
      },
      type: "image", // this is a default type
    });
    $(".bts-popup").magnificPopup({
      items: [
        {
          src: "https://i.imgur.com/22bOxRj.jpg",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/USpuWXu.jpg",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/gEPHCCL.jpg",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/AcON5os.jpg",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/ezeE3g1.jpg",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/RAJYFMe.jpg",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/wt8sYFZ.jpg",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/ySvlLT8.jpg",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/wpLPzuc.jpg",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/PlC9rqh.jpg",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/Zxa4KRM.jpg",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/hwXVxsA.jpg",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/PCKxfBR.jpg",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/YIjQI0n.jpg",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/5LBXHbR.jpg",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/wQzJB9e.jpg",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/ZbjWRGL.jpg",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/aJJiuCa.jpg",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/23AuO4P.jpg",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/pVmy300.jpg",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/Xl5zux4.jpg",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/4znchdF.jpg",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/hbaEKwe.jpg",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/MD5Mtep.jpg",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/vIwQfs6.jpg",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/53epSLY.jpg",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/byXw3Al.jpg",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/7rrfmZ7.jpg",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/yCzB65P.jpg",
          title: "Stills",
        },
      ],
      gallery: {
        enabled: true,
      },
      type: "image", // this is a default type
    });
    $(".photography-popup").magnificPopup({
      items: [
        {
          src: "https://i.imgur.com/bYNd8Q7.jpg",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/MfGJYnM.jpg",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/HWmXZmc.jpg",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/LIZM1Cm.jpg",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/ROsM6Cl.jpg",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/DfelLvX.jpg",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/YsCjVjz.jpg",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/znO6Zyk.jpg",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/EIA2emQ.jpg",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/7vyuJpC.jpg",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/VoRxD4E.jpg",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/ckFMfwr.jpg",
          title: "Stills",
        },
        {
          src: "https://i.imgur.com/CvhCbiA.jpg",
          title: "Stills",
        },
      ],
      gallery: {
        enabled: true,
      },
      type: "image", // this is a default type
    });
  }

  /* -------------------------------------------
     Parallax
     --------------------------------------------- */

  function init_parallax() {
    // Parallax
    if ($(window).width() >= 1024 && mobileTest == false) {
      $(".parallax-1").parallax("50%", 0.1);
      $(".parallax-2").parallax("50%", 0.2);
      $(".parallax-3").parallax("50%", 0.3);
      $(".parallax-4").parallax("50%", 0.4);
      $(".parallax-5").parallax("50%", 0.5);
      $(".parallax-6").parallax("50%", 0.6);
      $(".parallax-7").parallax("50%", 0.7);
      $(".parallax-8").parallax("50%", 0.5);
      $(".parallax-9").parallax("50%", 0.5);
      $(".parallax-10").parallax("50%", 0.5);
      $(".parallax-11").parallax("50%", 0.05);
    }
  }

  /* ---------------------------------------------
     Shortcodes
     --------------------------------------------- */
  // Tabs minimal
  function init_shortcodes() {
    var tpl_tab_height;
    $(".tpl-minimal-tabs > li > a").click(function () {
      if (!$(this).parent("li").hasClass("active")) {
        tpl_tab_height = $(".tpl-minimal-tabs-cont > .tab-pane")
          .filter($(this).attr("href"))
          .height();
        $(".tpl-minimal-tabs-cont").animate(
          {
            height: tpl_tab_height,
          },
          function () {
            $(".tpl-minimal-tabs-cont").css("height", "auto");
          }
        );
      }
    });

    // Accordion
    $(".accordion").each(function () {
      var allPanels = $(this).children("dd").hide();
      $(this).children("dd").first().slideDown("easeOutExpo");
      $(this).children("dt").children("a").first().addClass("active");

      $(this)
        .children("dt")
        .children("a")
        .click(function () {
          var current = $(this).parent().next("dd");
          $(".accordion > dt > a").removeClass("active");
          $(this).addClass("active");
          allPanels.not(current).slideUp("easeInExpo");
          $(this).parent().next().slideDown("easeOutExpo");
          return false;
        });
    });

    // Toggle
    var allToggles = $(".toggle > dd").hide();

    $(".toggle > dt > a").click(function () {
      if ($(this).hasClass("active")) {
        $(this).parent().next().slideUp("easeOutExpo");
        $(this).removeClass("active");
      } else {
        var current = $(this).parent().next("dd");
        $(this).addClass("active");
        $(this).parent().next().slideDown("easeOutExpo");
      }

      return false;
    });

    // Responsive video
    $(".video, .resp-media, .blog-media").fitVids();
    $(".work-full-media").fitVids();
  }

  /* ---------------------------------------------
     Tooltips (bootstrap plugin activated)
     --------------------------------------------- */

  function init_tooltips() {
    $(".tooltip-bot, .tooltip-bot a, .nav-social-links a").tooltip({
      placement: "bottom",
    });

    $(".tooltip-top, .tooltip-top a").tooltip({
      placement: "top",
    });
  }

  /* ---------------------------------------------
     Some facts section
     --------------------------------------------- */

  function init_counters() {
    $(".count-number").appear(function () {
      var count = $(this);
      count.countTo({
        from: 0,
        to: count.html(),
        speed: 1300,
        refreshInterval: 60,
      });
    });
  }

  /* ---------------------------------------------
     Team
     --------------------------------------------- */

  function init_team() {
    // Hover
    $(".team-item").click(function () {
      if ($("html").hasClass("mobile")) {
        $(this).toggleClass("js-active");
      }
    });
  }
})(jQuery); // End of use strict

/* ---------------------------------------------
 Sliders
 --------------------------------------------- */
function initPageSliders() {
  (function ($) {
    "use strict";

    // Fullwidth slider
    $(".fullwidth-slider").owlCarousel({
      slideSpeed: 350,
      singleItem: true,
      autoHeight: true,
      navigation: true,
      navigationText: [
        "<i class='fa fa-angle-left'></i>",
        "<i class='fa fa-angle-right'></i>",
      ],
    });

    // Fullwidth slider
    $(".fullwidth-slider-fade").owlCarousel({
      transitionStyle: "fadeUp",
      slideSpeed: 350,
      singleItem: true,
      autoHeight: true,
      navigation: true,
      navigationText: [
        "<i class='fa fa-angle-left'></i>",
        "<i class='fa fa-angle-right'></i>",
      ],
    });

    // Fullwidth gallery
    $(".fullwidth-gallery").owlCarousel({
      transitionStyle: "fade",
      autoPlay: 5000,
      slideSpeed: 700,
      singleItem: true,
      autoHeight: true,
      navigation: false,
      pagination: false,
    });

    // Item carousel
    $(".item-carousel").owlCarousel({
      autoPlay: 2500,
      //stopOnHover: true,
      items: 3,
      itemsDesktop: [1199, 3],
      itemsTabletSmall: [768, 3],
      itemsMobile: [480, 1],
      navigation: false,
      navigationText: [
        "<i class='fa fa-angle-left'></i>",
        "<i class='fa fa-angle-right'></i>",
      ],
    });

    // Item carousel
    $(".small-item-carousel").owlCarousel({
      autoPlay: 2500,
      stopOnHover: true,
      items: 6,
      itemsDesktop: [1199, 4],
      itemsTabletSmall: [768, 3],
      itemsMobile: [480, 2],
      pagination: false,
      navigation: false,
      navigationText: [
        "<i class='fa fa-angle-left'></i>",
        "<i class='fa fa-angle-right'></i>",
      ],
    });

    // Single carousel
    $(".single-carousel").owlCarousel({
      singleItem: true,
      autoHeight: true,
      navigation: true,
      navigationText: [
        "<i class='fa fa-angle-left'></i>",
        "<i class='fa fa-angle-right'></i>",
      ],
    });

    // Content Slider
    $(".content-slider").owlCarousel({
      slideSpeed: 350,
      singleItem: true,
      autoHeight: true,
      navigation: true,
      navigationText: [
        "<i class='fa fa-angle-left'></i>",
        "<i class='fa fa-angle-right'></i>",
      ],
    });

    // Photo slider
    $(".photo-slider").owlCarousel({
      slideSpeed: 350,
      items: 4,
      itemsDesktop: [1199, 4],
      itemsTabletSmall: [768, 2],
      itemsMobile: [480, 1],
      autoHeight: true,
      navigation: true,
      navigationText: [
        "<i class='fa fa-angle-left'></i>",
        "<i class='fa fa-angle-right'></i>",
      ],
    });

    // Work slider
    $(".work-full-slider").owlCarousel({
      slideSpeed: 350,
      singleItem: true,
      autoHeight: true,
      navigation: true,
      navigationText: [
        "<i class='fa fa-angle-left'></i>",
        "<i class='fa fa-angle-right'></i>",
      ],
    });

    // Blog posts carousel
    $(".blog-posts-carousel").owlCarousel({
      autoPlay: 5000,
      stopOnHover: true,
      items: 3,
      itemsDesktop: [1199, 3],
      itemsTabletSmall: [768, 2],
      itemsMobile: [480, 1],
      pagination: false,
      navigation: true,
      navigationText: [
        "<i class='fa fa-angle-left'></i>",
        "<i class='fa fa-angle-right'></i>",
      ],
    });

    // Blog posts carousel alt
    $(".blog-posts-carousel-alt").owlCarousel({
      autoPlay: 3500,
      stopOnHover: true,
      slideSpeed: 350,
      singleItem: true,
      autoHeight: true,
      pagination: false,
      navigation: true,
      navigationText: [
        "<i class='fa fa-angle-left'></i>",
        "<i class='fa fa-angle-right'></i>",
      ],
    });

    // Image carousel
    $(".image-carousel").owlCarousel({
      autoPlay: 5000,
      stopOnHover: true,
      items: 4,
      itemsDesktop: [1199, 3],
      itemsTabletSmall: [768, 2],
      itemsMobile: [480, 1],
      navigation: true,
      navigationText: [
        "<i class='fa fa-angle-left'></i>",
        "<i class='fa fa-angle-right'></i>",
      ],
    });

    // Fullwidth slideshow

    var sync1 = $(".fullwidth-slideshow");
    var sync2 = $(".fullwidth-slideshow-pager");

    $(".fullwidth-slideshow").owlCarousel({
      autoPlay: 5000,
      stopOnHover: true,
      transitionStyle: "fade",
      slideSpeed: 350,
      singleItem: true,
      autoHeight: true,
      pagination: false,
      navigation: true,
      navigationText: [
        "<i class='fa fa-angle-left'></i>",
        "<i class='fa fa-angle-right'></i>",
      ],
      afterAction: syncPosition,
      responsiveRefreshRate: 200,
    });
    $(".fullwidth-slideshow-pager").owlCarousel({
      autoPlay: 5000,
      stopOnHover: true,
      items: 8,
      itemsDesktop: [1199, 8],
      itemsDesktopSmall: [979, 7],
      itemsTablet: [768, 6],
      itemsMobile: [480, 4],
      autoHeight: true,
      pagination: false,
      navigation: false,
      responsiveRefreshRate: 100,
      afterInit: function (el) {
        el.find(".owl-item").eq(0).addClass("synced");
      },
    });

    function syncPosition(el) {
      var current = this.currentItem;
      $(".fullwidth-slideshow-pager")
        .find(".owl-item")
        .removeClass("synced")
        .eq(current)
        .addClass("synced");
      if ($(".fullwidth-slideshow-pager").data("owlCarousel") !== undefined) {
        center(current);
      }
    }

    $(".fullwidth-slideshow-pager").on("click", ".owl-item", function (e) {
      e.preventDefault();
      var number = $(this).data("owlItem");
      sync1.trigger("owl.goTo", number);
    });

    function center(number) {
      var sync2visible = sync2.data("owlCarousel").owl.visibleItems;
      var num = number;
      var found = false;
      for (var i in sync2visible) {
        if (num === sync2visible[i]) {
          var found = true;
        }
      }
      if (found === false) {
        if (num > sync2visible[sync2visible.length - 1]) {
          sync2.trigger("owl.goTo", num - sync2visible.length + 2);
        } else {
          if (num - 1 === -1) {
            num = 0;
          }
          sync2.trigger("owl.goTo", num);
        }
      } else if (num === sync2visible[sync2visible.length - 1]) {
        sync2.trigger("owl.goTo", sync2visible[1]);
      } else if (num === sync2visible[0]) {
        sync2.trigger("owl.goTo", num - 1);
      }
    }

    var owl = $(".fullwidth-slideshow").data("owlCarousel");

    $(document.documentElement).keyup(function (event) {
      // handle cursor keys
      if (event.keyCode == 37) {
        owl.prev();
      } else if (event.keyCode == 39) {
        owl.next();
      }
    });

    if ($(".owl-carousel").length) {
      var owl = $(".owl-carousel").data("owlCarousel");
      owl.reinit();
    }
  })(jQuery);
}

/* ---------------------------------------------
     Fullscreen menu
   --------------------------------------------- */

var fm_menu_wrap = $("#fullscreen-menu");
var fm_menu_button = $(".fm-button");

function init_fullscreen_menu() {
  fm_menu_button.click(function () {
    if ($(this).hasClass("animation-process")) {
      return false;
    } else {
      if ($(this).hasClass("active")) {
        $(this)
          .removeClass("active")
          .css("z-index", "2001")
          .addClass("animation-process");

        fm_menu_wrap.find(".fm-wrapper-sub").fadeOut("fast", function () {
          fm_menu_wrap.fadeOut(function () {
            fm_menu_wrap
              .find(".fm-wrapper-sub")
              .removeClass("js-active")
              .show();
            fm_menu_button
              .css("z-index", "1030")
              .removeClass("animation-process");
          });
        });

        if ($(".owl-carousel").lenth) {
          $(".owl-carousel").data("owlCarousel").play();
        }
      } else {
        if ($(".owl-carousel").lenth) {
          $(".owl-carousel").data("owlCarousel").stop();
        }
        $(this)
          .addClass("active")
          .css("z-index", "2001")
          .addClass("animation-process");

        fm_menu_wrap.fadeIn(function () {
          fm_menu_wrap.find(".fm-wrapper-sub").addClass("js-active");
          fm_menu_button.removeClass("animation-process");
        });
      }

      return false;
    }
  });

  $("#fullscreen-menu")
    .find("a:not(.fm-has-sub)")
    .click(function () {
      if (fm_menu_button.hasClass("animation-process")) {
        return false;
      } else {
        fm_menu_button
          .removeClass("active")
          .css("z-index", "2001")
          .addClass("animation-process");

        fm_menu_wrap.find(".fm-wrapper-sub").fadeOut("fast", function () {
          fm_menu_wrap.fadeOut(function () {
            fm_menu_wrap
              .find(".fm-wrapper-sub")
              .removeClass("js-active")
              .show();
            fm_menu_button
              .css("z-index", "1030")
              .removeClass("animation-process");
          });
        });

        if ($(".owl-carousel").lenth) {
          $(".owl-carousel").data("owlCarousel").play();
        }
      }
    });

  // Sub menu

  var fmHasSub = $(".fm-has-sub");
  var fmThisLi;

  fmHasSub.click(function () {
    fmThisLi = $(this).parent("li:first");
    if (fmThisLi.hasClass("js-opened")) {
      fmThisLi.find(".fm-sub:first").slideUp(function () {
        fmThisLi.removeClass("js-opened");
        fmThisLi
          .find(".fm-has-sub")
          .find(".fa:first")
          .removeClass("fa-angle-up")
          .addClass("fa-angle-down");
      });
    } else {
      $(this)
        .find(".fa:first")
        .removeClass("fa-angle-down")
        .addClass("fa-angle-up");
      fmThisLi.addClass("js-opened");
      fmThisLi.find(".fm-sub:first").slideDown();
    }

    return false;
  });
}

/* ---------------------------------------------
     Side panel
   --------------------------------------------- */

var side_panel = $(".side-panel");
var sp_button = $(".sp-button");
var sp_close_button = $(".sp-close-button");
var sp_overlay = $(".sp-overlay");

function sp_panel_close() {
  side_panel.animate(
    {
      opacity: 0,
      left: -270,
    },
    500,
    "easeOutExpo"
  );
  sp_overlay.fadeOut();

  if ($(".owl-carousel").lenth) {
    $(".owl-carousel").data("owlCarousel").play();
  }
}

function init_side_panel() {
  (function ($) {
    "use strict";

    sp_button.click(function () {
      side_panel.animate(
        {
          opacity: 1,
          left: 0,
        },
        500,
        "easeOutExpo"
      );

      setTimeout(function () {
        sp_overlay.fadeIn();
      }, 100);

      if ($(".owl-carousel").lenth) {
        $(".owl-carousel").data("owlCarousel").stop();
      }

      return false;
    });

    sp_close_button.click(function () {
      sp_panel_close();
      return false;
    });
    sp_overlay.click(function () {
      sp_panel_close();
      return false;
    });

    $("#side-panel-menu")
      .find("a:not(.sp-has-sub)")
      .click(function () {
        if (!($(window).width() >= 1199)) {
          sp_panel_close();
        }
      });

    // Sub menu

    var spHasSub = $(".sp-has-sub");
    var spThisLi;

    spHasSub.click(function () {
      spThisLi = $(this).parent("li:first");
      if (spThisLi.hasClass("js-opened")) {
        spThisLi.find(".sp-sub:first").slideUp(function () {
          spThisLi.removeClass("js-opened");
          spThisLi
            .find(".sp-has-sub")
            .find(".fa:first")
            .removeClass("fa-angle-up")
            .addClass("fa-angle-down");
        });
      } else {
        $(this)
          .find(".fa:first")
          .removeClass("fa-angle-down")
          .addClass("fa-angle-up");
        spThisLi.addClass("js-opened");
        spThisLi.find(".sp-sub:first").slideDown();
      }

      return false;
    });
  })(jQuery);
}

function init_side_panel_resize() {
  (function ($) {
    "use strict";

    if ($(window).width() >= 1199) {
      side_panel.css({
        opacity: 1,
        left: 0,
      });
      $(".side-panel-is-left").css("margin-left", "270px");
      sp_button.css("display", "none");
      sp_close_button.css("display", "none");
    } else {
      if (sp_close_button.is(":hidden")) {
        side_panel.css({
          opacity: 0,
          left: -270,
        });
        $(".side-panel-is-left").css("margin-left", "0");
        sp_button.css("display", "block");
        sp_close_button.css("display", "block");
      }
    }
  })(jQuery);
}

/* ---------------------------------------------
 Portfolio section
 --------------------------------------------- */

// Projects filtering
var fselector = 0;
var work_grid = $("#work-grid, #isotope");

function initWorkFilter() {
  (function ($) {
    "use strict";
    var isotope_mode;
    if (work_grid.hasClass("masonry")) {
      isotope_mode = "masonry";
    } else {
      isotope_mode = "fitRows";
    }

    $(".filter").click(function () {
      $(".filter").removeClass("active");
      $(this).addClass("active");
      fselector = $(this).attr("data-filter");

      work_grid.imagesLoaded(function () {
        work_grid.isotope({
          itemSelector: ".mix",
          layoutMode: isotope_mode,
          filter: fselector,
        });
      });
      return false;
    });

    if (window.location.hash) {
      $(".filter").each(function () {
        if (
          $(this).attr("data-filter") ==
          "." + window.location.hash.replace("#", "")
        ) {
          $(this).trigger("click");

          $("html, body").animate({
            scrollTop: $("#portfolio").offset().top,
          });
        }
      });
    }

    work_grid.imagesLoaded(function () {
      work_grid.isotope({
        itemSelector: ".mix",
        layoutMode: isotope_mode,
        filter: fselector,
      });
    });
  })(jQuery);
}

/* ---------------------------------------------
 Height 100%
 --------------------------------------------- */
function js_height_init() {
  (function ($) {
    $(".js-height-full").height($(window).height());
    $(".js-height-parent").each(function () {
      $(this).height($(this).parent().first().height());
    });
  })(jQuery);
}

/* ---------------------------------------------
 Google map
 --------------------------------------------- */

var gmMapDiv = $("#map-canvas");

function init_map() {
  (function ($) {
    $(".map-section").click(function () {
      $(this).toggleClass("js-active");
      $(this).find(".mt-open").toggle();
      $(this).find(".mt-close").toggle();
    });
  })(jQuery);
}

/* ---------------------------------------------
 WOW animations
 --------------------------------------------- */

function init_wow() {
  (function ($) {
    var wow = new WOW({
      boxClass: "wow",
      animateClass: "animated",
      offset: 90,
      mobile: false,
      live: true,
    });

    if ($("body").hasClass("appear-animate")) {
      wow.init();
    }
  })(jQuery);
}

/* ---------------------------------------------
 Masonry
 --------------------------------------------- */

function init_masonry() {
  (function ($) {
    $(".masonry").imagesLoaded(function () {
      $(".masonry").masonry();
    });
  })(jQuery);
}

/* ---------------------------------------------
 Split section
 --------------------------------------------- */

function split_height_init() {
  (function ($) {
    $(".ssh-table, .split-section-content").css("height", "auto");

    if ($(window).width() > 992) {
      $(".split-section").each(function () {
        var split_section_height = $(this)
          .find(".split-section-content")
          .innerHeight();
        $(this).find(".ssh-table").height(split_section_height);
      });
    }
  })(jQuery);
}
