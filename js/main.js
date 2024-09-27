(function () {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            var spinnerElement = document.getElementById('spinner');
            if (spinnerElement) {
                spinnerElement.classList.remove('show');
            }
        }, 1);
    };
    spinner();

    // Initiate the WOW.js (Assuming WOW.js is still being used in the project)
    new WOW().init();

    // Sticky Navbar
    window.addEventListener('scroll', function () {
        var stickyTop = document.querySelector('.sticky-top');
        if (window.scrollY > 300) {
            stickyTop.style.top = '0px';
        } else {
            stickyTop.style.top = '-100px';
        }
    });

    // Dropdown on mouse hover
    var dropdowns = document.querySelectorAll('.dropdown');
    var matchMediaQuery = window.matchMedia("(min-width: 992px)");

    function handleDropdownHover() {
        dropdowns.forEach(function (dropdown) {
            var dropdownToggle = dropdown.querySelector('.dropdown-toggle');
            var dropdownMenu = dropdown.querySelector('.dropdown-menu');
            var showClass = "show";

            dropdown.addEventListener('mouseenter', function () {
                dropdown.classList.add(showClass);
                dropdownToggle.setAttribute("aria-expanded", "true");
                dropdownMenu.classList.add(showClass);
            });

            dropdown.addEventListener('mouseleave', function () {
                dropdown.classList.remove(showClass);
                dropdownToggle.setAttribute("aria-expanded", "false");
                dropdownMenu.classList.remove(showClass);
            });
        });
    }

    function removeDropdownHover() {
        dropdowns.forEach(function (dropdown) {
            dropdown.removeEventListener('mouseenter', function () {});
            dropdown.removeEventListener('mouseleave', function () {});
        });
    }

    function handleResize() {
        if (matchMediaQuery.matches) {
            handleDropdownHover();
        } else {
            removeDropdownHover();
        }
    }

    window.addEventListener('load', handleResize);
    window.addEventListener('resize', handleResize);

    // Back to top button
    var backToTopButton = document.querySelector('.back-to-top');

    window.addEventListener('scroll', function () {
        if (window.scrollY > 300) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });

    backToTopButton.addEventListener('click', function (event) {
        event.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Header carousel (Using a basic example, as OwlCarousel is a jQuery plugin)
    var headerCarousel = document.querySelector('.header-carousel');
    if (headerCarousel) {
        // Placeholder for vanilla JS carousel functionality
    }

    // Testimonials carousel (Using a basic example, as OwlCarousel is a jQuery plugin)
    var testimonialCarousel = document.querySelector('.testimonial-carousel');
    if (testimonialCarousel) {
        // Placeholder for vanilla JS carousel functionality
    }

    // Change color of 'about' element on click
    let about = document.getElementById('about');
    if (about) {
        about.addEventListener('click', function () {
            about.style.color = 'orange';
        });
    }

})();
