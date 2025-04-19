// Simple standalone mobile menu implementation
document.addEventListener('DOMContentLoaded', function() {
  // Create the mobile menu elements from scratch
  function createMobileMenu() {
    // Create menu container
    const menu = document.createElement('div');
    menu.id = 'simple-mobile-menu';
    
    // Create inner container
    const container = document.createElement('div');
    container.className = 'simple-menu-container';
    
    // Create close button
    const closeBtn = document.createElement('button');
    closeBtn.className = 'simple-menu-close';
    closeBtn.innerHTML = '&times;';
    
    // Create menu list
    const menuList = document.createElement('ul');
    menuList.className = 'simple-menu-list';
    
    // Menu items
    const menuItems = [
      { text: 'Home', link: '#hero' },
      { text: 'Services', link: '#services' },
      { text: 'Portfolio', link: '#portfolio' },
      { text: 'Contact', link: '#contact' }
    ];
    
    // Create menu items
    menuItems.forEach(item => {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.href = item.link;
      a.textContent = item.text;
      li.appendChild(a);
      menuList.appendChild(li);
    });
    
    // Assemble menu
    container.appendChild(closeBtn);
    container.appendChild(menuList);
    menu.appendChild(container);
    
    // Add menu to body
    document.body.appendChild(menu);
    
    return {
      menu: menu,
      closeBtn: closeBtn,
      links: menuList.querySelectorAll('a')
    };
  }
  
  // Create menu elements
  const mobileMenu = createMobileMenu();
  
  // Get toggle button
  const toggleBtn = document.querySelector('.navbar-toggle');
  
  // Add event listeners
  if (toggleBtn) {
    // Open menu when hamburger is clicked
    toggleBtn.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      mobileMenu.menu.classList.add('active');
    });
    
    // Close menu when X is clicked
    mobileMenu.closeBtn.addEventListener('click', function() {
      mobileMenu.menu.classList.remove('active');
    });
    
    // Close menu when a link is clicked
    mobileMenu.links.forEach(link => {
      link.addEventListener('click', function() {
        mobileMenu.menu.classList.remove('active');
      });
    });
    
    // Close menu when clicking outside menu
    mobileMenu.menu.addEventListener('click', function(e) {
      if (e.target === mobileMenu.menu) {
        mobileMenu.menu.classList.remove('active');
      }
    });
  }
});