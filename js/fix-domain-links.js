/**
 * This script prevents redirection to fathertrucker.ca during GitHub Pages testing
 * It fixes any links that might be trying to redirect to the domain
 */
(function() {
    // Run immediately before page load
    // Check if we're on GitHub Pages (not the actual domain)
    if (window.location.hostname.indexOf('github.io') !== -1 || 
        window.location.hostname !== 'fathertrucker.ca') {
        
        // Remove any base tag that might be forcing the domain
        const baseTags = document.getElementsByTagName('base');
        for (let i = 0; i < baseTags.length; i++) {
            baseTags[i].remove();
        }
    }
})();

document.addEventListener('DOMContentLoaded', function() {
    // Run after DOM is loaded
    // Check if we're on GitHub Pages (not the actual domain)
    if (window.location.hostname.indexOf('github.io') !== -1 || 
        window.location.hostname !== 'fathertrucker.ca') {
        
        // Fix all links that point to the domain
        document.querySelectorAll('a').forEach(link => {
            if (link.href.indexOf('fathertrucker.ca') !== -1) {
                // Extract the path portion
                const urlParts = link.href.split('fathertrucker.ca/');
                if (urlParts.length > 1) {
                    // Use repository base path if we're on GitHub Pages
                    const basePath = window.location.pathname.split('/')[1]; // Usually the repo name
                    if (basePath && window.location.hostname.indexOf('github.io') !== -1) {
                        link.href = '/' + basePath + '/' + urlParts[1];
                    } else {
                        link.href = urlParts[1]; // Just use relative path
                    }
                }
            }
        });

        // Fix all form actions
        document.querySelectorAll('form').forEach(form => {
            if (form.action && form.action.indexOf('fathertrucker.ca') !== -1) {
                const urlParts = form.action.split('fathertrucker.ca/');
                if (urlParts.length > 1) {
                    form.action = urlParts[1];
                }
            }
        });
    }
});
