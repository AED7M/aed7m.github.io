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