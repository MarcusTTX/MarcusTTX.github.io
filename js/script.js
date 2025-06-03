(function ($) {
     'use strict';

    // Sticky Menu
    $(window).scroll(function () {
        if ($('.navigation').offset().top > 100) {
            $('.navigation').addClass('nav-bg');
        } else {
            $('.navigation').removeClass('nav-bg');
        }
    });

    // Background-images
    $('[data-background]').each(function () {
        $(this).css({
            'background-image': 'url(' + $(this).data('background') + ')'
        });
    });

    // background color
    $('[data-color]').each(function () {
        $(this).css({
            'background-color': $(this).data('color')
        });
    });

    // progress bar
    $('[data-progress]').each(function () {
        $(this).css({
            'bottom': $(this).data('progress')
        });
    });


    /* ########################################### hero parallax ############################################## */
    window.onload = function () {

        var parallaxBox = document.getElementById('parallax');
        if (!parallaxBox) return; // 🔧 Prevent crash on pages without #parallax

        var ids = ['l2', 'l3', 'l4', 'l5', 'l6', 'l7', 'l8', 'l9'];
        var coords = {};

        ids.forEach(id => {
            const el = document.getElementById(id);
            if (el) {
                coords[id] = { left: el.offsetLeft, top: el.offsetTop };
            }
        });

        parallaxBox.onmousemove = function (event) {
            const x = event.clientX - parallaxBox.offsetLeft;
            const y = event.clientY - parallaxBox.offsetTop;

            Object.entries(coords).forEach(([id, { left, top }]) => {
                mouseParallax(id, left, top, x, y, 30);
            });
        };

    };

    function mouseParallax(id, left, top, mouseX, mouseY, speed) {
        var obj = document.getElementById(id);
        var parentObj = obj.parentNode,
            containerWidth = parseInt(parentObj.offsetWidth),
            containerHeight = parseInt(parentObj.offsetHeight);
        obj.style.left = left - (((mouseX - (parseInt(obj.offsetWidth) / 2 + left)) / containerWidth) * speed) + 'px';
        obj.style.top = top - (((mouseY - (parseInt(obj.offsetHeight) / 2 + top)) / containerHeight) * speed) + 'px';
    }
    /* ########################################### /hero parallax ############################################## */

    // testimonial-slider
    $('.testimonial-slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        arrows: false,
        adaptiveHeight: true
    });


    // clients logo slider
    $('.client-logo-slider').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        dots: false,
        arrows: false,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    // Odomenter
    if (typeof Odometer !== 'undefined') {
        const createOdometer = (el, value) => {
            if (!el) {
                console.warn("Odometer target not found.");
                return;
            }

            if (typeof Odometer === "undefined") {
                console.error("Odometer is not loaded.");
                return;
            }
            
            const odometer = new Odometer({
                el: el,
                value: 0,
            });

            let hasRun = false;

            const options = {
                threshold: [0, 0.9],
            };

            const callback = (entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        if (!hasRun) {
                            odometer.update(value);
                            hasRun = true;
                        }
                }
                });
            };
        
            const observer = new IntersectionObserver(callback, options);
            observer.observe(el);
        };

        document.addEventListener("DOMContentLoaded", () => {
            const odometers = [
                { selector: ".unreal-odometer", value: 80 },
                { selector: ".unity-odometer", value: 80 },
                { selector: ".GD-odometer", value: 80 },
                { selector: ".LD-odometer", value: 70 },
                { selector: ".GP-odometer", value: 70 },
                { selector: ".html-odometer", value: 90 },
                { selector: ".ccc-odometer", value: 85 },
                { selector: ".cc-odometer", value: 70 },
            ];

            odometers.forEach(({ selector, value }) => {
                const el = document.querySelector(selector);
                createOdometer(el, value);
            });
        });

    } else {
        console.warn("Odometer not loaded");
    }

    // const unrealOdometer = document.querySelector(".unreal-odometer");
    // createOdometer(unrealOdometer, 80);
    // const unityOdometer = document.querySelector(".unity-odometer");
    // createOdometer(unityOdometer, 80);
    // const gdOdometer = document.querySelector(".GD-odometer");
    // createOdometer(gdOdometer, 80);
    // const ldOdometer = document.querySelector(".LD-odometer");
    // createOdometer(ldOdometer, 70);
    // const gpOdometer = document.querySelector(".GP-odometer");
    // createOdometer(gpOdometer, 70);
    // const htmlOdometer = document.querySelector(".html-odometer");
    // createOdometer(htmlOdometer, 90);
    // const cccOdometer = document.querySelector(".ccc-odometer");
    // createOdometer(cccOdometer, 85);
    // const ccOdometer = document.querySelector(".cc-odometer");
    // createOdometer(ccOdometer, 70);

    // Shuffle js filter and masonry
    // var Shuffle = window.Shuffle;
    // var jQuery = window.jQuery;

    // var myShuffle = new Shuffle(document.querySelector('.shuffle-wrapper'), {
    //     itemSelector: '.shuffle-item',
    //     buffer: 1
    // });

    // jQuery('input[name="shuffle-filter"]').on('change', function (evt) {
    //     var input = evt.currentTarget;
    //     if (input.checked) {
    //         myShuffle.filter(input.value);
    //     }
    // });
    
    // document.addEventListener("DOMContentLoaded", function () {
    //     var Shuffle = window.Shuffle;
    //     var wrapper = document.querySelector('.shuffle-wrapper');

    //     if (Shuffle && wrapper) {
    //         var myShuffle = new Shuffle(wrapper, {
    //         itemSelector: '.shuffle-item',
    //         buffer: 1,
    //         });

    //         document.querySelectorAll('input[name="shuffle-filter"]').forEach(input => {
    //         input.addEventListener('change', function (evt) {
    //             if (evt.currentTarget.checked) {
    //             const value = input.value;
    //             myShuffle.filter(value === "all" ? Shuffle.ALL_ITEMS : value);
    //             }
    //         });
    //         });
    //     } else {
    //         console.log('Shuffle not initialized: Shuffle or .shuffle-wrapper missing on this page.');
    //     }
    // });
    
    document.addEventListener("DOMContentLoaded", () => {
        console.log("DOMContentLoaded triggered"); // ✅ Must appear

        const Shuffle = window.Shuffle;
        const container = document.querySelector(".shuffle-wrapper");

        if (Shuffle && container) {
            const myShuffle = new Shuffle(container, {
                itemSelector: ".shuffle-item",
                buffer: 1,
            });

            const mainButtons = document.querySelectorAll("#filter-buttons .btn");
            const subButtons = document.querySelectorAll("#subfilter-buttons .btn");
            const subfilterWrapper = document.getElementById("subfilter-buttons");

            let currentMain = "all";
            let currentSub = null;

            const updateFilter = () => {
                if (currentMain === "all") {
                myShuffle.filter(Shuffle.ALL_ITEMS);
                } else if (!currentSub) {
                myShuffle.filter(currentMain);
                } else {
                // Combined filter: e.g., ["design", "unity"]
                myShuffle.filter((el) => {
                    const groups = JSON.parse(el.dataset.groups || "[]");
                    return groups.includes(currentMain) && groups.includes(currentSub);
                });
                }
            };

            mainButtons.forEach(button => {
                button.addEventListener("click", () => {
                    document.querySelector("#filter-buttons .btn.active")?.classList.remove("active");
                    button.classList.add("active");

                    currentMain = button.dataset.group;
                    currentSub = null;

                    // Toggle subfilter visibility and reset subfilter state
                    subfilterWrapper.hidden = currentMain !== "GameDev";
                    subButtons.forEach(btn => btn.classList.remove("active"));

                    updateFilter();
                    console.log("Main selected:", currentMain);
                    console.log("Subfilter hidden?", subfilterWrapper.hidden);
                });
            });

            subButtons.forEach(button => {
                button.addEventListener("click", () => {
                    subButtons.forEach(btn => btn.classList.remove("active"));
                    button.classList.add("active");

                    currentSub = button.dataset.subgroup;
                    updateFilter();
                });
            });
        }
    });

})(jQuery);