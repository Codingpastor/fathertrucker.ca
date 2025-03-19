// Anti-FOUC script
// This script should be loaded in the head section to run as early as possible

// Immediately apply FOUC prevention
(function() {
  // Initially hide content until styles are loaded
  document.documentElement.classList.remove('loaded');
  
  // Apply loaded class after everything is ready
  function markAsLoaded() {
    // Small delay to ensure CSS is fully processed
    setTimeout(function() {
      document.documentElement.classList.add('loaded');
    }, 50);
  }
  
  // If DOM is already loaded, mark as loaded
  if (document.readyState === 'complete' || document.readyState === 'interactive') {
    markAsLoaded();
  } else {
    // Wait for DOM to be fully loaded and parsed
    window.addEventListener('DOMContentLoaded', function() {
      // Wait for all stylesheets to be loaded
      if (document.styleSheets.length > 0) {
        var loadedSheets = 0;
        var totalSheets = document.styleSheets.length;
        
        for (var i = 0; i < totalSheets; i++) {
          var sheet = document.styleSheets[i];
          if (sheet.href) {
            // For external sheets, we need to check if they're loaded
            var img = new Image();
            img.onerror = function() {
              loadedSheets++;
              if (loadedSheets === totalSheets) {
                markAsLoaded();
              }
            };
            img.src = sheet.href;
          } else {
            // For inline styles, consider them already loaded
            loadedSheets++;
          }
        }
        
        // If all sheets are already loaded, apply class
        if (loadedSheets === totalSheets) {
          markAsLoaded();
        } else {
          // Fallback in case the stylesheet detection fails
          setTimeout(markAsLoaded, 300);
        }
      } else {
        // If no stylesheets, just mark as loaded
        markAsLoaded();
      }
    });
  }
  
  // Additional fallback for user interaction
  window.addEventListener('click', function() {
    document.documentElement.classList.add('loaded');
  }, { once: true });
  
  // Final fallback after window is fully loaded
  window.addEventListener('load', function() {
    document.documentElement.classList.add('loaded');
  });
})();
