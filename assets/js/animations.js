// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Typing animation for hero section
    initTypewriter();
    
    // Initialize skill bars animation
    initSkillBars();
    
    // Initialize scroll reveal animations
    initScrollReveal();
    
    // Initialize particle background
    initParticles();
});

// Typing effect for job title
function initTypewriter() {
    const element = document.querySelector('.typing-text');
    if (!element) return;
    
    const text = element.textContent;
    element.innerHTML = '';
    
    const cursor = document.createElement('span');
    cursor.classList.add('cursor');
    cursor.textContent = '|';
    
    const typingIndicator = document.createElement('span');
    typingIndicator.classList.add('typing-indicator');
    element.appendChild(typingIndicator);
    element.appendChild(cursor);
    
    let i = 0;
    const typingInterval = setInterval(() => {
        if (i < text.length) {
            typingIndicator.textContent += text.charAt(i);
            i++;
        } else {
            clearInterval(typingInterval);
        }
    }, 100);
}

// Animate skill bars when they come into view
function initSkillBars() {
    const skillBars = document.querySelectorAll('.bar');
    
    if (skillBars.length === 0) return;
    
    // Store the target width value
    skillBars.forEach(bar => {
        const targetWidth = bar.style.width;
        bar.style.width = '0%';
        bar.dataset.width = targetWidth;
    });
    
    function animateSkillBars() {
        skillBars.forEach(bar => {
            const barPosition = bar.getBoundingClientRect().top;
            const screenPosition = window.innerHeight - 100;
            
            if (barPosition < screenPosition) {
                bar.style.width = bar.dataset.width;
            }
        });
    }
    
    // Initial check
    animateSkillBars();
    
    // Check on scroll
    window.addEventListener('scroll', animateSkillBars);
}

// Scroll reveal animation for content sections
function initScrollReveal() {
    const elements = document.querySelectorAll('.scroll-reveal');
    
    if (elements.length === 0) return;
    
    function checkPosition() {
        elements.forEach(element => {
            const position = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight * 0.85;
            
            if (position < screenPosition) {
                element.classList.add('animated');
            }
        });
    }
    
    // Initial check
    checkPosition();
    
    // Check on scroll
    window.addEventListener('scroll', checkPosition);
}

// Particle background for hero section
function initParticles() {
    const heroSection = document.querySelector('#hero');
    if (!heroSection) return;
    
    // Create particles container
    const particlesContainer = document.createElement('div');
    particlesContainer.classList.add('particles-container');
    heroSection.prepend(particlesContainer);
    
    // Create particles
    for (let i = 0; i < 50; i++) {
        createParticle(particlesContainer);
    }
}

function createParticle(container) {
    const particle = document.createElement('div');
    particle.style.position = 'absolute';
    particle.style.width = Math.random() * 5 + 'px';
    particle.style.height = particle.style.width;
    particle.style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
    particle.style.borderRadius = '50%';
    
    // Random initial position
    particle.style.left = Math.random() * 100 + '%';
    particle.style.top = Math.random() * 100 + '%';
    
    // Animation properties
    particle.style.transition = 'transform ' + (Math.random() * 5 + 2) + 's linear, opacity ' + (Math.random() * 3 + 2) + 's ease-in-out';
    particle.style.transform = 'translate(' + (Math.random() * 100 - 50) + 'px, ' + (Math.random() * 100 - 50) + 'px)';
    particle.style.opacity = Math.random();
    
    container.appendChild(particle);
    
    // Reset particle when animation completes
    setTimeout(() => {
        resetParticle(particle);
    }, Math.random() * 5000 + 2000);
}

function resetParticle(particle) {
    // Reset position and start a new animation
    particle.style.transition = 'none';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.top = Math.random() * 100 + '%';
    particle.style.opacity = Math.random();
    
    // Force reflow
    particle.offsetHeight;
    
    // Set new animation
    particle.style.transition = 'transform ' + (Math.random() * 5 + 2) + 's linear, opacity ' + (Math.random() * 3 + 2) + 's ease-in-out';
    particle.style.transform = 'translate(' + (Math.random() * 100 - 50) + 'px, ' + (Math.random() * 100 - 50) + 'px)';
    
    // Reset again after animation completes
    setTimeout(() => {
        resetParticle(particle);
    }, Math.random() * 5000 + 2000);
}

