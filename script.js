<!-- JavaScript includes -->
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/wow.js@1.1.2/dist/wow.min.js"></script>

<script>
    // Smooth Scroll for Navigation Links
    $(document).ready(function() {
        // For smooth scroll on click of navbar links
        $('a.nav-link').on('click', function(event) {
            // Make sure this.hash has a value before overriding default behavior
            if (this.hash !== "") {
                event.preventDefault();
                
                var hash = this.hash;
                
                // Using jQuery's animate() method to add smooth page scroll
                // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
                $('html, body').animate({
                    scrollTop: $(hash).offset().top
                }, 800, function(){
                    // Add hash (#) to URL when done scrolling (default click behavior)
                    window.location.hash = hash;
                });
            }
        });
    });

    // Activate WOW.js for scroll animations
    new WOW().init();

    // Toggle Mobile Navbar
    $(document).ready(function() {
        // Add active class for the mobile navigation menu
        $('.navbar-toggler').on('click', function() {
            $('#ca-navbar').toggleClass('show');
        });
    });

    // Optional: Preloader functionality (can be removed if not needed)
    $(window).on('load', function() {
        $('#preloader').fadeOut('slow');
    });
</script>
