# Link Fixes for Father Trucker Website

## Latest Update (March 18, 2025)
After further investigation, we found that the JavaScript link-fixing scripts were causing more problems than they were solving. We have:

1. Removed the problematic scripts from the prayer guides and recommended apps pages:
   - Removed `github-pages-fix.js` which was setting incorrect base URLs
   - Removed `path-fixer.js` which was modifying working URLs and creating issues

2. Allowed the native HTML relative paths to function correctly:
   - The existing relative paths (../../index.html, etc.) were already correct
   - The JavaScript "fixes" were interfering with proper navigation

3. Simplified the codebase by removing unnecessary script dependencies

This change should resolve the remaining navigation issues on these pages.

## Issue Summary
The website was experiencing URL issues, particularly in the prayer guides and recommended apps pages:
- Logo links were pointing to non-existent `inddadex.html` files
- Navigation was inconsistent between GitHub Pages and the main domain
- Some links were not properly using relative paths

## Solution Implemented (March 18, 2025)
1. Created a new unified `path-fixer.js` script to handle all URL-related issues
2. Replaced the problematic scripts:
   - Backed up `fix-broken-links.js` and `fix-domain-links.js` to js/backup directory
   - Created a new, more robust solution with `path-fixer.js`
3. Updated all HTML files to use the new script
4. Ensured proper relative paths are used for all navigation

## How the Fix Works
The new `path-fixer.js` script:
- Correctly handles relative paths for both GitHub Pages and the live domain
- Fixes any links that point to non-existent `inddadex.html` files
- Ensures the logo links to the main index page from any depth in the site
- Periodically checks for dynamically added content and fixes those links too

## Files Modified
1. All HTML files in the `resources/prayer-guides/` directory
2. All HTML files in the `resources/recommended-apps/` directory
3. The main `resources.html` page
4. MEMORY.md to document the changes

## Testing
After implementing these changes, check that:
- Logo links correctly go to the main index.html from any page
- Navigation between pages works properly
- No URLs redirect to non-existent pages

## Future Maintenance
If additional issues with URLs are discovered:
- Modify the `path-fixer.js` script to handle those edge cases
- Ensure any new pages added to the site include the script reference
- Test thoroughly on both GitHub Pages and the live domain

## Contact
If issues persist or you need to further refine the URL handling, contact the developer.
