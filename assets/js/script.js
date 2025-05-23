$(function() {

    // Mobile menu toggle fix - simplified
    $(document).ready(function() {
        // Simple toggle for mobile menu
        $('.navbar-toggle').on('click', function(e) {
            e.preventDefault();
            $('#portfolio-insights-collapse').toggleClass('mobile-active');
            $(this).toggleClass('active');
        });
        
        // Close menu when clicking menu items
        $('#portfolio-insights-collapse .navbar-nav li a').on('click', function() {
            $('#portfolio-insights-collapse').removeClass('mobile-active');
            $('.navbar-toggle').removeClass('active');
        });
        
        // Close menu when clicking outside
        $(document).on('click', function(e) {
            if (!$(e.target).closest('.navbar-toggle, #portfolio-insights-collapse').length) {
                $('#portfolio-insights-collapse').removeClass('mobile-active');
                $('.navbar-toggle').removeClass('active');
            }
        });
        
        // Prevent document click from closing menu
        $('#portfolio-insights-collapse').on('click', function(e) {
            e.stopPropagation();
        });
    });

    //jQuery for page scrolling feature - requires jQuery Easing plugin
    $(document).on('click', '.page-scroll a', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1000, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.site-header',
        offset: 10
    });

	/* Progress bar */
    var $section = $('.section-skills');
    function loadDaBars() {
	    $('.progress .progress-bar').progressbar({
	        transition_delay: 500
	    });
    }
    
    $(document).bind('scroll', function(ev) {
        var scrollOffset = $(document).scrollTop();
        var containerOffset = $section.offset().top - window.innerHeight;
        if (scrollOffset > containerOffset) {
            loadDaBars();
            // unbind event not to load scrolsl again
            $(document).unbind('scroll');
        }
    });

    /* Counters  */
    if ($(".section-counters .start").length>0) {
        $(".section-counters .start").each(function() {
            var stat_item = $(this),
            offset = stat_item.offset().top;
            $(window).scroll(function() {
                if($(window).scrollTop() > (offset - 1000) && !(stat_item.hasClass('counting'))) {
                    stat_item.addClass('counting');
                    stat_item.countTo();
                }
            });
        });
    };

	// another custom callback for counting to infinity
	$('#infinity').data('countToOptions', {
		onComplete: function (value) {
		  count.call(this, {
		    from: value,
		    to: value + 1
		  });
		}
	});

	$('#infinity').each(count);

	function count(options) {
        var $this = $(this);
        options = $.extend({}, options || {}, $this.data('countToOptions') || {});
        $this.countTo(options);
    }

    // Navigation overlay
    var s = skrollr.init({
            forceHeight: false,
            smoothScrolling: false,
            mobileDeceleration: 0.004,
            mobileCheck: function() {
                //hack - forces mobile version to be off
                return false;
            }
    });
    
    // Fix for header disappearing after scroll animation
    $(window).on('scroll', function() {
        // Make sure the header is always visible
        if ($('.site-header').css('display') === 'none' || $('.site-header').css('opacity') === '0') {
            $('.site-header').css({
                'display': 'block',
                'opacity': '1'
            });
        }
        
        // If we're at the top, ensure the header has the correct background
        if ($(window).scrollTop() <= 50) {
            $('.site-header').css('background-color', 'rgba(33, 33, 33, 0.8)');
        } else {
            // If we've scrolled down, ensure the header has white background
            if ($('.site-header').css('background-color') === 'rgba(33, 33, 33, 0.8)') {
                $('.site-header').css('background-color', 'rgba(255, 255, 255, 1)');
            }
        }
    });
    
    // Ensure header is visible after any page animations complete
    setTimeout(function() {
        $('.site-header').css({
            'display': 'block',
            'opacity': '1'
        });
    }, 1000);

    // Resume download functionality
    document.getElementById('resume-download').addEventListener('click', function(e) {
        e.preventDefault();
        // Create a temporary link to download the resume
        const link = document.createElement('a');
        link.href = 'assets/resume/Abdelrahman_Elaref_Resume.pdf'; // Update this path to your actual resume file
        link.download = 'Abdelrahman_Elaref_Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
    
    // Handle form submission with AJAX
    $(document).ready(function() {
        $('#contactForm').submit(function(e) {
            e.preventDefault();
            
            var form = $(this);
            var formMessages = $('#form-messages');
            var submitButton = form.find('button[type="submit"]');
            var originalButtonText = submitButton.html();
            
            // Change button text to show processing
            submitButton.html('Sending... <i class="glyphicon glyphicon-refresh"></i>');
            submitButton.prop('disabled', true);
            
            $.ajax({
                url: form.attr('action'),
                method: form.attr('method'),
                data: form.serialize(),
                dataType: 'json',
                headers: {
                    'Accept': 'application/json'
                },
                success: function(response) {
                    // Display success message
                    formMessages.html('<div class="alert alert-success mt-3">Your message has been sent successfully!</div>');
                    
                    // Clear the form
                    form.trigger('reset');
                    
                    // Restore button state
                    setTimeout(function() {
                        submitButton.html(originalButtonText);
                        submitButton.prop('disabled', false);
                    }, 2000);
                },
                error: function(err) {
                    // Display error message
                    formMessages.html('<div class="alert alert-danger mt-3">Oops! There was a problem with sending your message. Please try again.</div>');
                    
                    // Restore button state
                    submitButton.html(originalButtonText);
                    submitButton.prop('disabled', false);
                }
            });
        });
    });
});

// Dark mode toggle functionality
const toggleSwitch = document.querySelector('#checkbox');

// Check for saved theme preference
function initializeDarkMode() {
    const currentTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', currentTheme);
    
    // Update toggle state based on saved preference
    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }
}