// Add tech skill dots functionality
function initTechSkills() {
    const techSkills = document.querySelectorAll('.tech-skill');
    
    techSkills.forEach(skill => {
        const level = parseInt(skill.dataset.level) || 3;
        const techLevel = skill.querySelector('.tech-level');
        
        if (techLevel) {
            for (let i = 0; i < 5; i++) {
                const dot = document.createElement('div');
                dot.classList.add('tech-dot');
                if (i < level) {
                    dot.classList.add('filled');
                }
                techLevel.appendChild(dot);
            }
        }
    });
}

// Initialize portfolio cards
function initPortfolioCards() {
    const portfolioItems = document.querySelectorAll('.portfolio-card');
    
    portfolioItems.forEach(item => {
        // Create overlay for portfolio items if it doesn't exist
        if (!item.querySelector('.portfolio-overlay')) {
            const overlay = document.createElement('div');
            overlay.classList.add('portfolio-overlay');
            
            const title = document.createElement('h4');
            title.textContent = item.dataset.title || 'Project Title';
            
            const description = document.createElement('p');
            description.textContent = item.dataset.description || 'Project description goes here.';
            
            overlay.appendChild(title);
            overlay.appendChild(description);
            item.appendChild(overlay);
        }
    });
    
    // Add click handler for portfolio modal
    portfolioItems.forEach(item => {
        item.addEventListener('click', function() {
            // Implementation for portfolio modal can be added here
            console.log('Portfolio item clicked:', item.dataset.title);
        });
    });
}

// Call additional initialization functions
document.addEventListener('DOMContentLoaded', function() {
    initTechSkills();
    initPortfolioCards();
});

/* Mobile menu simple solution */
document.addEventListener('DOMContentLoaded', function() {
  const mobileToggle = document.querySelector('.navbar-toggle');
  const mobileMenu = document.getElementById('portfolio-insights-collapse');
  
  if (mobileToggle && mobileMenu) {
    // Toggle menu visibility on click
    mobileToggle.addEventListener('click', function(e) {
      e.preventDefault();
      mobileMenu.classList.toggle('menu-visible');
    });
    
    // Create direct DOM menu if needed
    if (!mobileMenu.querySelector('.navbar-nav li')) {
      const menuHTML = `
        <ul class="nav navbar-nav">
          <li class="page-scroll"><a href="#hero">Home</a></li>
          <li class="page-scroll"><a href="#services">Services</a></li>
          <li class="page-scroll"><a href="#portfolio">Portfolio</a></li>
          <li class="page-scroll"><a href="#contact">Contact</a></li>
        </ul>
      `;
      mobileMenu.innerHTML = menuHTML;
    }
    
    // Close menu when clicking menu items
    const menuLinks = mobileMenu.querySelectorAll('a');
    menuLinks.forEach(link => {
      link.addEventListener('click', function() {
        mobileMenu.classList.remove('menu-visible');
      });
    });
    
    // Close when clicking outside
    document.addEventListener('click', function(e) {
      if (!mobileToggle.contains(e.target) && !mobileMenu.contains(e.target)) {
        mobileMenu.classList.remove('menu-visible');
      }
    });
  }
});

/**
 * Subtle Animation System
 * Applies minimal, professional animations to portfolio elements
 */

document.addEventListener('DOMContentLoaded', function() {
    // Apply animation classes to key elements
    applyAnimationClasses();
    
    // Initialize the intersection observer for scroll animations
    initScrollObserver();
    
    // Handle project tab switching
    initProjectTabs();
});

