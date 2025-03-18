/**
 * This script prevents redirection to fathertrucker.ca during GitHub Pages testing
 * It fixes any links that might be trying to redirect to the domain
 */

// Immediately intercept and prevent any redirects
(function() {
    // This runs as soon as the script is loaded, before any other scripts
    console.log('Domain fix script running - prevent redirects');
    
    // Mobile browsers sometimes use different navigation APIs, so we need to intercept those
    if (typeof window.history !== 'undefined' && window.history.pushState) {
        // Save the original methods
        const originalPushState = window.history.pushState;
        const originalReplaceState = window.history.replaceState;
        
        // Override pushState to prevent domain redirects
        window.history.pushState = function() {
            // Check if the URL contains fathertrucker.ca
            if (arguments.length > 2 && typeof arguments[2] === 'string' && 
                arguments[2].indexOf('fathertrucker.ca') !== -1) {
                
                console.log('Prevented pushState redirect to: ' + arguments[2]);
                // Extract path portion and use that instead
                const urlParts = arguments[2].split('fathertrucker.ca/');
                if (urlParts.length > 1) {
                    arguments[2] = urlParts[1];
                }
            }
            return originalPushState.apply(this, arguments);
        };
        
        // Override replaceState to prevent domain redirects
        window.history.replaceState = function() {
            // Check if the URL contains fathertrucker.ca
            if (arguments.length > 2 && typeof arguments[2] === 'string' && 
                arguments[2].indexOf('fathertrucker.ca') !== -1) {
                
                console.log('Prevented replaceState redirect to: ' + arguments[2]);
                // Extract path portion and use that instead
                const urlParts = arguments[2].split('fathertrucker.ca/');
                if (urlParts.length > 1) {
                    arguments[2] = urlParts[1];
                }
            }
            return originalReplaceState.apply(this, arguments);
        };
    }
    
    // Mobile Safari and Chrome sometimes use window.location directly
    // Intercept window.location property accesses and modifications
    try {
        // Save the original location
        const originalLocation = window.location;
        
        // Define a getter/setter for location
        Object.defineProperty(window, 'location', {
            get: function() {
                return originalLocation;
            },
            set: function(value) {
                // Prevent redirects to fathertrucker.ca
                if (typeof value === 'string' && value.indexOf('fathertrucker.ca') !== -1) {
                    console.log('Prevented direct location redirect to: ' + value);
                    const urlParts = value.split('fathertrucker.ca/');
                    if (urlParts.length > 1) {
                        value = urlParts[1];
                    }
                }
                originalLocation.href = value;
            },
            configurable: true
        });
    } catch (e) {
        console.error('Could not override window.location: ' + e);
    }
    
    // Remove any base tag that might be forcing the domain
    document.addEventListener('DOMContentLoaded', function() {
        const baseTags = document.getElementsByTagName('base');
        for (let i = 0; i < baseTags.length; i++) {
            console.log('Removing base tag');
            baseTags[i].remove();
        }
    });
})();

// Fix links after DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Run after DOM is loaded
    console.log('DOM loaded - fixing links');
    
    // Fix all links that point to the domain
    document.querySelectorAll('a').forEach(link => {
        if (link.href.indexOf('fathertrucker.ca') !== -1) {
            // Extract the path portion
            const originalHref = link.href;
            const urlParts = link.href.split('fathertrucker.ca/');
            if (urlParts.length > 1) {
                // Use repository base path if we're on GitHub Pages
                const basePath = window.location.pathname.split('/')[1]; // Usually the repo name
                if (basePath && window.location.hostname.indexOf('github.io') !== -1) {
                    link.href = '/' + basePath + '/' + urlParts[1];
                } else {
                    link.href = urlParts[1]; // Just use relative path
                }
                console.log('Fixed link from: ' + originalHref + ' to: ' + link.href);
            }
        }
    });

    // Fix all form actions
    document.querySelectorAll('form').forEach(form => {
        if (form.action && form.action.indexOf('fathertrucker.ca') !== -1) {
            const originalAction = form.action;
            const urlParts = form.action.split('fathertrucker.ca/');
            if (urlParts.length > 1) {
                form.action = urlParts[1];
                console.log('Fixed form action from: ' + originalAction + ' to: ' + form.action);
            }
        }
    });
    
    // Add click event listeners to all links to prevent any redirects
    document.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function(e) {
            if (this.href && this.href.indexOf('fathertrucker.ca') !== -1) {
                e.preventDefault();
                console.log('Prevented click redirect to: ' + this.href);
                
                // Extract path and navigate to it
                const urlParts = this.href.split('fathertrucker.ca/');
                if (urlParts.length > 1) {
                    window.location.href = urlParts[1];
                }
            }
        });
    });
    
    // For mobile touch events (mobile browsers sometimes handle these differently)
    document.querySelectorAll('a').forEach(link => {
        link.addEventListener('touchend', function(e) {
            if (this.href && this.href.indexOf('fathertrucker.ca') !== -1) {
                e.preventDefault();
                console.log('Prevented touch redirect to: ' + this.href);
                
                // Extract path and navigate to it
                const urlParts = this.href.split('fathertrucker.ca/');
                if (urlParts.length > 1) {
                    window.location.href = urlParts[1];
                }
            }
        });
    });
});

// Also ensure links are fixed after any dynamic content loads
window.addEventListener('load', function() {
    // Fix any dynamically loaded links that might have been added after DOMContentLoaded
    document.querySelectorAll('a').forEach(link => {
        if (link.href.indexOf('fathertrucker.ca') !== -1) {
            const originalHref = link.href;
            const urlParts = link.href.split('fathertrucker.ca/');
            if (urlParts.length > 1) {
                link.href = urlParts[1];
                console.log('Fixed dynamically loaded link from: ' + originalHref + ' to: ' + link.href);
            }
        }
    });
});

// Periodically check for and fix any links that might be dynamically added
setInterval(function() {
    document.querySelectorAll('a').forEach(link => {
        if (link.href.indexOf('fathertrucker.ca') !== -1) {
            const originalHref = link.href;
            const urlParts = link.href.split('fathertrucker.ca/');
            if (urlParts.length > 1) {
                link.href = urlParts[1];
                console.log('Fixed dynamic link from: ' + originalHref + ' to: ' + link.href);
            }
        }
    });
}, 1000); // Check every second