// Handle toggle switch change
function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }
}

// Modern Service Card Hover Effects - SIMPLIFIED
function initializeServiceCardEffects() {
    // Function intentionally left empty to let CSS handle the animations
    // This prevents the JS from overriding the CSS hover effects
    console.log("Service card effects simplified to match other cards");
}

// Typing animation functionality
function initializeTypingAnimation() {
    const phrases = [
        "Turning data into insights",
        "Building ETL pipelines",
        "Creating interactive dashboards",
        "Finding patterns in data"
    ];
    
    let currentPhraseIndex = 0;
    let currentCharIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;
    
    function typeText() {
        const currentPhrase = phrases[currentPhraseIndex];
        const typedTextElement = document.getElementById('typed-text');
        
        if (!typedTextElement) return;
        
        if (isDeleting) {
            // Deleting text
            typedTextElement.textContent = currentPhrase.substring(0, currentCharIndex - 1);
            currentCharIndex--;
            typingSpeed = 50;
        } else {
            // Typing text
            typedTextElement.textContent = currentPhrase.substring(0, currentCharIndex + 1);
            currentCharIndex++;
            typingSpeed = 100;
        }
        
        // If finished typing the phrase
        if (!isDeleting && currentCharIndex === currentPhrase.length) {
            isDeleting = true;
            typingSpeed = 1000; // Pause at the end
        }
        
        // If finished deleting the phrase
        if (isDeleting && currentCharIndex === 0) {
            isDeleting = false;
            currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
        }
        
        setTimeout(typeText, typingSpeed);
    }
    
    // Start typing animation
    typeText();
}