// Apply animation classes to portfolio elements
function applyAnimationClasses() {
    // Section titles - subtle fade in
    document.querySelectorAll('.site-section h3').forEach(title => {
        title.classList.add('animate-on-scroll', 'fade-in');
    });
    
    // Section dividers - fade in from bottom with delay
    document.querySelectorAll('.img-lines').forEach(line => {
        line.classList.add('animate-on-scroll', 'from-bottom', 'delay-100');
    });
    
    // Skill cards - stagger from bottom
    const skillCards = document.querySelectorAll('.skill-card');
    skillCards.forEach((card, index) => {
        card.classList.add('animate-on-scroll', 'from-bottom');
        card.style.transitionDelay = (0.1 * (index % 3) + 0.2) + 's';
    });
    
    // Service cards - stagger from bottom
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach((card, index) => {
        card.classList.add('animate-on-scroll', 'from-bottom');
        card.style.transitionDelay = (0.1 * (index % 3) + 0.2) + 's';
    });
    
    // Project cards - stagger scale in
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach((card, index) => {
        card.classList.add('animate-on-scroll', 'scale-in');
        card.style.transitionDelay = (0.1 * (index % 3)) + 's';
    });
    
    // Education cards - from sides
    const educationCards = document.querySelectorAll('.education-card');
    if (educationCards.length >= 3) {
        educationCards[0].classList.add('animate-on-scroll', 'from-left');
        educationCards[1].classList.add('animate-on-scroll', 'from-bottom', 'delay-200');
        educationCards[2].classList.add('animate-on-scroll', 'from-right');
    } else {
        educationCards.forEach(card => {
            card.classList.add('animate-on-scroll', 'from-bottom');
        });
    }
    
    // Contact cards - stagger from bottom
    const contactCards = document.querySelectorAll('.contact-card');
    contactCards.forEach((card, index) => {
        card.classList.add('animate-on-scroll', 'from-bottom');
        card.style.transitionDelay = (0.1 * index) + 's';
    });
    
    // Hero section elements
    if (document.querySelector('.hero-text-container h1')) {
        document.querySelector('.hero-text-container h1').classList.add('animate-on-scroll', 'from-bottom');
        document.querySelector('.hero-text-container h1').classList.add('visible'); // Appear immediately
    }
    
    if (document.querySelector('.job-title-container')) {
        document.querySelector('.job-title-container').classList.add('animate-on-scroll', 'from-bottom', 'delay-200');
        document.querySelector('.job-title-container').classList.add('visible'); // Appear immediately
    }
    
    // Hero buttons as staggered items
    if (document.querySelector('.hero-buttons')) {
        document.querySelector('.hero-buttons').classList.add('stagger-items', 'visible'); // Appear immediately
    }
    
    if (document.querySelector('.hero-card')) {
        document.querySelector('.hero-card').classList.add('animate-on-scroll', 'from-right', 'delay-300');
        document.querySelector('.hero-card').classList.add('visible'); // Appear immediately
    }
    
    // Counter cards
    document.querySelectorAll('.counter-card').forEach(counter => {
        counter.classList.add('animate-on-scroll', 'scale-in');
    });
}

// Initialize intersection observer for scroll animations
function initScrollObserver() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // Toggle the visible class based on whether the element is in view
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                // Remove the visible class when element scrolls out of view
                // Only remove for elements that aren't in the hero section
                if (!entry.target.closest('#hero')) {
                    entry.target.classList.remove('visible');
                }
            }
        });
    }, {
        root: null,
        threshold: 0.15,
        rootMargin: '0px'
    });
    
    // Observe elements with animation classes
    document.querySelectorAll('.animate-on-scroll, .stagger-items').forEach(element => {
        // Skip elements that should appear immediately (hero section)
        if (element.closest('#hero')) {
            element.classList.add('visible');
        } else {
            observer.observe(element);
        }
    });
}

// Handle project tab switching
function initProjectTabs() {
    const tabButtons = document.querySelectorAll('.project-tab');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            const tabContainer = this.closest('.modal-body');
            
            // Remove active class from all tabs and panes
            tabContainer.querySelectorAll('.project-tab').forEach(tab => {
                tab.classList.remove('active');
            });
            
            tabContainer.querySelectorAll('.tab-pane').forEach(pane => {
                pane.classList.remove('active');
            });
            
            // Add active class to selected tab and pane
            this.classList.add('active');
            document.getElementById(tabId + '-tab').classList.add('active');
        });
    });
    
    // Handle "Watch Demo" button in project modal
    const demoButtons = document.querySelectorAll('.video-demo-btn');
    demoButtons.forEach(button => {
        button.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            const tabContainer = this.closest('.modal-body');
            
            tabContainer.querySelectorAll('.project-tab').forEach(tab => {
                if (tab.getAttribute('data-tab') === tabId) {
                    tab.click();
                }
            });
        });
    });
    
    // Handle "Back to Overview" button in project modal
    const backButtons = document.querySelectorAll('.back-to-overview');
    backButtons.forEach(button => {
        button.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            const tabContainer = this.closest('.modal-body');
            
            tabContainer.querySelectorAll('.project-tab').forEach(tab => {
                if (tab.getAttribute('data-tab') === tabId) {
                    tab.click();
                }
            });
        });
    });
}