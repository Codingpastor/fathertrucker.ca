/**
 * Comprehensive Path Fixer for Father Trucker Website
 * This script ensures URLs work correctly both on GitHub Pages and with the domain
 * Updated March 18, 2025 to fix all URL-related issues
 */

document.addEventListener('DOMContentLoaded', function() {
    console.log('Comprehensive Path Fixer running - ensuring all URLs work properly');
    
    // Get the current hostname to determine if we're on GitHub Pages or the domain
    const isGitHubPages = window.location.hostname.includes('github.io');
    const host = window.location.hostname;
    
    // Determine if we're in a subdirectory and which one
    const inPrayerGuides = window.location.pathname.includes('/resources/prayer-guides/');
    const inRecommendedApps = window.location.pathname.includes('/resources/recommended-apps/');
    
    // Fix common issues with URLs
    function fixLinks() {
        // Get all links on the page
        const links = document.querySelectorAll('a');
        
        links.forEach(link => {
            if (!link.getAttribute('href')) return;
            let href = link.getAttribute('href');
            
            // Skip external links and mailto links
            if (href.startsWith('http') || href.startsWith('mailto:')) return;
            
            // Fix issue with inddadex.html
            if (href.includes('inddadex.html')) {
                href = href.replace('inddadex.html', 'index.html');
                link.setAttribute('href', href);
                console.log(`Fixed broken link: ${link.getAttribute('href')} → ${href}`);
            }
            
            // Handle links containing the domain
            if (href.includes('thefathertrucker.ca/')) {
                // Extract just the path portion after the domain
                const pathParts = href.split('thefathertrucker.ca/');
                if (pathParts.length > 1) {
                    const path = pathParts[1];
                    
                    // If we're in a subdirectory, we need to adjust relative paths
                    if (inPrayerGuides || inRecommendedApps) {
                        // If it's a link to the root or main sections
                        if (path === 'index.html' || path === '') {
                            href = '../../index.html';
                        } else if (path === 'about.html') {
                            href = '../../about.html';
                        } else if (path === 'resources.html') {
                            href = '../../resources.html';
                        } else if (path === 'signup.html') {
                            href = '../../signup.html';
                        } else if (path === 'privacy-policy.html') {
                            href = '../../privacy-policy.html';
                        } else if (path.startsWith('resources/prayer-guides/') && inPrayerGuides) {
                            // Simplify links within the same directory
                            href = path.replace('resources/prayer-guides/', '');
                        } else if (path.startsWith('resources/recommended-apps/') && inRecommendedApps) {
                            // Simplify links within the same directory
                            href = path.replace('resources/recommended-apps/', '');
                        } else {
                            // For other paths, use proper relative paths
                            href = '../../' + path;
                        }
                    } else {
                        // If we're at the root level, just use the path
                        href = path;
                    }
                    
                    link.setAttribute('href', href);
                    console.log(`Fixed domain link: ${link.getAttribute('href')} → ${href}`);
                }
            }
            
            // Special handling for GitHub Pages base path
            if (isGitHubPages) {
                // On GitHub Pages, relative URLs need the repository name as a prefix
                // if they don't already have it and are absolute paths
                if (href.startsWith('/') && !href.startsWith('/fathertrucker.ca/')) {
                    href = '/fathertrucker.ca' + href;
                    link.setAttribute('href', href);
                    console.log(`Added GitHub Pages prefix: ${link.getAttribute('href')} → ${href}`);
                }
            }
        });
    }
    
    // Fix base tag if present - it can cause issues
    const baseTags = document.getElementsByTagName('base');
    for (let i = 0; i < baseTags.length; i++) {
        console.log('Removing base tag that could cause URL issues');
        baseTags[i].remove();
    }
    
    // Run the fix immediately
    fixLinks();
    
    // Also run after a short delay to catch any dynamically loaded content
    setTimeout(fixLinks, 500);
    
    // And periodically check for any dynamic changes
    setInterval(fixLinks, 2000);
    
    // Intercept any potential problematic navigations
    window.addEventListener('click', function(e) {
        // If it's a link and contains thefathertrucker.ca in the href
        if (e.target.tagName === 'A' || e.target.parentNode.tagName === 'A') {
            const link = e.target.tagName === 'A' ? e.target : e.target.parentNode;
            const href = link.getAttribute('href');
            
            if (href && href.includes('thefathertrucker.ca/resources/')) {
                e.preventDefault();
                console.log('Intercepted problematic navigation: ' + href);
                
                // Fix the href and navigate manually
                let fixedHref;
                if (inPrayerGuides) {
                    if (href.includes('/resources/prayer-guides/')) {
                        fixedHref = href.split('/resources/prayer-guides/')[1] || 'index.html';
                    } else if (href.includes('/resources/')) {
                        fixedHref = '../../' + href.split('/resources/')[1];
                    } else {
                        fixedHref = '../../index.html';
                    }
                } else if (inRecommendedApps) {
                    if (href.includes('/resources/recommended-apps/')) {
                        fixedHref = href.split('/resources/recommended-apps/')[1] || 'index.html';
                    } else if (href.includes('/resources/')) {
                        fixedHref = '../../' + href.split('/resources/')[1];
                    } else {
                        fixedHref = '../../index.html';
                    }
                } else {
                    fixedHref = href.split('thefathertrucker.ca/')[1] || 'index.html';
                }
                
                console.log('Navigating to fixed URL: ' + fixedHref);
                window.location.href = fixedHref;
            }
        }
    }, true);
});
