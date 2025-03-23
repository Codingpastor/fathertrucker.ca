// Enhanced Anti-FOUC script
// This script should be loaded in the head section to run as early as possible

// Immediately apply FOUC prevention
(function() {
  // Track resources to preload
  const resourcesToLoad = {
    fonts: false,
    styles: false,
    images: false
  };
  
  // Initially hide content until everything is loaded
  document.documentElement.classList.remove('loaded');
  
  // Apply loaded class after everything is ready
  function markAsLoaded() {
    // Check if all resources are loaded
    if (!Object.values(resourcesToLoad).includes(false)) {
      // Add a small delay to ensure CSS is fully processed and applied
      setTimeout(function() {
        document.documentElement.classList.add('loaded');
        console.log('All resources loaded, page visible');
      }, 100);
    }
  }
  
  // Preload critical fonts
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(function() {
      resourcesToLoad.fonts = true;
      markAsLoaded();
    });
  } else {
    // If font API not available, mark fonts as loaded
    resourcesToLoad.fonts = true;
  }
  
  // Function to preload critical images
  function preloadCriticalImages() {
    const criticalImages = [
      'images/logo.png',
      'images/highway.jpg',
      'images/truck.jpg',
      'images/resources-header.jpg'
    ];
    
    let loadedImages = 0;
    
    criticalImages.forEach(function(imgSrc) {
      const img = new Image();
      img.onload = img.onerror = function() {
        loadedImages++;
        if (loadedImages === criticalImages.length) {
          resourcesToLoad.images = true;
          markAsLoaded();
        }
      };
      img.src = imgSrc;
    });
  }
  
  // Start preloading images
  preloadCriticalImages();
  
  // Monitor CSS loading
  if (document.readyState === 'complete') {
    resourcesToLoad.styles = true;
    markAsLoaded();
  } else {
    // Wait for DOM and stylesheets to be fully loaded
    window.addEventListener('DOMContentLoaded', function() {
      // Track stylesheet loading
      if (document.styleSheets.length > 0) {
        let loadedSheets = 0;
        const totalSheets = document.styleSheets.length;
        
        // Set a maximum wait time for styles
        const styleTimeout = setTimeout(function() {
          if (!resourcesToLoad.styles) {
            console.log('Style timeout reached, continuing anyway');
            resourcesToLoad.styles = true;
            markAsLoaded();
          }
        }, 1000);
        
        // Check each stylesheet
        for (let i = 0; i < totalSheets; i++) {
          const sheet = document.styleSheets[i];
          try {
            // Try to access rules to check if stylesheet is loaded
            if (sheet.cssRules && sheet.cssRules.length > 0) {
              loadedSheets++;
            } else if (!sheet.href || sheet.href.includes('data:')) {
              // Inline styles or data URLs are already loaded
              loadedSheets++;
            } else {
              // For external sheets, check with a dummy request
              const checker = new XMLHttpRequest();
              checker.open('HEAD', sheet.href, true);
              checker.onreadystatechange = function() {
                if (checker.readyState === 4) {
                  loadedSheets++;
                  if (loadedSheets === totalSheets) {
                    clearTimeout(styleTimeout);
                    resourcesToLoad.styles = true;
                    markAsLoaded();
                  }
                }
              };
              checker.send();
            }
          } catch (e) {
            // CORS issues or other errors, count as loaded
            loadedSheets++;
          }
        }
        
        // If all sheets are already loaded, mark styles as ready
        if (loadedSheets === totalSheets) {
          clearTimeout(styleTimeout);
          resourcesToLoad.styles = true;
          markAsLoaded();
        }
      } else {
        // If no stylesheets, mark styles as loaded
        resourcesToLoad.styles = true;
        markAsLoaded();
      }
    });
  }
  
  // Additional fallback for user interaction - show content if they interact
  window.addEventListener('click', function() {
    if (!document.documentElement.classList.contains('loaded')) {
      console.log('User interaction detected, forcing content display');
      Object.keys(resourcesToLoad).forEach(key => {
        resourcesToLoad[key] = true;
      });
      markAsLoaded();
    }
  }, { once: true });
  
  // Final safety fallback - if nothing else works, show content after window load
  window.addEventListener('load', function() {
    // Short timeout after load to give preloaders a chance
    setTimeout(function() {
      if (!document.documentElement.classList.contains('loaded')) {
        console.log('Window load complete, forcing content display');
        Object.keys(resourcesToLoad).forEach(key => {
          resourcesToLoad[key] = true;
        });
        markAsLoaded();
      }
    }, 500);
  });
  
  // Ultimate failsafe - if nothing happens after 3 seconds, show content
  setTimeout(function() {
    if (!document.documentElement.classList.contains('loaded')) {
      console.log('Failsafe timeout reached, forcing content display');
      Object.keys(resourcesToLoad).forEach(key => {
        resourcesToLoad[key] = true;
      });
      markAsLoaded();
    }
  }, 3000);
})();
