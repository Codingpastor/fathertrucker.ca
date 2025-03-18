/**
 * GitHub Pages URL Fixer for Father Trucker Website
 * This script specifically addresses GitHub Pages URL issues
 * Run this before other scripts to ensure proper URL handling
 */

(function() {
    console.log('GitHub Pages URL Fixer initializing');
    
    // Identify if we're on GitHub Pages
    const isGitHubPages = window.location.hostname.includes('github.io');
    
    if (isGitHubPages) {
        console.log('Running on GitHub Pages - applying special fixes');
        
        // GitHub Pages has its own URL structure we need to account for
        const repoName = 'fathertrucker.ca'; // Repository name
        
        // Fix the base URL by adding a base tag if needed
        if (!document.querySelector('base')) {
            const base = document.createElement('base');
            base.href = '/' + repoName + '/';
            document.head.prepend(base);
            console.log('Added base tag for GitHub Pages: ' + base.href);
        }
    }
    
    // Detect strange URLs in the pathname and redirect if necessary
    const pathname = window.location.pathname;
    if (pathname.includes('/inddadex.html')) {
        // Replace inddadex.html with index.html and redirect
        const correctedPath = pathname.replace('/inddadex.html', '/index.html');
        console.log('Redirecting from incorrect URL: ' + pathname + ' to ' + correctedPath);
        window.location.replace(correctedPath);
        return; // Stop execution as we're redirecting
    }
    
    // Handle problematic URLs in prayer guides and recommended apps pages
    if (pathname.includes('/resources/prayer-guides/') || 
        pathname.includes('/resources/recommended-apps/')) {
        
        // Clean up any URLs that might have gotten corrupted
        document.addEventListener('DOMContentLoaded', function() {
            // Fix all links after the DOM is loaded
            document.querySelectorAll('a').forEach(function(link) {
                // Skip external links and mailto links
                if (!link.href || link.href.startsWith('mailto:') || 
                    link.href.startsWith('http://') || link.href.startsWith('https://')) {
                    return;
                }
                
                // Fix strange domain parts in URLs
                if (link.href.includes('thefathertrucker.ca')) {
                    // For internal links, make them relative to fix GitHub Pages issues
                    let path = link.href.split('thefathertrucker.ca/')[1] || '';
                    
                    // If we're in a subdirectory, adjust the links accordingly
                    if (pathname.includes('/resources/prayer-guides/')) {
                        if (path === '' || path === 'index.html') {
                            link.href = '../../index.html';
                        } else if (!path.includes('/') || path.includes('about.html') || 
                                   path.includes('resources.html') || path.includes('signup.html') ||
                                   path.includes('privacy-policy.html')) {
                            link.href = '../../' + path;
                        } else if (path.includes('/resources/prayer-guides/')) {
                            // Internal links within prayer guides
                            link.href = path.split('/resources/prayer-guides/')[1] || 'index.html';
                        } else {
                            // Other resource paths
                            link.href = '../../' + path;
                        }
                    } else if (pathname.includes('/resources/recommended-apps/')) {
                        if (path === '' || path === 'index.html') {
                            link.href = '../../index.html';
                        } else if (!path.includes('/') || path.includes('about.html') || 
                                   path.includes('resources.html') || path.includes('signup.html') ||
                                   path.includes('privacy-policy.html')) {
                            link.href = '../../' + path;
                        } else if (path.includes('/resources/recommended-apps/')) {
                            // Internal links within recommended apps
                            link.href = path.split('/resources/recommended-apps/')[1] || 'index.html';
                        } else {
                            // Other resource paths
                            link.href = '../../' + path;
                        }
                    } else {
                        // Root level handling
                        link.href = path;
                    }
                    
                    console.log('Fixed domain URL: ' + link.href);
                }
            });
        });
    }
})();
