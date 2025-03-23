# TODO List for Father Trucker Website

## Priority 1: Essential for Launch

- [x] Fix Flash of Unstyled Content issues across the site (completed March 23, 2025)
- [ ] Set up GitHub repository named `fathertrucker.ca`
- [ ] Push all files from local directory to GitHub
- [ ] Enable GitHub Pages in repository settings
- [ ] Configure custom domain with GoDaddy by adding:
  - A records pointing to GitHub Pages IP addresses
  - CNAME record for www subdomain
- [ ] Enable HTTPS in GitHub Pages settings once domain is verified
- [x] Prepare MailChimp integration for signup form
- [ ] Add proper logo.png and favicon.ico files
- [ ] Test website on mobile devices

## Priority 2: Important Improvements

- [ ] Add meta tags for SEO optimization
- [ ] Add Google Analytics tracking (optional)
- [ ] Review and refine all page content with ministry leadership
- [ ] Test all links and forms for functionality
- [ ] Update image alt texts for accessibility
- [ ] Add proper privacy policy page
- [ ] Create prayer request submission form

## Priority 3: Future Enhancements

- [ ] Add a blog/news section for ministry updates
- [ ] Create a "Trucker-friendly churches" map feature
- [ ] Add integration with YouTube for video content
- [ ] Develop a chaplain contact/request system
- [ ] Add testimonial submission capability
- [ ] Create member login area with exclusive content
- [ ] Develop online community forum for truckers

## Regular Maintenance

- [ ] Keep social media links updated
- [ ] Post new content regularly (blogs, resources)
- [ ] Update copyright year in footer annually
- [ ] Monitor website analytics
- [ ] Check for broken links
- [ ] Review and update content as ministry evolves

## Completed Tasks
- [x] **Extended aggressive anti-FOUC strategy to all resource pages (March 23, 2025)**:
  - Applied inline critical styles to all prayer guides
  - Applied inline critical styles to recommended apps page
  - Improved resource preloading in each page with fetchpriority attributes
  - Removed outdated path-fixer.js references from all resource pages
  - Updated script references to use versioned URLs (script.js?v=20250323)

- [x] **Completely eliminated Flash of Unstyled Content (FOUC) with aggressive inline strategy (March 23, 2025)**:
  - Implemented critical inline styles directly in the HTML head
  - Added immediate-execution JavaScript that runs before any external resources
  - Created multi-layered loading approach with 200ms display delay after load
  - Added 2-second absolute failsafe to guarantee content visibility
  - Applied solution consistently across all site pages

- [x] **Enhanced Flash of Unstyled Content (FOUC) prevention (March 23, 2025) - First approach**:
  - Completely eliminated FOUC with a comprehensive three-part strategy
  - Enhanced preloading with fetchpriority attributes for critical resources
  - Improved resource tracking in anti-fouc.js for more reliable page rendering
  - Added additional CSS controls to prevent layout shifts and flashes
  - Implemented failsafe mechanisms to ensure content always displays
  - Applied consistent improvements across all site pages
  - Added detailed console logging for easier troubleshooting
  
- [x] **Enhanced cache-busting features (March 19, 2025)**:
  - Added JavaScript code to automatically append timestamps to resource URLs
  - Provided strategies for addressing GitHub Pages caching issues
  - Added recommendations for ensuring visitors see the latest content

- [x] **Added support for custom header image on resources page (March 19, 2025)**:
  - Created a new CSS class specifically for the resources page header
  - Modified resources.html to use the new class
  - Prepared the site to use a custom image called 'resources-header.jpg'
  - Maintained the original page-header class for other internal pages

- [x] **Updated header styling (March 19, 2025)**:
  - Changed header background from white to blue (same blue as the original "Father Trucker" text)
  - Changed all text in the header to white for better contrast
  - Made both buttons in the header ("Talk to a Chaplain" and "Sign Up") the same orange color
  - Updated inline styles in all HTML files to ensure the logo text appears white
  - Modified mobile menu background to match the blue header
- [x] **Consolidated and cleaned up markdown documentation (March 18, 2025)**:
  - Created a single CONSOLIDATED.md file containing information from:
    - GITHUB-SETUP.md
    - LINK-FIXES.md
    - MAINTENANCE.md
    - PRE-LAUNCH-CHECKLIST.md
    - README-FINAL.md
    - SUMMARY.md
    - TESTING-NOTES.md
  - Kept README.md separate as requested
  - Organized the consolidated document with clear section headings and table of contents
  - Replaced content of original markdown files with reference notes pointing to CONSOLIDATED.md

- [x] **Fixed browser caching issues (March 18, 2025)**:
  - Added cache-busting version parameters to all JavaScript references (script.js?v=20250318)
  - Updated all HTML files to remove references to link-fixing scripts
  - Created a clear-cache.html page with instructions for users to clear their cache
  - Fixed absolute paths in signup.html to use relative paths
  - Implemented proper no-cache meta tags on key pages

- [x] **Complete removal of all link-fixing JavaScript (March 18, 2025)**:
  - Removed all JavaScript files related to URL fixing
  - Moved problematic scripts to js/removed-scripts directory
  - Cleaned up script.js to remove URL manipulation code
  - Added js/removed-scripts/ to .gitignore
  - Also removed redirect-fix.html diagnostic page
  - Let the website function with standard HTML relative paths

- [x] Removed problematic JavaScript URL fixing scripts (March 18, 2025):
  - Removed `github-pages-fix.js` and `path-fixer.js` from prayer guides and recommended apps pages
  - These scripts were causing navigation issues rather than fixing them
  - Let the correct relative paths in the HTML function properly without interference
  - Updated LINK-FIXES.md and MEMORY.md to document the solution

- [x] Previously created unified URL fixing solution (March 18, 2025):
  - Created new path-fixer.js script to replace older scripts
  - Fixed issues with links pointing to non-existent inddadex.html
  - Ensured relative paths work correctly in all subdirectories
  - Created LINK-FIXES.md to document the solution

- [x] Fixed broken links in prayer guides and recommended apps pages (March 18, 2025):
  - Added proper logo links on all pages
  - Fixed navigation menu paths with correct relative paths

- [x] Created proper CNAME file for GitHub Pages (March 18, 2025)
- [x] Updated sitemap.xml with absolute URLs (March 18, 2025)
- [x] Created pre-launch checklist document (March 18, 2025)
- [x] Made logo clickable to navigate to home page (March 18, 2025)
- [x] Added three new resource cards (Ellel Ministries, More Than Enough, Gospel First) to resources page (March 18, 2025)
- [x] Added donation button to about.html page linking to onmb.org/donate/ (March 18, 2025)
- [x] Fixed styling issues with donation button on GitHub Pages (March 18, 2025)
- [x] Removed audio resources card from resources.html page (March 18, 2025)
- [x] Created Recommended Apps page with 5 discipleship apps (March 18, 2025)
- [x] Fixed mobile menu layout and centering issues (March 18, 2025)
- [x] Removed absolute URLs to enable GitHub Pages testing before domain setup (March 18, 2025)
- [x] Fixed browser caching issues so new pages display correctly (March 18, 2025)
- [x] Added JavaScript to prevent domain redirections during GitHub Pages testing (March 18, 2025)
- [x] Fixed mobile-specific domain redirection issues (March 18, 2025)
