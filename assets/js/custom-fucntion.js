! function(e) {
    var i = {};

    function t(o) {
        if (i[o]) return i[o].exports;
        var s = i[o] = {
            i: o,
            l: !1,
            exports: {}
        };
        return e[o].call(s.exports, s, s.exports, t), s.l = !0, s.exports
    }
    t.m = e, t.c = i, t.d = function(e, i, o) {
        t.o(e, i) || Object.defineProperty(e, i, {
            configurable: !1,
            enumerable: !0,
            get: o
        })
    }, t.n = function(e) {
        var i = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return t.d(i, "a", i), i
    }, t.o = function(e, i) {
        return Object.prototype.hasOwnProperty.call(e, i)
    }, t.p = "/app/themes/yefa-theme/dist/", t(t.s = 1)
}([function(e, i) {
    e.exports = jQuery
}, function(e, i, t) {
    t(2), e.exports = t(9)
}, function(e, i, t) {
    "use strict";
    Object.defineProperty(i, "__esModule", {
            value: !0
        }),
        function(e) {
            var i = t(0),
                o = (t.n(i), t(3)),
                s = t(5),
                n = t(7),
                r = t(8),
                l = new o.a({
                    common: s.a,
                    home: n.a,
                    aboutUs: r.a
                });
            e(document).ready(function() {
                return l.loadEvents()
            })
        }.call(i, t(0))
}, function(e, i, t) {
    "use strict";
    var o = t(4),
        s = function(e) {
            this.routes = e
        };
    s.prototype.fire = function(e, i, t) {
        void 0 === i && (i = "init"), document.dispatchEvent(new CustomEvent("routed", {
            bubbles: !0,
            detail: {
                route: e,
                fn: i
            }
        }));
        var o = "" !== e && this.routes[e] && "function" == typeof this.routes[e][i];
        o && this.routes[e][i](t)
    }, s.prototype.loadEvents = function() {
        var e = this;
        this.fire("common"), document.body.className.toLowerCase().replace(/-/g, "_").split(/\s+/).map(o.a).forEach(function(i) {
            e.fire(i), e.fire(i, "finalize")
        }), this.fire("common", "finalize")
    }, i.a = s
}, function(e, i, t) {
    "use strict";
    i.a = function(e) {
        return "" + e.charAt(0).toLowerCase() + e.replace(/[\W_]/g, "|").split("|").map(function(e) {
            return "" + e.charAt(0).toUpperCase() + e.slice(1)
        }).join("").slice(1)
    }
}, function(e, i, t) {
    "use strict";
    (function(e) {
        var o = t(6);
        t.n(o);
        i.a = {
            init: function() {
                var i = e("#mobile-nav .mobile-menu");
                e(".mobile-menu-toggle.open").on("click", function() {
                    e("#mobile-nav").toggleClass("open"), e(".top-bar").toggleClass("menu-open"), i.slideToggle(), e(this).css("display", "none"), e(".mobile-menu-toggle.close").css("display", "block")
                }), e(".mobile-menu-toggle.close").on("click", function() {
                    e(".top-bar").toggleClass("menu-open"), i.slideToggle(), e(this).css("display", "none"), e(".mobile-menu-toggle.open").css("display", "block"), e("#mobile-nav").toggleClass("open")
                }), e(".top-bar .slick__fade").slick({
                    dots: !1,
                    arrows: !1,
                    autoplay: !0,
                    infinite: !0,
                    speed: 500,
                    autoplaySpeed: 5e3,
                    fade: !0,
                    cssEase: "linear"
                }), e(".front-page__slick").slick({
                    dots: !0,
                    infinite: !0,
                    speed: 300,
                    slidesToShow: 1,
                    mobileFirst: !0,
                    prevArrow: e("#banner .banner-arrow__prev.small-arrows"),
                    nextArrow: e("#banner .banner-arrow__next.small-arrows"),
                    responsive: [{
                        breakpoint: 1200,
                        settings: {
                            prevArrow: e("#banner .banner-arrow__prev.large-arrows"),
                            nextArrow: e("#banner .banner-arrow__next.large-arrows")
                        }
                    }]
                }), e(window).on("load resize orientationchange", function() {
                    e(".banner-bottom__slick").each(function() {
                        var i = e(this),
                            t = i.parent().parent();
                        e(window).outerWidth() > 1200 && i.hasClass("slick-initialized") && i.slick("unslick"), e(window).outerWidth() < 540 && (i.hasClass("slick-initialized") || i.slick({
                            mobileFirst: !0,
                            dots: !1,
                            arrows: !0,
                            autoplay: !0,
                            infinite: !0,
                            autoplaySpeed: 8e3,
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            prevArrow: t.find(".banner-arrow__prev.small-arrows"),
                            nextArrow: t.find(".banner-arrow__next.small-arrows")
                        })), e(window).outerWidth() > 540 && e(window).outerWidth() < 899 && (i.hasClass("slick-initialized") || i.slick({
                            mobileFirst: !0,
                            dots: !1,
                            arrows: !0,
                            autoplay: !0,
                            infinite: !0,
                            autoplaySpeed: 8e3,
                            slidesToShow: 2,
                            slidesToScroll: 2,
                            prevArrow: t.find(".banner-arrow__prev.small-arrows"),
                            nextArrow: t.find(".banner-arrow__next.small-arrows")
                        })), e(window).outerWidth() > 900 && e(window).outerWidth() < 1200 && (i.hasClass("slick-initialized") || i.slick({
                            mobileFirst: !0,
                            dots: !1,
                            arrows: !0,
                            autoplay: !0,
                            infinite: !0,
                            autoplaySpeed: 8e3,
                            slidesToShow: 3,
                            slidesToScroll: 3,
                            prevArrow: t.find(".banner-arrow__prev.small-arrows"),
                            nextArrow: t.find(".banner-arrow__next.small-arrows")
                        }))
                    }), e(".academies-section__slick").each(function() {
                        var i = e(this),
                            t = i.parent().parent();
                        i.hasClass("slick-initialized") || i.slick(), e(window).outerWidth() > 1200 && i.slick("slickSetOption", {
                            dots: !1,
                            arrows: !0,
                            infinite: !0,
                            slidesToShow: 3,
                            slidesToScroll: 1,
                            prevArrow: t.find(".banner-arrow__prev.large-arrows"),
                            nextArrow: t.find(".banner-arrow__next.large-arrows")
                        }, !0), e(window).outerWidth() > 900 && e(window).outerWidth() < 1200 && i.slick("slickSetOption", {
                            dots: !1,
                            arrows: !0,
                            infinite: !0,
                            slidesToShow: 2,
                            slidesToScroll: 1,
                            prevArrow: t.find(".banner-arrow__prev.large-arrows"),
                            nextArrow: t.find(".banner-arrow__next.large-arrows")
                        }, !0), e(window).outerWidth() < 900 && e(window).outerWidth() > 680 && i.slick("slickSetOption", {
                            dots: !0,
                            arrows: !0,
                            infinite: !0,
                            slidesToShow: 2,
                            slidesToScroll: 1,
                            prevArrow: t.find(".banner-arrow__prev.small-arrows"),
                            nextArrow: t.find(".banner-arrow__next.small-arrows"),
                            appendArrows: t.find(".slide-nav"),
                            appendDots: t.find(".slide-nav")
                        }, !0), e(window).outerWidth() < 680 && i.slick("slickSetOption", {
                            dots: !0,
                            arrows: !0,
                            infinite: !0,
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            prevArrow: t.find(".banner-arrow__prev.small-arrows"),
                            nextArrow: t.find(".banner-arrow__next.small-arrows"),
                            appendArrows: t.find(".slide-nav"),
                            appendDots: t.find(".slide-nav")
                        }, !0)
                    }), e(".testimonials-section__slick").each(function() {
                        var i = e(this),
                            t = i.parent().parent();
                        i.hasClass("slick-initialized") || i.slick(), e(window).outerWidth() > 900 && i.slick("slickSetOption", {
                            dots: !1,
                            arrows: !0,
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            infinite: !0,
                            prevArrow: t.find(".banner-arrow__prev.large-arrows"),
                            nextArrow: t.find(".banner-arrow__next.large-arrows")
                        }, !0), e(window).outerWidth() < 900 && e(window).outerWidth() > 680 && i.slick("slickSetOption", {
                            dots: !0,
                            arrows: !0,
                            infinite: !0,
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            prevArrow: t.find(".banner-arrow__prev.small-arrows"),
                            nextArrow: t.find(".banner-arrow__next.small-arrows"),
                            appendArrows: t.find(".slide-nav"),
                            appendDots: t.find(".slide-nav")
                        }, !0), e(window).outerWidth() < 680 && i.slick("slickSetOption", {
                            dots: !0,
                            arrows: !0,
                            infinite: !0,
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            prevArrow: t.find(".banner-arrow__prev.small-arrows"),
                            nextArrow: t.find(".banner-arrow__next.small-arrows"),
                            appendArrows: t.find(".slide-nav"),
                            appendDots: t.find(".slide-nav")
                        }, !0)
                    }), e(".values-section__slick").each(function() {
                        var i = e(this),
                            t = i.parent().parent();
                        i.hasClass("slick-initialized") || i.slick(), e(window).outerWidth() > 1200 && i.slick("slickSetOption", {
                            dots: !0,
                            arrows: !0,
                            infinite: !0,
                            slidesToShow: 3,
                            slidesToScroll: 1,
                            prevArrow: "#our-values .banner-arrow__prev.large-arrows",
                            nextArrow: "#our-values .banner-arrow__next.large-arrows",
                            appendDots: t.find(".slide-nav")
                        }, !0), e(window).outerWidth() < 1199 && e(window).outerWidth() > 680 && i.slick("slickSetOption", {
                            dots: !0,
                            arrows: !0,
                            infinite: !0,
                            slidesToShow: 2,
                            slidesToScroll: 1,
                            prevArrow: t.find(".banner-arrow__prev.small-arrows"),
                            nextArrow: t.find(".banner-arrow__next.small-arrows"),
                            appendArrows: t.find(".slide-nav"),
                            appendDots: t.find(".slide-nav")
                        }, !0), e(window).outerWidth() < 680 && i.slick("slickSetOption", {
                            dots: !0,
                            arrows: !0,
                            infinite: !0,
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            prevArrow: t.find(".banner-arrow__prev.small-arrows"),
                            nextArrow: t.find(".banner-arrow__next.small-arrows"),
                            appendArrows: t.find(".slide-nav"),
                            appendDots: t.find(".slide-nav")
                        }, !0)
                    }), e(".image-gallery-block__slick").each(function() {
                        var i = e(this),
                            t = i.parent().parent();
                        i.hasClass("slick-initialized") || i.slick(), e(window).outerWidth() > 900 && i.slick("slickSetOption", {
                            dots: !0,
                            arrows: !0,
                            centerMode: !0,
                            infinite: !0,
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            variableWidth: !0,
                            prevArrow: t.find(".banner-arrow__prev.large-arrows"),
                            nextArrow: t.find(".banner-arrow__next.large-arrows")
                        }, !0), e(window).outerWidth() < 900 && i.slick("slickSetOption", {
                            dots: !0,
                            arrows: !0,
                            autoplay: !1,
                            infinite: !0,
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            variableWidth: !0,
                            centerMode: !0,
                            prevArrow: t.find(".banner-arrow__prev.small-arrows"),
                            nextArrow: t.find(".banner-arrow__next.small-arrows"),
                            appendArrows: t.find(".slide-nav"),
                            appendDots: t.find(".slide-nav")
                        }, !0)
                    }), e(".large-block-slider__slick").each(function() {
                        var i = e(this),
                            t = i.parent().parent();
                        i.hasClass("slick-initialized") || i.slick(), e(window).outerWidth() > 900 && i.slick("slickSetOption", {
                            dots: !0,
                            arrows: !0,
                            autoplay: !1,
                            infinite: !0,
                            prevArrow: t.find(".banner-arrow__prev.large-arrows"),
                            nextArrow: t.find(".banner-arrow__next.large-arrows")
                        }, !0), e(window).outerWidth() < 900 && i.slick("slickSetOption", {
                            dots: !0,
                            arrows: !0,
                            autoplay: !1,
                            infinite: !0,
                            prevArrow: t.find(".banner-arrow__prev.small-arrows"),
                            nextArrow: t.find(".banner-arrow__next.small-arrows"),
                            appendArrows: t.find(".slide-nav"),
                            appendDots: t.find(".slide-nav")
                        }, !0)
                    })
                });
                var t = e(".video-poster");
                if (e(".video-gallery-block__slick").slick({
                        dots: !0,
                        arrows: !0,
                        autoplay: !1,
                        slidesToScroll: 1,
                        initialSlide: 0,
                        variableWidth: !0,
                        mobileFirst: !0,
                        prevArrow: e(".video-gallery-block .banner-arrow__prev.large-arrows"),
                        nextArrow: e(".video-gallery-block .banner-arrow__next.large-arrows"),
                        responsive: [{
                            breakpoint: 900,
                            settings: {
                                centerMode: !0,
                                slidesToScroll: 1,
                                centerPadding: "100px"
                            }
                        }]
                    }), t.on("click", function(i) {
                        i.preventDefault();
                        var t = e(this);
                        ! function(i) {
                            var t = e(i).find("iframe"),
                                o = t.data("src");
                            e(i).addClass("video-active"), e(t).attr("src", o + "?autoplay=1")
                        }(e(t).closest(".slide-item"))
                    }), e(".large-info-slider__slick").slick({
                        dots: !0,
                        arrows: !0,
                        autoplay: !1,
                        infinite: !0,
                        mobileFirst: !0,
                        prevArrow: e(".large-info-slider-block .banner-arrow__prev.small-arrows"),
                        nextArrow: e(".large-info-slider-block .banner-arrow__next.small-arrows"),
                        responsive: [{
                            breakpoint: 900,
                            settings: {
                                prevArrow: e(".large-info-slider-block .banner-arrow__prev.large-arrows"),
                                nextArrow: e(".large-info-slider-block .banner-arrow__next.large-arrows")
                            }
                        }]
                    }), e(".products-list_mobile__slick").each(function() {
                        var i = e(this).parent();
                        e(this).slick({
                            dots: !1,
                            arrows: !0,
                            autoplay: !1,
                            infinite: !0,
                            prevArrow: i.find(".banner-arrow__prev.small-arrows"),
                            nextArrow: i.find(".banner-arrow__next.small-arrows")
                        })
                    }), e(".product-options button").on("click", function(i) {
                        i.preventDefault(), e(".product-options button").removeClass("selected-option");
                        var t = e(this);
                        e(t).addClass("selected-option");
                        var o = e(t).attr("data-attribute_id"),
                            s = e(t).html().replace(" ", "+"),
                            n = e(t).attr("data-product_id"),
                            r = e(t).attr("data-product_name"),
                            l = e(t).attr("data-option_name"),
                            a = e(t).attr("data-option_price"),
                            d = e(".add_to_cart_button"),
                            c = window.location,
                            p = c.protocol + "//" + c.host + "/" + c.pathname.split("/")[1] + "/" + r + "/?attribute_course-days=" + s + "&variation_id=" + o + "&add-to-cart=" + n;
                        e(d).attr("href", p), e(d).attr("data-product_id", o), e(d).attr("aria-label", "Add â€œ" + l + "â€ to your cart"), e(".woocommerce-Price-amount").html("Â£" + a)
                    }), e(".basket .quantity").before('<span class="decrement">-</span>'), e(".basket .quantity").after('<span class="increment">+</span>'), e(document).ajaxStop(function() {
                        e(".basket .quantity").before('<span class="decrement">-</span>'), e(".basket .quantity").after('<span class="increment">+</span>')
                    }), e(".product-quantity .decrement").on("click", function() {
                        var i, t = e(this).parent().find(".qty").val();
                        i = 0 != (t = parseInt(t, 10)) ? t - 1 : t, e(this).parent().find(".qty").val(i), e(this).parent().find(".qty").attr("value", i), e('button[name="update_cart"]').prop("disabled", !1)
                    }), e(".product-quantity .increment").on("click", function() {
                        var i = e(this).parent().find(".qty").val(),
                            t = (i = parseInt(i, 10)) + 1;
                        e(this).parent().find(".qty").val(t), e(this).parent().find(".qty").attr("value", t), e('button[name="update_cart"]').prop("disabled", !1)
                    }), e("#book-now-pullout").find(".book-now-tab").on("click", function() {
                        e("#book-now-pullout").toggleClass("show");
                        var i = e("#book-now-pullout .academy-select.selected").attr("data-url");
                        "" == e("#book-now-pullout .tab-open .btn").attr("href") && (e("#book-now-pullout .tab-open .btn").attr("href", i), e("#book-now-pullout .mobile-btn .btn").attr("href", i))
                    }), e("#book-now-pullout .academy-item").on("click", function() {
                        e("#book-now-pullout .academy-item").removeClass("selected"), e("#book-now-pullout .academy-item .academy-select").removeClass("selected");
                        var i = e(this).find(".academy-select").attr("data-url");
                        e("#book-now-pullout .tab-open .btn").attr("href", i), e("#book-now-pullout .mobile-btn .btn").attr("href", i), e(this).addClass("selected"), e(this).find(".academy-select").addClass("selected")
                    }), e("#book-now-pullout .mobile-close .close").on("click", function() {
                        e("#book-now-pullout").toggleClass("show")
                    }), e("#loadMoreResults").on("click", function() {
                        var i = e("#load-more .load-more-item"),
                            t = e(".shown-result").length || 9;
                        t = t + 3 <= i.length ? t + 3 : i.length, e("#load-more .load-more-item:lt(" + t + ")").addClass("shown-result"), t == i.length && e("#loadMoreResults").hide()
                    }), e(".checkout .wooccm-additional-fields").remove(), e(".accordion-button").on("click", function(i) {
                        i.preventDefault(), e(this).next().hasClass("active") ? (e(this).next().removeClass("active"), e(this).next().slideUp("fast"), e(this).removeClass("active")) : (e(this).next().addClass("active"), e(this).next().slideDown("fast"), e(this).addClass("active"))
                    }), e(".open-variations").on("click", function() {
                        var i = e(this).parent().parent().next();
                        e(i).find(".variation-table").slideToggle({
                            duration: 500,
                            start: function() {
                                e(this).css("display", "flex")
                            }
                        })
                    }), e(".products-list_mobile .open-variations").on("click", function() {
                        var i = e(this).parent().next();
                        e(i).find(".variation-table").slideToggle({
                            duration: 500,
                            start: function() {
                                e(this).css("display", "block")
                            }
                        })
                    }), setTimeout(function() {
                        e(".popup-box").fadeIn("fast")
                    }, 5e3), e(".popup-box .close").on("click", function() {
                        e(".popup-box").fadeOut("fast")
                    }), e(".single-post .page-title").length > 0 && e(window).width() > 1200) {
                    var o = e(".single-post .page-title h1").width(),
                        s = o / 2.25 - 100,
                        n = o / 2.25 - 100;
                    e(".single-post .page-title h1").css("cssText", "width: calc(" + s + "px) !important"), e(".single-post .page-title svg").css("cssText", "margin-left: -" + n + "px !important")
                }
                e(".basket .cart-empty").length > 0 && (e(window).width() > 1200 && e(".basket .cart-empty").parent().css("cssText", "width: 100% !important; margin: 0 auto !important;"), e(window).width() < 1200 && e(".basket .cart-empty").parent().css("cssText", "width: calc(100% - 15px) !important; margin: 0 auto !important;"))
            },
            finalize: function() {}
        }
    }).call(i, t(0))
}, function(e, i, t) {
    var o, s, n;
    ! function(r) {
        "use strict";
        s = [t(0)], void 0 === (n = "function" == typeof(o = r) ? o.apply(i, s) : o) || (e.exports = n)
    }(function(e) {
        "use strict";
        var i = window.Slick || {};
        (i = function() {
            var i = 0;
            return function(t, o) {
                var s, n = this;
                n.defaults = {
                    accessibility: !0,
                    adaptiveHeight: !1,
                    appendArrows: e(t),
                    appendDots: e(t),
                    arrows: !0,
                    asNavFor: null,
                    prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
                    nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
                    autoplay: !1,
                    autoplaySpeed: 3e3,
                    centerMode: !1,
                    centerPadding: "50px",
                    cssEase: "ease",
                    customPaging: function(i, t) {
                        return e('<button type="button" />').text(t + 1)
                    },
                    dots: !1,
                    dotsClass: "slick-dots",
                    draggable: !0,
                    easing: "linear",
                    edgeFriction: .35,
                    fade: !1,
                    focusOnSelect: !1,
                    focusOnChange: !1,
                    infinite: !0,
                    initialSlide: 0,
                    lazyLoad: "ondemand",
                    mobileFirst: !1,
                    pauseOnHover: !0,
                    pauseOnFocus: !0,
                    pauseOnDotsHover: !1,
                    respondTo: "window",
                    responsive: null,
                    rows: 1,
                    rtl: !1,
                    slide: "",
                    slidesPerRow: 1,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    speed: 500,
                    swipe: !0,
                    swipeToSlide: !1,
                    touchMove: !0,
                    touchThreshold: 5,
                    useCSS: !0,
                    useTransform: !0,
                    variableWidth: !1,
                    vertical: !1,
                    verticalSwiping: !1,
                    waitForAnimate: !0,
                    zIndex: 1e3
                }, n.initials = {
                    animating: !1,
                    dragging: !1,
                    autoPlayTimer: null,
                    currentDirection: 0,
                    currentLeft: null,
                    currentSlide: 0,
                    direction: 1,
                    $dots: null,
                    listWidth: null,
                    listHeight: null,
                    loadIndex: 0,
                    $nextArrow: null,
                    $prevArrow: null,
                    scrolling: !1,
                    slideCount: null,
                    slideWidth: null,
                    $slideTrack: null,
                    $slides: null,
                    sliding: !1,
                    slideOffset: 0,
                    swipeLeft: null,
                    swiping: !1,
                    $list: null,
                    touchObject: {},
                    transformsEnabled: !1,
                    unslicked: !1
                }, e.extend(n, n.initials), n.activeBreakpoint = null, n.animType = null, n.animProp = null, n.breakpoints = [], n.breakpointSettings = [], n.cssTransitions = !1, n.focussed = !1, n.interrupted = !1, n.hidden = "hidden", n.paused = !0, n.positionProp = null, n.respondTo = null, n.rowCount = 1, n.shouldClick = !0, n.$slider = e(t), n.$slidesCache = null, n.transformType = null, n.transitionType = null, n.visibilityChange = "visibilitychange", n.windowWidth = 0, n.windowTimer = null, s = e(t).data("slick") || {}, n.options = e.extend({}, n.defaults, o, s), n.currentSlide = n.options.initialSlide, n.originalSettings = n.options, void 0 !== document.mozHidden ? (n.hidden = "mozHidden", n.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (n.hidden = "webkitHidden", n.visibilityChange = "webkitvisibilitychange"), n.autoPlay = e.proxy(n.autoPlay, n), n.autoPlayClear = e.proxy(n.autoPlayClear, n), n.autoPlayIterator = e.proxy(n.autoPlayIterator, n), n.changeSlide = e.proxy(n.changeSlide, n), n.clickHandler = e.proxy(n.clickHandler, n), n.selectHandler = e.proxy(n.selectHandler, n), n.setPosition = e.proxy(n.setPosition, n), n.swipeHandler = e.proxy(n.swipeHandler, n), n.dragHandler = e.proxy(n.dragHandler, n), n.keyHandler = e.proxy(n.keyHandler, n), n.instanceUid = i++, n.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, n.registerBreakpoints(), n.init(!0)
            }
        }()).prototype.activateADA = function() {
            this.$slideTrack.find(".slick-active").attr({
                "aria-hidden": "false"
            }).find("a, input, button, select").attr({
                tabindex: "0"
            })
        }, i.prototype.addSlide = i.prototype.slickAdd = function(i, t, o) {
            var s = this;
            if ("boolean" == typeof t) o = t, t = null;
            else if (t < 0 || t >= s.slideCount) return !1;
            s.unload(), "number" == typeof t ? 0 === t && 0 === s.$slides.length ? e(i).appendTo(s.$slideTrack) : o ? e(i).insertBefore(s.$slides.eq(t)) : e(i).insertAfter(s.$slides.eq(t)) : !0 === o ? e(i).prependTo(s.$slideTrack) : e(i).appendTo(s.$slideTrack), s.$slides = s.$slideTrack.children(this.options.slide), s.$slideTrack.children(this.options.slide).detach(), s.$slideTrack.append(s.$slides), s.$slides.each(function(i, t) {
                e(t).attr("data-slick-index", i)
            }), s.$slidesCache = s.$slides, s.reinit()
        }, i.prototype.animateHeight = function() {
            var e = this;
            if (1 === e.options.slidesToShow && !0 === e.options.adaptiveHeight && !1 === e.options.vertical) {
                var i = e.$slides.eq(e.currentSlide).outerHeight(!0);
                e.$list.animate({
                    height: i
                }, e.options.speed)
            }
        }, i.prototype.animateSlide = function(i, t) {
            var o = {},
                s = this;
            s.animateHeight(), !0 === s.options.rtl && !1 === s.options.vertical && (i = -i), !1 === s.transformsEnabled ? !1 === s.options.vertical ? s.$slideTrack.animate({
                left: i
            }, s.options.speed, s.options.easing, t) : s.$slideTrack.animate({
                top: i
            }, s.options.speed, s.options.easing, t) : !1 === s.cssTransitions ? (!0 === s.options.rtl && (s.currentLeft = -s.currentLeft), e({
                animStart: s.currentLeft
            }).animate({
                animStart: i
            }, {
                duration: s.options.speed,
                easing: s.options.easing,
                step: function(e) {
                    e = Math.ceil(e), !1 === s.options.vertical ? (o[s.animType] = "translate(" + e + "px, 0px)", s.$slideTrack.css(o)) : (o[s.animType] = "translate(0px," + e + "px)", s.$slideTrack.css(o))
                },
                complete: function() {
                    t && t.call()
                }
            })) : (s.applyTransition(), i = Math.ceil(i), !1 === s.options.vertical ? o[s.animType] = "translate3d(" + i + "px, 0px, 0px)" : o[s.animType] = "translate3d(0px," + i + "px, 0px)", s.$slideTrack.css(o), t && setTimeout(function() {
                s.disableTransition(), t.call()
            }, s.options.speed))
        }, i.prototype.getNavTarget = function() {
            var i = this.options.asNavFor;
            return i && null !== i && (i = e(i).not(this.$slider)), i
        }, i.prototype.asNavFor = function(i) {
            var t = this.getNavTarget();
            null !== t && "object" == typeof t && t.each(function() {
                var t = e(this).slick("getSlick");
                t.unslicked || t.slideHandler(i, !0)
            })
        }, i.prototype.applyTransition = function(e) {
            var i = this,
                t = {};
            !1 === i.options.fade ? t[i.transitionType] = i.transformType + " " + i.options.speed + "ms " + i.options.cssEase : t[i.transitionType] = "opacity " + i.options.speed + "ms " + i.options.cssEase, !1 === i.options.fade ? i.$slideTrack.css(t) : i.$slides.eq(e).css(t)
        }, i.prototype.autoPlay = function() {
            var e = this;
            e.autoPlayClear(), e.slideCount > e.options.slidesToShow && (e.autoPlayTimer = setInterval(e.autoPlayIterator, e.options.autoplaySpeed))
        }, i.prototype.autoPlayClear = function() {
            this.autoPlayTimer && clearInterval(this.autoPlayTimer)
        }, i.prototype.autoPlayIterator = function() {
            var e = this,
                i = e.currentSlide + e.options.slidesToScroll;
            e.paused || e.interrupted || e.focussed || (!1 === e.options.infinite && (1 === e.direction && e.currentSlide + 1 === e.slideCount - 1 ? e.direction = 0 : 0 === e.direction && (i = e.currentSlide - e.options.slidesToScroll, e.currentSlide - 1 == 0 && (e.direction = 1))), e.slideHandler(i))
        }, i.prototype.buildArrows = function() {
            var i = this;
            !0 === i.options.arrows && (i.$prevArrow = e(i.options.prevArrow).addClass("slick-arrow"), i.$nextArrow = e(i.options.nextArrow).addClass("slick-arrow"), i.slideCount > i.options.slidesToShow ? (i.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), i.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), i.htmlExpr.test(i.options.prevArrow) && i.$prevArrow.prependTo(i.options.appendArrows), i.htmlExpr.test(i.options.nextArrow) && i.$nextArrow.appendTo(i.options.appendArrows), !0 !== i.options.infinite && i.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : i.$prevArrow.add(i.$nextArrow).addClass("slick-hidden").attr({
                "aria-disabled": "true",
                tabindex: "-1"
            }))
        }, i.prototype.buildDots = function() {
            var i, t, o = this;
            if (!0 === o.options.dots && o.slideCount > o.options.slidesToShow) {
                for (o.$slider.addClass("slick-dotted"), t = e("<ul />").addClass(o.options.dotsClass), i = 0; i <= o.getDotCount(); i += 1) t.append(e("<li />").append(o.options.customPaging.call(this, o, i)));
                o.$dots = t.appendTo(o.options.appendDots), o.$dots.find("li").first().addClass("slick-active")
            }
        }, i.prototype.buildOut = function() {
            var i = this;
            i.$slides = i.$slider.children(i.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), i.slideCount = i.$slides.length, i.$slides.each(function(i, t) {
                e(t).attr("data-slick-index", i).data("originalStyling", e(t).attr("style") || "")
            }), i.$slider.addClass("slick-slider"), i.$slideTrack = 0 === i.slideCount ? e('<div class="slick-track"/>').appendTo(i.$slider) : i.$slides.wrapAll('<div class="slick-track"/>').parent(), i.$list = i.$slideTrack.wrap('<div class="slick-list"/>').parent(), i.$slideTrack.css("opacity", 0), !0 !== i.options.centerMode && !0 !== i.options.swipeToSlide || (i.options.slidesToScroll = 1), e("img[data-lazy]", i.$slider).not("[src]").addClass("slick-loading"), i.setupInfinite(), i.buildArrows(), i.buildDots(), i.updateDots(), i.setSlideClasses("number" == typeof i.currentSlide ? i.currentSlide : 0), !0 === i.options.draggable && i.$list.addClass("draggable")
        }, i.prototype.buildRows = function() {
            var e, i, t, o, s, n, r, l = this;
            if (o = document.createDocumentFragment(), n = l.$slider.children(), l.options.rows > 0) {
                for (r = l.options.slidesPerRow * l.options.rows, s = Math.ceil(n.length / r), e = 0; e < s; e++) {
                    var a = document.createElement("div");
                    for (i = 0; i < l.options.rows; i++) {
                        var d = document.createElement("div");
                        for (t = 0; t < l.options.slidesPerRow; t++) {
                            var c = e * r + (i * l.options.slidesPerRow + t);
                            n.get(c) && d.appendChild(n.get(c))
                        }
                        a.appendChild(d)
                    }
                    o.appendChild(a)
                }
                l.$slider.empty().append(o), l.$slider.children().children().children().css({
                    width: 100 / l.options.slidesPerRow + "%",
                    display: "inline-block"
                })
            }
        }, i.prototype.checkResponsive = function(i, t) {
            var o, s, n, r = this,
                l = !1,
                a = r.$slider.width(),
                d = window.innerWidth || e(window).width();
            if ("window" === r.respondTo ? n = d : "slider" === r.respondTo ? n = a : "min" === r.respondTo && (n = Math.min(d, a)), r.options.responsive && r.options.responsive.length && null !== r.options.responsive) {
                for (o in s = null, r.breakpoints) r.breakpoints.hasOwnProperty(o) && (!1 === r.originalSettings.mobileFirst ? n < r.breakpoints[o] && (s = r.breakpoints[o]) : n > r.breakpoints[o] && (s = r.breakpoints[o]));
                null !== s ? null !== r.activeBreakpoint ? (s !== r.activeBreakpoint || t) && (r.activeBreakpoint = s, "unslick" === r.breakpointSettings[s] ? r.unslick(s) : (r.options = e.extend({}, r.originalSettings, r.breakpointSettings[s]), !0 === i && (r.currentSlide = r.options.initialSlide), r.refresh(i)), l = s) : (r.activeBreakpoint = s, "unslick" === r.breakpointSettings[s] ? r.unslick(s) : (r.options = e.extend({}, r.originalSettings, r.breakpointSettings[s]), !0 === i && (r.currentSlide = r.options.initialSlide), r.refresh(i)), l = s) : null !== r.activeBreakpoint && (r.activeBreakpoint = null, r.options = r.originalSettings, !0 === i && (r.currentSlide = r.options.initialSlide), r.refresh(i), l = s), i || !1 === l || r.$slider.trigger("breakpoint", [r, l])
            }
        }, i.prototype.changeSlide = function(i, t) {
            var o, s, n = this,
                r = e(i.currentTarget);
            switch (r.is("a") && i.preventDefault(), r.is("li") || (r = r.closest("li")), o = n.slideCount % n.options.slidesToScroll != 0 ? 0 : (n.slideCount - n.currentSlide) % n.options.slidesToScroll, i.data.message) {
                case "previous":
                    s = 0 === o ? n.options.slidesToScroll : n.options.slidesToShow - o, n.slideCount > n.options.slidesToShow && n.slideHandler(n.currentSlide - s, !1, t);
                    break;
                case "next":
                    s = 0 === o ? n.options.slidesToScroll : o, n.slideCount > n.options.slidesToShow && n.slideHandler(n.currentSlide + s, !1, t);
                    break;
                case "index":
                    var l = 0 === i.data.index ? 0 : i.data.index || r.index() * n.options.slidesToScroll;
                    n.slideHandler(n.checkNavigable(l), !1, t), r.children().trigger("focus");
                    break;
                default:
                    return
            }
        }, i.prototype.checkNavigable = function(e) {
            var i, t;
            if (t = 0, e > (i = this.getNavigableIndexes())[i.length - 1]) e = i[i.length - 1];
            else
                for (var o in i) {
                    if (e < i[o]) {
                        e = t;
                        break
                    }
                    t = i[o]
                }
            return e
        }, i.prototype.cleanUpEvents = function() {
            var i = this;
            i.options.dots && null !== i.$dots && (e("li", i.$dots).off("click.slick", i.changeSlide).off("mouseenter.slick", e.proxy(i.interrupt, i, !0)).off("mouseleave.slick", e.proxy(i.interrupt, i, !1)), !0 === i.options.accessibility && i.$dots.off("keydown.slick", i.keyHandler)), i.$slider.off("focus.slick blur.slick"), !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow && i.$prevArrow.off("click.slick", i.changeSlide), i.$nextArrow && i.$nextArrow.off("click.slick", i.changeSlide), !0 === i.options.accessibility && (i.$prevArrow && i.$prevArrow.off("keydown.slick", i.keyHandler), i.$nextArrow && i.$nextArrow.off("keydown.slick", i.keyHandler))), i.$list.off("touchstart.slick mousedown.slick", i.swipeHandler), i.$list.off("touchmove.slick mousemove.slick", i.swipeHandler), i.$list.off("touchend.slick mouseup.slick", i.swipeHandler), i.$list.off("touchcancel.slick mouseleave.slick", i.swipeHandler), i.$list.off("click.slick", i.clickHandler), e(document).off(i.visibilityChange, i.visibility), i.cleanUpSlideEvents(), !0 === i.options.accessibility && i.$list.off("keydown.slick", i.keyHandler), !0 === i.options.focusOnSelect && e(i.$slideTrack).children().off("click.slick", i.selectHandler), e(window).off("orientationchange.slick.slick-" + i.instanceUid, i.orientationChange), e(window).off("resize.slick.slick-" + i.instanceUid, i.resize), e("[draggable!=true]", i.$slideTrack).off("dragstart", i.preventDefault), e(window).off("load.slick.slick-" + i.instanceUid, i.setPosition)
        }, i.prototype.cleanUpSlideEvents = function() {
            var i = this;
            i.$list.off("mouseenter.slick", e.proxy(i.interrupt, i, !0)), i.$list.off("mouseleave.slick", e.proxy(i.interrupt, i, !1))
        }, i.prototype.cleanUpRows = function() {
            var e, i = this;
            i.options.rows > 0 && ((e = i.$slides.children().children()).removeAttr("style"), i.$slider.empty().append(e))
        }, i.prototype.clickHandler = function(e) {
            !1 === this.shouldClick && (e.stopImmediatePropagation(), e.stopPropagation(), e.preventDefault())
        }, i.prototype.destroy = function(i) {
            var t = this;
            t.autoPlayClear(), t.touchObject = {}, t.cleanUpEvents(), e(".slick-cloned", t.$slider).detach(), t.$dots && t.$dots.remove(), t.$prevArrow && t.$prevArrow.length && (t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove()), t.$nextArrow && t.$nextArrow.length && (t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove()), t.$slides && (t.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() {
                e(this).attr("style", e(this).data("originalStyling"))
            }), t.$slideTrack.children(this.options.slide).detach(), t.$slideTrack.detach(), t.$list.detach(), t.$slider.append(t.$slides)), t.cleanUpRows(), t.$slider.removeClass("slick-slider"), t.$slider.removeClass("slick-initialized"), t.$slider.removeClass("slick-dotted"), t.unslicked = !0, i || t.$slider.trigger("destroy", [t])
        }, i.prototype.disableTransition = function(e) {
            var i = this,
                t = {};
            t[i.transitionType] = "", !1 === i.options.fade ? i.$slideTrack.css(t) : i.$slides.eq(e).css(t)
        }, i.prototype.fadeSlide = function(e, i) {
            var t = this;
            !1 === t.cssTransitions ? (t.$slides.eq(e).css({
                zIndex: t.options.zIndex
            }), t.$slides.eq(e).animate({
                opacity: 1
            }, t.options.speed, t.options.easing, i)) : (t.applyTransition(e), t.$slides.eq(e).css({
                opacity: 1,
                zIndex: t.options.zIndex
            }), i && setTimeout(function() {
                t.disableTransition(e), i.call()
            }, t.options.speed))
        }, i.prototype.fadeSlideOut = function(e) {
            var i = this;
            !1 === i.cssTransitions ? i.$slides.eq(e).animate({
                opacity: 0,
                zIndex: i.options.zIndex - 2
            }, i.options.speed, i.options.easing) : (i.applyTransition(e), i.$slides.eq(e).css({
                opacity: 0,
                zIndex: i.options.zIndex - 2
            }))
        }, i.prototype.filterSlides = i.prototype.slickFilter = function(e) {
            var i = this;
            null !== e && (i.$slidesCache = i.$slides, i.unload(), i.$slideTrack.children(this.options.slide).detach(), i.$slidesCache.filter(e).appendTo(i.$slideTrack), i.reinit())
        }, i.prototype.focusHandler = function() {
            var i = this;
            i.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*", function(t) {
                t.stopImmediatePropagation();
                var o = e(this);
                setTimeout(function() {
                    i.options.pauseOnFocus && (i.focussed = o.is(":focus"), i.autoPlay())
                }, 0)
            })
        }, i.prototype.getCurrent = i.prototype.slickCurrentSlide = function() {
            return this.currentSlide
        }, i.prototype.getDotCount = function() {
            var e = this,
                i = 0,
                t = 0,
                o = 0;
            if (!0 === e.options.infinite)
                if (e.slideCount <= e.options.slidesToShow) ++o;
                else
                    for (; i < e.slideCount;) ++o, i = t + e.options.slidesToScroll, t += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
            else if (!0 === e.options.centerMode) o = e.slideCount;
            else if (e.options.asNavFor)
                for (; i < e.slideCount;) ++o, i = t + e.options.slidesToScroll, t += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
            else o = 1 + Math.ceil((e.slideCount - e.options.slidesToShow) / e.options.slidesToScroll);
            return o - 1
        }, i.prototype.getLeft = function(e) {
            var i, t, o, s, n = this,
                r = 0;
            return n.slideOffset = 0, t = n.$slides.first().outerHeight(!0), !0 === n.options.infinite ? (n.slideCount > n.options.slidesToShow && (n.slideOffset = n.slideWidth * n.options.slidesToShow * -1, s = -1, !0 === n.options.vertical && !0 === n.options.centerMode && (2 === n.options.slidesToShow ? s = -1.5 : 1 === n.options.slidesToShow && (s = -2)), r = t * n.options.slidesToShow * s), n.slideCount % n.options.slidesToScroll != 0 && e + n.options.slidesToScroll > n.slideCount && n.slideCount > n.options.slidesToShow && (e > n.slideCount ? (n.slideOffset = (n.options.slidesToShow - (e - n.slideCount)) * n.slideWidth * -1, r = (n.options.slidesToShow - (e - n.slideCount)) * t * -1) : (n.slideOffset = n.slideCount % n.options.slidesToScroll * n.slideWidth * -1, r = n.slideCount % n.options.slidesToScroll * t * -1))) : e + n.options.slidesToShow > n.slideCount && (n.slideOffset = (e + n.options.slidesToShow - n.slideCount) * n.slideWidth, r = (e + n.options.slidesToShow - n.slideCount) * t), n.slideCount <= n.options.slidesToShow && (n.slideOffset = 0, r = 0), !0 === n.options.centerMode && n.slideCount <= n.options.slidesToShow ? n.slideOffset = n.slideWidth * Math.floor(n.options.slidesToShow) / 2 - n.slideWidth * n.slideCount / 2 : !0 === n.options.centerMode && !0 === n.options.infinite ? n.slideOffset += n.slideWidth * Math.floor(n.options.slidesToShow / 2) - n.slideWidth : !0 === n.options.centerMode && (n.slideOffset = 0, n.slideOffset += n.slideWidth * Math.floor(n.options.slidesToShow / 2)), i = !1 === n.options.vertical ? e * n.slideWidth * -1 + n.slideOffset : e * t * -1 + r, !0 === n.options.variableWidth && (o = n.slideCount <= n.options.slidesToShow || !1 === n.options.infinite ? n.$slideTrack.children(".slick-slide").eq(e) : n.$slideTrack.children(".slick-slide").eq(e + n.options.slidesToShow), i = !0 === n.options.rtl ? o[0] ? -1 * (n.$slideTrack.width() - o[0].offsetLeft - o.width()) : 0 : o[0] ? -1 * o[0].offsetLeft : 0, !0 === n.options.centerMode && (o = n.slideCount <= n.options.slidesToShow || !1 === n.options.infinite ? n.$slideTrack.children(".slick-slide").eq(e) : n.$slideTrack.children(".slick-slide").eq(e + n.options.slidesToShow + 1), i = !0 === n.options.rtl ? o[0] ? -1 * (n.$slideTrack.width() - o[0].offsetLeft - o.width()) : 0 : o[0] ? -1 * o[0].offsetLeft : 0, i += (n.$list.width() - o.outerWidth()) / 2)), i
        }, i.prototype.getOption = i.prototype.slickGetOption = function(e) {
            return this.options[e]
        }, i.prototype.getNavigableIndexes = function() {
            var e, i = this,
                t = 0,
                o = 0,
                s = [];
            for (!1 === i.options.infinite ? e = i.slideCount : (t = -1 * i.options.slidesToScroll, o = -1 * i.options.slidesToScroll, e = 2 * i.slideCount); t < e;) s.push(t), t = o + i.options.slidesToScroll, o += i.options.slidesToScroll <= i.options.slidesToShow ? i.options.slidesToScroll : i.options.slidesToShow;
            return s
        }, i.prototype.getSlick = function() {
            return this
        }, i.prototype.getSlideCount = function() {
            var i, t, o = this;
            return t = !0 === o.options.centerMode ? o.slideWidth * Math.floor(o.options.slidesToShow / 2) : 0, !0 === o.options.swipeToSlide ? (o.$slideTrack.find(".slick-slide").each(function(s, n) {
                if (n.offsetLeft - t + e(n).outerWidth() / 2 > -1 * o.swipeLeft) return i = n, !1
            }), Math.abs(e(i).attr("data-slick-index") - o.currentSlide) || 1) : o.options.slidesToScroll
        }, i.prototype.goTo = i.prototype.slickGoTo = function(e, i) {
            this.changeSlide({
                data: {
                    message: "index",
                    index: parseInt(e)
                }
            }, i)
        }, i.prototype.init = function(i) {
            var t = this;
            e(t.$slider).hasClass("slick-initialized") || (e(t.$slider).addClass("slick-initialized"), t.buildRows(), t.buildOut(), t.setProps(), t.startLoad(), t.loadSlider(), t.initializeEvents(), t.updateArrows(), t.updateDots(), t.checkResponsive(!0), t.focusHandler()), i && t.$slider.trigger("init", [t]), !0 === t.options.accessibility && t.initADA(), t.options.autoplay && (t.paused = !1, t.autoPlay())
        }, i.prototype.initADA = function() {
            var i = this,
                t = Math.ceil(i.slideCount / i.options.slidesToShow),
                o = i.getNavigableIndexes().filter(function(e) {
                    return e >= 0 && e < i.slideCount
                });
            i.$slides.add(i.$slideTrack.find(".slick-cloned")).attr({
                "aria-hidden": "true",
                tabindex: "-1"
            }).find("a, input, button, select").attr({
                tabindex: "-1"
            }), null !== i.$dots && (i.$slides.not(i.$slideTrack.find(".slick-cloned")).each(function(t) {
                var s = o.indexOf(t);
                if (e(this).attr({
                        role: "tabpanel",
                        id: "slick-slide" + i.instanceUid + t,
                        tabindex: -1
                    }), -1 !== s) {
                    var n = "slick-slide-control" + i.instanceUid + s;
                    e("#" + n).length && e(this).attr({
                        "aria-describedby": n
                    })
                }
            }), i.$dots.attr("role", "tablist").find("li").each(function(s) {
                var n = o[s];
                e(this).attr({
                    role: "presentation"
                }), e(this).find("button").first().attr({
                    role: "tab",
                    id: "slick-slide-control" + i.instanceUid + s,
                    "aria-controls": "slick-slide" + i.instanceUid + n,
                    "aria-label": s + 1 + " of " + t,
                    "aria-selected": null,
                    tabindex: "-1"
                })
            }).eq(i.currentSlide).find("button").attr({
                "aria-selected": "true",
                tabindex: "0"
            }).end());
            for (var s = i.currentSlide, n = s + i.options.slidesToShow; s < n; s++) i.options.focusOnChange ? i.$slides.eq(s).attr({
                tabindex: "0"
            }) : i.$slides.eq(s).removeAttr("tabindex");
            i.activateADA()
        }, i.prototype.initArrowEvents = function() {
            var e = this;
            !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.off("click.slick").on("click.slick", {
                message: "previous"
            }, e.changeSlide), e.$nextArrow.off("click.slick").on("click.slick", {
                message: "next"
            }, e.changeSlide), !0 === e.options.accessibility && (e.$prevArrow.on("keydown.slick", e.keyHandler), e.$nextArrow.on("keydown.slick", e.keyHandler)))
        }, i.prototype.initDotEvents = function() {
            var i = this;
            !0 === i.options.dots && i.slideCount > i.options.slidesToShow && (e("li", i.$dots).on("click.slick", {
                message: "index"
            }, i.changeSlide), !0 === i.options.accessibility && i.$dots.on("keydown.slick", i.keyHandler)), !0 === i.options.dots && !0 === i.options.pauseOnDotsHover && i.slideCount > i.options.slidesToShow && e("li", i.$dots).on("mouseenter.slick", e.proxy(i.interrupt, i, !0)).on("mouseleave.slick", e.proxy(i.interrupt, i, !1))
        }, i.prototype.initSlideEvents = function() {
            var i = this;
            i.options.pauseOnHover && (i.$list.on("mouseenter.slick", e.proxy(i.interrupt, i, !0)), i.$list.on("mouseleave.slick", e.proxy(i.interrupt, i, !1)))
        }, i.prototype.initializeEvents = function() {
            var i = this;
            i.initArrowEvents(), i.initDotEvents(), i.initSlideEvents(), i.$list.on("touchstart.slick mousedown.slick", {
                action: "start"
            }, i.swipeHandler), i.$list.on("touchmove.slick mousemove.slick", {
                action: "move"
            }, i.swipeHandler), i.$list.on("touchend.slick mouseup.slick", {
                action: "end"
            }, i.swipeHandler), i.$list.on("touchcancel.slick mouseleave.slick", {
                action: "end"
            }, i.swipeHandler), i.$list.on("click.slick", i.clickHandler), e(document).on(i.visibilityChange, e.proxy(i.visibility, i)), !0 === i.options.accessibility && i.$list.on("keydown.slick", i.keyHandler), !0 === i.options.focusOnSelect && e(i.$slideTrack).children().on("click.slick", i.selectHandler), e(window).on("orientationchange.slick.slick-" + i.instanceUid, e.proxy(i.orientationChange, i)), e(window).on("resize.slick.slick-" + i.instanceUid, e.proxy(i.resize, i)), e("[draggable!=true]", i.$slideTrack).on("dragstart", i.preventDefault), e(window).on("load.slick.slick-" + i.instanceUid, i.setPosition), e(i.setPosition)
        }, i.prototype.initUI = function() {
            var e = this;
            !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.show(), e.$nextArrow.show()), !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.show()
        }, i.prototype.keyHandler = function(e) {
            var i = this;
            e.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === e.keyCode && !0 === i.options.accessibility ? i.changeSlide({
                data: {
                    message: !0 === i.options.rtl ? "next" : "previous"
                }
            }) : 39 === e.keyCode && !0 === i.options.accessibility && i.changeSlide({
                data: {
                    message: !0 === i.options.rtl ? "previous" : "next"
                }
            }))
        }, i.prototype.lazyLoad = function() {
            var i, t, o, s = this;

            function n(i) {
                e("img[data-lazy]", i).each(function() {
                    var i = e(this),
                        t = e(this).attr("data-lazy"),
                        o = e(this).attr("data-srcset"),
                        n = e(this).attr("data-sizes") || s.$slider.attr("data-sizes"),
                        r = document.createElement("img");
                    r.onload = function() {
                        i.animate({
                            opacity: 0
                        }, 100, function() {
                            o && (i.attr("srcset", o), n && i.attr("sizes", n)), i.attr("src", t).animate({
                                opacity: 1
                            }, 200, function() {
                                i.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")
                            }), s.$slider.trigger("lazyLoaded", [s, i, t])
                        })
                    }, r.onerror = function() {
                        i.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), s.$slider.trigger("lazyLoadError", [s, i, t])
                    }, r.src = t
                })
            }
            if (!0 === s.options.centerMode ? !0 === s.options.infinite ? o = (t = s.currentSlide + (s.options.slidesToShow / 2 + 1)) + s.options.slidesToShow + 2 : (t = Math.max(0, s.currentSlide - (s.options.slidesToShow / 2 + 1)), o = s.options.slidesToShow / 2 + 1 + 2 + s.currentSlide) : (t = s.options.infinite ? s.options.slidesToShow + s.currentSlide : s.currentSlide, o = Math.ceil(t + s.options.slidesToShow), !0 === s.options.fade && (t > 0 && t--, o <= s.slideCount && o++)), i = s.$slider.find(".slick-slide").slice(t, o), "anticipated" === s.options.lazyLoad)
                for (var r = t - 1, l = o, a = s.$slider.find(".slick-slide"), d = 0; d < s.options.slidesToScroll; d++) r < 0 && (r = s.slideCount - 1), i = (i = i.add(a.eq(r))).add(a.eq(l)), r--, l++;
            n(i), s.slideCount <= s.options.slidesToShow ? n(s.$slider.find(".slick-slide")) : s.currentSlide >= s.slideCount - s.options.slidesToShow ? n(s.$slider.find(".slick-cloned").slice(0, s.options.slidesToShow)) : 0 === s.currentSlide && n(s.$slider.find(".slick-cloned").slice(-1 * s.options.slidesToShow))
        }, i.prototype.loadSlider = function() {
            var e = this;
            e.setPosition(), e.$slideTrack.css({
                opacity: 1
            }), e.$slider.removeClass("slick-loading"), e.initUI(), "progressive" === e.options.lazyLoad && e.progressiveLazyLoad()
        }, i.prototype.next = i.prototype.slickNext = function() {
            this.changeSlide({
                data: {
                    message: "next"
                }
            })
        }, i.prototype.orientationChange = function() {
            this.checkResponsive(), this.setPosition()
        }, i.prototype.pause = i.prototype.slickPause = function() {
            this.autoPlayClear(), this.paused = !0
        }, i.prototype.play = i.prototype.slickPlay = function() {
            var e = this;
            e.autoPlay(), e.options.autoplay = !0, e.paused = !1, e.focussed = !1, e.interrupted = !1
        }, i.prototype.postSlide = function(i) {
            var t = this;
            t.unslicked || (t.$slider.trigger("afterChange", [t, i]), t.animating = !1, t.slideCount > t.options.slidesToShow && t.setPosition(), t.swipeLeft = null, t.options.autoplay && t.autoPlay(), !0 === t.options.accessibility && (t.initADA(), t.options.focusOnChange && e(t.$slides.get(t.currentSlide)).attr("tabindex", 0).focus()))
        }, i.prototype.prev = i.prototype.slickPrev = function() {
            this.changeSlide({
                data: {
                    message: "previous"
                }
            })
        }, i.prototype.preventDefault = function(e) {
            e.preventDefault()
        }, i.prototype.progressiveLazyLoad = function(i) {
            i = i || 1;
            var t, o, s, n, r, l = this,
                a = e("img[data-lazy]", l.$slider);
            a.length ? (t = a.first(), o = t.attr("data-lazy"), s = t.attr("data-srcset"), n = t.attr("data-sizes") || l.$slider.attr("data-sizes"), (r = document.createElement("img")).onload = function() {
                s && (t.attr("srcset", s), n && t.attr("sizes", n)), t.attr("src", o).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"), !0 === l.options.adaptiveHeight && l.setPosition(), l.$slider.trigger("lazyLoaded", [l, t, o]), l.progressiveLazyLoad()
            }, r.onerror = function() {
                i < 3 ? setTimeout(function() {
                    l.progressiveLazyLoad(i + 1)
                }, 500) : (t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), l.$slider.trigger("lazyLoadError", [l, t, o]), l.progressiveLazyLoad())
            }, r.src = o) : l.$slider.trigger("allImagesLoaded", [l])
        }, i.prototype.refresh = function(i) {
            var t, o, s = this;
            o = s.slideCount - s.options.slidesToShow, !s.options.infinite && s.currentSlide > o && (s.currentSlide = o), s.slideCount <= s.options.slidesToShow && (s.currentSlide = 0), t = s.currentSlide, s.destroy(!0), e.extend(s, s.initials, {
                currentSlide: t
            }), s.init(), i || s.changeSlide({
                data: {
                    message: "index",
                    index: t
                }
            }, !1)
        }, i.prototype.registerBreakpoints = function() {
            var i, t, o, s = this,
                n = s.options.responsive || null;
            if ("array" === e.type(n) && n.length) {
                for (i in s.respondTo = s.options.respondTo || "window", n)
                    if (o = s.breakpoints.length - 1, n.hasOwnProperty(i)) {
                        for (t = n[i].breakpoint; o >= 0;) s.breakpoints[o] && s.breakpoints[o] === t && s.breakpoints.splice(o, 1), o--;
                        s.breakpoints.push(t), s.breakpointSettings[t] = n[i].settings
                    } s.breakpoints.sort(function(e, i) {
                    return s.options.mobileFirst ? e - i : i - e
                })
            }
        }, i.prototype.reinit = function() {
            var i = this;
            i.$slides = i.$slideTrack.children(i.options.slide).addClass("slick-slide"), i.slideCount = i.$slides.length, i.currentSlide >= i.slideCount && 0 !== i.currentSlide && (i.currentSlide = i.currentSlide - i.options.slidesToScroll), i.slideCount <= i.options.slidesToShow && (i.currentSlide = 0), i.registerBreakpoints(), i.setProps(), i.setupInfinite(), i.buildArrows(), i.updateArrows(), i.initArrowEvents(), i.buildDots(), i.updateDots(), i.initDotEvents(), i.cleanUpSlideEvents(), i.initSlideEvents(), i.checkResponsive(!1, !0), !0 === i.options.focusOnSelect && e(i.$slideTrack).children().on("click.slick", i.selectHandler), i.setSlideClasses("number" == typeof i.currentSlide ? i.currentSlide : 0), i.setPosition(), i.focusHandler(), i.paused = !i.options.autoplay, i.autoPlay(), i.$slider.trigger("reInit", [i])
        }, i.prototype.resize = function() {
            var i = this;
            e(window).width() !== i.windowWidth && (clearTimeout(i.windowDelay), i.windowDelay = window.setTimeout(function() {
                i.windowWidth = e(window).width(), i.checkResponsive(), i.unslicked || i.setPosition()
            }, 50))
        }, i.prototype.removeSlide = i.prototype.slickRemove = function(e, i, t) {
            var o = this;
            if (e = "boolean" == typeof e ? !0 === (i = e) ? 0 : o.slideCount - 1 : !0 === i ? --e : e, o.slideCount < 1 || e < 0 || e > o.slideCount - 1) return !1;
            o.unload(), !0 === t ? o.$slideTrack.children().remove() : o.$slideTrack.children(this.options.slide).eq(e).remove(), o.$slides = o.$slideTrack.children(this.options.slide), o.$slideTrack.children(this.options.slide).detach(), o.$slideTrack.append(o.$slides), o.$slidesCache = o.$slides, o.reinit()
        }, i.prototype.setCSS = function(e) {
            var i, t, o = this,
                s = {};
            !0 === o.options.rtl && (e = -e), i = "left" == o.positionProp ? Math.ceil(e) + "px" : "0px", t = "top" == o.positionProp ? Math.ceil(e) + "px" : "0px", s[o.positionProp] = e, !1 === o.transformsEnabled ? o.$slideTrack.css(s) : (s = {}, !1 === o.cssTransitions ? (s[o.animType] = "translate(" + i + ", " + t + ")", o.$slideTrack.css(s)) : (s[o.animType] = "translate3d(" + i + ", " + t + ", 0px)", o.$slideTrack.css(s)))
        }, i.prototype.setDimensions = function() {
            var e = this;
            !1 === e.options.vertical ? !0 === e.options.centerMode && e.$list.css({
                padding: "0px " + e.options.centerPadding
            }) : (e.$list.height(e.$slides.first().outerHeight(!0) * e.options.slidesToShow), !0 === e.options.centerMode && e.$list.css({
                padding: e.options.centerPadding + " 0px"
            })), e.listWidth = e.$list.width(), e.listHeight = e.$list.height(), !1 === e.options.vertical && !1 === e.options.variableWidth ? (e.slideWidth = Math.ceil(e.listWidth / e.options.slidesToShow), e.$slideTrack.width(Math.ceil(e.slideWidth * e.$slideTrack.children(".slick-slide").length))) : !0 === e.options.variableWidth ? e.$slideTrack.width(5e3 * e.slideCount) : (e.slideWidth = Math.ceil(e.listWidth), e.$slideTrack.height(Math.ceil(e.$slides.first().outerHeight(!0) * e.$slideTrack.children(".slick-slide").length)));
            var i = e.$slides.first().outerWidth(!0) - e.$slides.first().width();
            !1 === e.options.variableWidth && e.$slideTrack.children(".slick-slide").width(e.slideWidth - i)
        }, i.prototype.setFade = function() {
            var i, t = this;
            t.$slides.each(function(o, s) {
                i = t.slideWidth * o * -1, !0 === t.options.rtl ? e(s).css({
                    position: "relative",
                    right: i,
                    top: 0,
                    zIndex: t.options.zIndex - 2,
                    opacity: 0
                }) : e(s).css({
                    position: "relative",
                    left: i,
                    top: 0,
                    zIndex: t.options.zIndex - 2,
                    opacity: 0
                })
            }), t.$slides.eq(t.currentSlide).css({
                zIndex: t.options.zIndex - 1,
                opacity: 1
            })
        }, i.prototype.setHeight = function() {
            var e = this;
            if (1 === e.options.slidesToShow && !0 === e.options.adaptiveHeight && !1 === e.options.vertical) {
                var i = e.$slides.eq(e.currentSlide).outerHeight(!0);
                e.$list.css("height", i)
            }
        }, i.prototype.setOption = i.prototype.slickSetOption = function() {
            var i, t, o, s, n, r = this,
                l = !1;
            if ("object" === e.type(arguments[0]) ? (o = arguments[0], l = arguments[1], n = "multiple") : "string" === e.type(arguments[0]) && (o = arguments[0], s = arguments[1], l = arguments[2], "responsive" === arguments[0] && "array" === e.type(arguments[1]) ? n = "responsive" : void 0 !== arguments[1] && (n = "single")), "single" === n) r.options[o] = s;
            else if ("multiple" === n) e.each(o, function(e, i) {
                r.options[e] = i
            });
            else if ("responsive" === n)
                for (t in s)
                    if ("array" !== e.type(r.options.responsive)) r.options.responsive = [s[t]];
                    else {
                        for (i = r.options.responsive.length - 1; i >= 0;) r.options.responsive[i].breakpoint === s[t].breakpoint && r.options.responsive.splice(i, 1), i--;
                        r.options.responsive.push(s[t])
                    } l && (r.unload(), r.reinit())
        }, i.prototype.setPosition = function() {
            var e = this;
            e.setDimensions(), e.setHeight(), !1 === e.options.fade ? e.setCSS(e.getLeft(e.currentSlide)) : e.setFade(), e.$slider.trigger("setPosition", [e])
        }, i.prototype.setProps = function() {
            var e = this,
                i = document.body.style;
            e.positionProp = !0 === e.options.vertical ? "top" : "left", "top" === e.positionProp ? e.$slider.addClass("slick-vertical") : e.$slider.removeClass("slick-vertical"), void 0 === i.WebkitTransition && void 0 === i.MozTransition && void 0 === i.msTransition || !0 === e.options.useCSS && (e.cssTransitions = !0), e.options.fade && ("number" == typeof e.options.zIndex ? e.options.zIndex < 3 && (e.options.zIndex = 3) : e.options.zIndex = e.defaults.zIndex), void 0 !== i.OTransform && (e.animType = "OTransform", e.transformType = "-o-transform", e.transitionType = "OTransition", void 0 === i.perspectiveProperty && void 0 === i.webkitPerspective && (e.animType = !1)), void 0 !== i.MozTransform && (e.animType = "MozTransform", e.transformType = "-moz-transform", e.transitionType = "MozTransition", void 0 === i.perspectiveProperty && void 0 === i.MozPerspective && (e.animType = !1)), void 0 !== i.webkitTransform && (e.animType = "webkitTransform", e.transformType = "-webkit-transform", e.transitionType = "webkitTransition", void 0 === i.perspectiveProperty && void 0 === i.webkitPerspective && (e.animType = !1)), void 0 !== i.msTransform && (e.animType = "msTransform", e.transformType = "-ms-transform", e.transitionType = "msTransition", void 0 === i.msTransform && (e.animType = !1)), void 0 !== i.transform && !1 !== e.animType && (e.animType = "transform", e.transformType = "transform", e.transitionType = "transition"), e.transformsEnabled = e.options.useTransform && null !== e.animType && !1 !== e.animType
        }, i.prototype.setSlideClasses = function(e) {
            var i, t, o, s, n = this;
            if (t = n.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), n.$slides.eq(e).addClass("slick-current"), !0 === n.options.centerMode) {
                var r = n.options.slidesToShow % 2 == 0 ? 1 : 0;
                i = Math.floor(n.options.slidesToShow / 2), !0 === n.options.infinite && (e >= i && e <= n.slideCount - 1 - i ? n.$slides.slice(e - i + r, e + i + 1).addClass("slick-active").attr("aria-hidden", "false") : (o = n.options.slidesToShow + e, t.slice(o - i + 1 + r, o + i + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === e ? t.eq(t.length - 1 - n.options.slidesToShow).addClass("slick-center") : e === n.slideCount - 1 && t.eq(n.options.slidesToShow).addClass("slick-center")), n.$slides.eq(e).addClass("slick-center")
            } else e >= 0 && e <= n.slideCount - n.options.slidesToShow ? n.$slides.slice(e, e + n.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : t.length <= n.options.slidesToShow ? t.addClass("slick-active").attr("aria-hidden", "false") : (s = n.slideCount % n.options.slidesToShow, o = !0 === n.options.infinite ? n.options.slidesToShow + e : e, n.options.slidesToShow == n.options.slidesToScroll && n.slideCount - e < n.options.slidesToShow ? t.slice(o - (n.options.slidesToShow - s), o + s).addClass("slick-active").attr("aria-hidden", "false") : t.slice(o, o + n.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false"));
            "ondemand" !== n.options.lazyLoad && "anticipated" !== n.options.lazyLoad || n.lazyLoad()
        }, i.prototype.setupInfinite = function() {
            var i, t, o, s = this;
            if (!0 === s.options.fade && (s.options.centerMode = !1), !0 === s.options.infinite && !1 === s.options.fade && (t = null, s.slideCount > s.options.slidesToShow)) {
                for (o = !0 === s.options.centerMode ? s.options.slidesToShow + 1 : s.options.slidesToShow, i = s.slideCount; i > s.slideCount - o; i -= 1) t = i - 1, e(s.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t - s.slideCount).prependTo(s.$slideTrack).addClass("slick-cloned");
                for (i = 0; i < o + s.slideCount; i += 1) t = i, e(s.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t + s.slideCount).appendTo(s.$slideTrack).addClass("slick-cloned");
                s.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
                    e(this).attr("id", "")
                })
            }
        }, i.prototype.interrupt = function(e) {
            e || this.autoPlay(), this.interrupted = e
        }, i.prototype.selectHandler = function(i) {
            var t = this,
                o = e(i.target).is(".slick-slide") ? e(i.target) : e(i.target).parents(".slick-slide"),
                s = parseInt(o.attr("data-slick-index"));
            s || (s = 0), t.slideCount <= t.options.slidesToShow ? t.slideHandler(s, !1, !0) : t.slideHandler(s)
        }, i.prototype.slideHandler = function(e, i, t) {
            var o, s, n, r, l, a, d = this;
            if (i = i || !1, !(!0 === d.animating && !0 === d.options.waitForAnimate || !0 === d.options.fade && d.currentSlide === e))
                if (!1 === i && d.asNavFor(e), o = e, l = d.getLeft(o), r = d.getLeft(d.currentSlide), d.currentLeft = null === d.swipeLeft ? r : d.swipeLeft, !1 === d.options.infinite && !1 === d.options.centerMode && (e < 0 || e > d.getDotCount() * d.options.slidesToScroll)) !1 === d.options.fade && (o = d.currentSlide, !0 !== t && d.slideCount > d.options.slidesToShow ? d.animateSlide(r, function() {
                    d.postSlide(o)
                }) : d.postSlide(o));
                else if (!1 === d.options.infinite && !0 === d.options.centerMode && (e < 0 || e > d.slideCount - d.options.slidesToScroll)) !1 === d.options.fade && (o = d.currentSlide, !0 !== t && d.slideCount > d.options.slidesToShow ? d.animateSlide(r, function() {
                d.postSlide(o)
            }) : d.postSlide(o));
            else {
                if (d.options.autoplay && clearInterval(d.autoPlayTimer), s = o < 0 ? d.slideCount % d.options.slidesToScroll != 0 ? d.slideCount - d.slideCount % d.options.slidesToScroll : d.slideCount + o : o >= d.slideCount ? d.slideCount % d.options.slidesToScroll != 0 ? 0 : o - d.slideCount : o, d.animating = !0, d.$slider.trigger("beforeChange", [d, d.currentSlide, s]), n = d.currentSlide, d.currentSlide = s, d.setSlideClasses(d.currentSlide), d.options.asNavFor && (a = (a = d.getNavTarget()).slick("getSlick")).slideCount <= a.options.slidesToShow && a.setSlideClasses(d.currentSlide), d.updateDots(), d.updateArrows(), !0 === d.options.fade) return !0 !== t ? (d.fadeSlideOut(n), d.fadeSlide(s, function() {
                    d.postSlide(s)
                })) : d.postSlide(s), void d.animateHeight();
                !0 !== t && d.slideCount > d.options.slidesToShow ? d.animateSlide(l, function() {
                    d.postSlide(s)
                }) : d.postSlide(s)
            }
        }, i.prototype.startLoad = function() {
            var e = this;
            !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.hide(), e.$nextArrow.hide()), !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.hide(), e.$slider.addClass("slick-loading")
        }, i.prototype.swipeDirection = function() {
            var e, i, t, o, s = this;
            return e = s.touchObject.startX - s.touchObject.curX, i = s.touchObject.startY - s.touchObject.curY, t = Math.atan2(i, e), (o = Math.round(180 * t / Math.PI)) < 0 && (o = 360 - Math.abs(o)), o <= 45 && o >= 0 ? !1 === s.options.rtl ? "left" : "right" : o <= 360 && o >= 315 ? !1 === s.options.rtl ? "left" : "right" : o >= 135 && o <= 225 ? !1 === s.options.rtl ? "right" : "left" : !0 === s.options.verticalSwiping ? o >= 35 && o <= 135 ? "down" : "up" : "vertical"
        }, i.prototype.swipeEnd = function(e) {
            var i, t, o = this;
            if (o.dragging = !1, o.swiping = !1, o.scrolling) return o.scrolling = !1, !1;
            if (o.interrupted = !1, o.shouldClick = !(o.touchObject.swipeLength > 10), void 0 === o.touchObject.curX) return !1;
            if (!0 === o.touchObject.edgeHit && o.$slider.trigger("edge", [o, o.swipeDirection()]), o.touchObject.swipeLength >= o.touchObject.minSwipe) {
                switch (t = o.swipeDirection()) {
                    case "left":
                    case "down":
                        i = o.options.swipeToSlide ? o.checkNavigable(o.currentSlide + o.getSlideCount()) : o.currentSlide + o.getSlideCount(), o.currentDirection = 0;
                        break;
                    case "right":
                    case "up":
                        i = o.options.swipeToSlide ? o.checkNavigable(o.currentSlide - o.getSlideCount()) : o.currentSlide - o.getSlideCount(), o.currentDirection = 1
                }
                "vertical" != t && (o.slideHandler(i), o.touchObject = {}, o.$slider.trigger("swipe", [o, t]))
            } else o.touchObject.startX !== o.touchObject.curX && (o.slideHandler(o.currentSlide), o.touchObject = {})
        }, i.prototype.swipeHandler = function(e) {
            var i = this;
            if (!(!1 === i.options.swipe || "ontouchend" in document && !1 === i.options.swipe || !1 === i.options.draggable && -1 !== e.type.indexOf("mouse"))) switch (i.touchObject.fingerCount = e.originalEvent && void 0 !== e.originalEvent.touches ? e.originalEvent.touches.length : 1, i.touchObject.minSwipe = i.listWidth / i.options.touchThreshold, !0 === i.options.verticalSwiping && (i.touchObject.minSwipe = i.listHeight / i.options.touchThreshold), e.data.action) {
                case "start":
                    i.swipeStart(e);
                    break;
                case "move":
                    i.swipeMove(e);
                    break;
                case "end":
                    i.swipeEnd(e)
            }
        }, i.prototype.swipeMove = function(e) {
            var i, t, o, s, n, r, l = this;
            return n = void 0 !== e.originalEvent ? e.originalEvent.touches : null, !(!l.dragging || l.scrolling || n && 1 !== n.length) && (i = l.getLeft(l.currentSlide), l.touchObject.curX = void 0 !== n ? n[0].pageX : e.clientX, l.touchObject.curY = void 0 !== n ? n[0].pageY : e.clientY, l.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(l.touchObject.curX - l.touchObject.startX, 2))), r = Math.round(Math.sqrt(Math.pow(l.touchObject.curY - l.touchObject.startY, 2))), !l.options.verticalSwiping && !l.swiping && r > 4 ? (l.scrolling = !0, !1) : (!0 === l.options.verticalSwiping && (l.touchObject.swipeLength = r), t = l.swipeDirection(), void 0 !== e.originalEvent && l.touchObject.swipeLength > 4 && (l.swiping = !0, e.preventDefault()), s = (!1 === l.options.rtl ? 1 : -1) * (l.touchObject.curX > l.touchObject.startX ? 1 : -1), !0 === l.options.verticalSwiping && (s = l.touchObject.curY > l.touchObject.startY ? 1 : -1), o = l.touchObject.swipeLength, l.touchObject.edgeHit = !1, !1 === l.options.infinite && (0 === l.currentSlide && "right" === t || l.currentSlide >= l.getDotCount() && "left" === t) && (o = l.touchObject.swipeLength * l.options.edgeFriction, l.touchObject.edgeHit = !0), !1 === l.options.vertical ? l.swipeLeft = i + o * s : l.swipeLeft = i + o * (l.$list.height() / l.listWidth) * s, !0 === l.options.verticalSwiping && (l.swipeLeft = i + o * s), !0 !== l.options.fade && !1 !== l.options.touchMove && (!0 === l.animating ? (l.swipeLeft = null, !1) : void l.setCSS(l.swipeLeft))))
        }, i.prototype.swipeStart = function(e) {
            var i, t = this;
            if (t.interrupted = !0, 1 !== t.touchObject.fingerCount || t.slideCount <= t.options.slidesToShow) return t.touchObject = {}, !1;
            void 0 !== e.originalEvent && void 0 !== e.originalEvent.touches && (i = e.originalEvent.touches[0]), t.touchObject.startX = t.touchObject.curX = void 0 !== i ? i.pageX : e.clientX, t.touchObject.startY = t.touchObject.curY = void 0 !== i ? i.pageY : e.clientY, t.dragging = !0
        }, i.prototype.unfilterSlides = i.prototype.slickUnfilter = function() {
            var e = this;
            null !== e.$slidesCache && (e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.appendTo(e.$slideTrack), e.reinit())
        }, i.prototype.unload = function() {
            var i = this;
            e(".slick-cloned", i.$slider).remove(), i.$dots && i.$dots.remove(), i.$prevArrow && i.htmlExpr.test(i.options.prevArrow) && i.$prevArrow.remove(), i.$nextArrow && i.htmlExpr.test(i.options.nextArrow) && i.$nextArrow.remove(), i.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
        }, i.prototype.unslick = function(e) {
            var i = this;
            i.$slider.trigger("unslick", [i, e]), i.destroy()
        }, i.prototype.updateArrows = function() {
            var e = this;
            Math.floor(e.options.slidesToShow / 2), !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && !e.options.infinite && (e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === e.currentSlide ? (e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : e.currentSlide >= e.slideCount - e.options.slidesToShow && !1 === e.options.centerMode ? (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : e.currentSlide >= e.slideCount - 1 && !0 === e.options.centerMode && (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
        }, i.prototype.updateDots = function() {
            var e = this;
            null !== e.$dots && (e.$dots.find("li").removeClass("slick-active").end(), e.$dots.find("li").eq(Math.floor(e.currentSlide / e.options.slidesToScroll)).addClass("slick-active"))
        }, i.prototype.visibility = function() {
            var e = this;
            e.options.autoplay && (document[e.hidden] ? e.interrupted = !0 : e.interrupted = !1)
        }, e.fn.slick = function() {
            var e, t, o = this,
                s = arguments[0],
                n = Array.prototype.slice.call(arguments, 1),
                r = o.length;
            for (e = 0; e < r; e++)
                if ("object" == typeof s || void 0 === s ? o[e].slick = new i(o[e], s) : t = o[e].slick[s].apply(o[e].slick, n), void 0 !== t) return t;
            return o
        }
    })
}, function(e, i, t) {
    "use strict";
    i.a = {
        init: function() {},
        finalize: function() {}
    }
}, function(e, i, t) {
    "use strict";
    i.a = {
        init: function() {}
    }
}, function(e, i) {}]);