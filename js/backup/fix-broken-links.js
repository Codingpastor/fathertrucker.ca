/**
 * This script fixes broken links that might be pointing to inddadex.html
 */

document.addEventListener('DOMContentLoaded', function() {
    // Fix any links that incorrectly point to inddadex.html
    document.querySelectorAll('a').forEach(link => {
        // Check for the specific broken link pattern
        if (link.href.indexOf('inddadex.html') !== -1) {
            console.log('Found broken link: ' + link.href);
            
            // Replace with correct index.html link
            const fixedHref = link.href.replace('inddadex.html', 'index.html');
            link.href = fixedHref;
            console.log('Fixed to: ' + fixedHref);
        }
        
        // Also check for any other common misspellings
        const misspellings = ['index.htm', 'indx.html', 'inde.html', 'indez.html'];
        misspellings.forEach(misspelling => {
            if (link.href.indexOf(misspelling) !== -1) {
                console.log('Found potentially broken link: ' + link.href);
                
                // Replace with correct index.html link
                const fixedHref = link.href.replace(misspelling, 'index.html');
                link.href = fixedHref;
                console.log('Fixed to: ' + fixedHref);
            }
        });
    });
});

// Also run this check periodically for dynamically added links
setInterval(function() {
    document.querySelectorAll('a').forEach(link => {
        if (link.href.indexOf('inddadex.html') !== -1) {
            const fixedHref = link.href.replace('inddadex.html', 'index.html');
            link.href = fixedHref;
            console.log('Fixed dynamically added broken link from: ' + link.href + ' to: ' + fixedHref);
        }
        
        // Check for other misspellings too
        const misspellings = ['index.htm', 'indx.html', 'inde.html', 'indez.html'];
        misspellings.forEach(misspelling => {
            if (link.href.indexOf(misspelling) !== -1) {
                const fixedHref = link.href.replace(misspelling, 'index.html');
                link.href = fixedHref;
                console.log('Fixed dynamically added potentially broken link from: ' + link.href + ' to: ' + fixedHref);
            }
        });
    });
}, 1000); // Check every second