// Enhanced Portfolio Section Functionality
function initializePortfolioEnhancements() {
    // Project filtering
    $('.filter-btn').on('click', function() {
        // Remove active class from all buttons
        $('.filter-btn').removeClass('active');
        // Add active class to clicked button
        $(this).addClass('active');
        
        // Get filter value
        const filterValue = $(this).data('filter');
        
        // Filter projects
        if (filterValue === 'all') {
            $('.project-item').show();
        } else {
            $('.project-item').each(function() {
                const categories = $(this).data('category');
                if (categories && categories.indexOf(filterValue) !== -1) {
                    $(this).show();
                } else {
                    $(this).hide();
                }
            });
        }
    });
    
    // Project modal tabs
    $('.project-tab').on('click', function() {
        const tabId = $(this).data('tab');
        
        // Remove active class from all tabs and panes in this modal
        $(this).closest('.modal-body').find('.project-tab').removeClass('active');
        $(this).closest('.modal-body').find('.tab-pane').removeClass('active');
        
        // Add active class to clicked tab and corresponding pane
        $(this).addClass('active');
        $('#' + tabId + '-tab').addClass('active');
    });
    
    // Video demo button click
    $('.video-demo-btn').on('click', function() {
        const tabId = $(this).data('tab');
        $(this).closest('.modal-body').find('.project-tab[data-tab="' + tabId + '"]').click();
    });
    
    // Back to overview button click
    $('.back-to-overview').on('click', function() {
        const tabId = $(this).data('tab');
        $(this).closest('.modal-body').find('.project-tab[data-tab="' + tabId + '"]').click();
    });
    
    // Handle video trigger from project card
    $('.project-modal').on('show.bs.modal', function(event) {
        const button = $(event.relatedTarget);
        
        // If button has data-video attribute, auto-switch to video tab
        if (button.data('video') === true) {
            const modal = this;
            setTimeout(function() {
                $(modal).find('.project-tab[data-tab="video"]').click();
            }, 300);
        }
    });
    
    // Gallery item click (for future implementation)
    $('.gallery-item').on('click', function() {
        const imgSrc = $(this).find('img').attr('src');
        // Implement image preview functionality if needed
    });
}

// Initialize everything when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    // Initialize dark mode
    initializeDarkMode();
    
    // Add event listener for theme toggle
    if (toggleSwitch) {
        toggleSwitch.addEventListener('change', switchTheme);
    }
    
    // Initialize service card effects
    initializeServiceCardEffects();
    
    // Initialize typing animation
    initializeTypingAnimation();
    
    // Initialize particles.js for hero section
    if (document.getElementById('particles-js')) {
        particlesJS('particles-js', {
            "particles": {
                "number": {
                    "value": 50,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": "#3498db"
                },
                "shape": {
                    "type": "circle",
                    "stroke": {
                        "width": 0,
                        "color": "#000000"
                    }
                },
                "opacity": {
                    "value": 0.3,
                    "random": true,
                    "anim": {
                        "enable": true,
                        "speed": 1,
                        "opacity_min": 0.1,
                        "sync": false
                    }
                },
                "size": {
                    "value": 3,
                    "random": true
                },
                "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": "#3498db",
                    "opacity": 0.2,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 1,
                    "direction": "none",
                    "random": true,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "grab"
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "push"
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 140,
                        "line_linked": {
                            "opacity": 1
                        }
                    }
                }
            },
            "retina_detect": true
        });
    }

    // Initialize particles.js for contact section - same settings as hero
    if (document.getElementById('contact-particles-js')) {
        particlesJS('contact-particles-js', {
            "particles": {
                "number": {
                    "value": 50,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": "#3498db"
                },
                "shape": {
                    "type": "circle",
                    "stroke": {
                        "width": 0,
                        "color": "#000000"
                    }
                },
                "opacity": {
                    "value": 0.3,
                    "random": true,
                    "anim": {
                        "enable": true,
                        "speed": 1,
                        "opacity_min": 0.1,
                        "sync": false
                    }
                },
                "size": {
                    "value": 3,
                    "random": true
                },
                "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": "#3498db",
                    "opacity": 0.2,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 1,
                    "direction": "none",
                    "random": true,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "grab"
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "push"
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 140,
                        "line_linked": {
                            "opacity": 1
                        }
                    }
                }
            },
            "retina_detect": true
        });
    }

    // Mobile header scroll behavior
    if (window.innerWidth <= 767) {
        // Function to update header on scroll
        function updateMobileHeader() {
            const header = document.getElementById('masthead');
            const scrollY = window.scrollY || window.pageYOffset;
            
            if (scrollY > 50) {
                // When scrolled, make header more visible
                header.style.backgroundColor = 'rgba(33, 33, 33, 0.98)';
                header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.3)';
            } else {
                // At the top, slightly more transparent
                header.style.backgroundColor = 'rgba(33, 33, 33, 0.95)';
                header.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.2)';
            }
        }
        
        // Initial call
        updateMobileHeader();
        
        // Listen for scroll
        window.addEventListener('scroll', updateMobileHeader);
    }

    // Initialize portfolio enhancements
    initializePortfolioEnhancements();
});