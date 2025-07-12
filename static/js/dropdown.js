// Dropdown Menu JavaScript
document.addEventListener('DOMContentLoaded', function() {
  const dropdowns = document.querySelectorAll('.dropdown');

  function handleDropdownClick(e) {
    const dropdown = e.currentTarget.closest('.dropdown');
    if (!dropdown) return;

    const link = dropdown.querySelector('a');

    // Close other dropdowns
    dropdowns.forEach(otherDropdown => {
      if (otherDropdown !== dropdown) {
        otherDropdown.classList.remove('active');
      }
    });

    // Toggle current dropdown
    dropdown.classList.toggle('active');
  }

  // Mobile and tablet click handler
  function setupMobileDropdowns() {
    dropdowns.forEach(dropdown => {
      const link = dropdown.querySelector('a');

      // Remove existing listeners
      link.removeEventListener('click', handleDropdownClick);

      // Add click listener for mobile/tablet
      if (window.innerWidth <= 1024) {
        link.addEventListener('click', handleDropdownClick);
      }
    });
  }

  // Initial setup
  setupMobileDropdowns();

  // Handle window resize
  let resizeTimer;
  window.addEventListener('resize', function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {
      setupMobileDropdowns();

      // Close all dropdowns on resize
      dropdowns.forEach(dropdown => {
        dropdown.classList.remove('active');
      });
    }, 250);
  });

  // Close dropdowns when clicking outside
  document.addEventListener('click', function(e) {
    if (!e.target.closest('.dropdown')) {
      dropdowns.forEach(dropdown => {
        dropdown.classList.remove('active');
      });
    }
  });

  // Close dropdowns when pressing Escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      dropdowns.forEach(dropdown => {
        dropdown.classList.remove('active');
      });
    }
  });
});
