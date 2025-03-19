# Project Memory Tracking

## Latest Update (March 19, 2025)
- **Added support for custom header image on resources page (March 19, 2025)**:
  - Created a new CSS class `.resources-header` specifically for the resources page header
  - Modified resources.html to use the new class
  - Prepared the site to use a custom image called 'resources-header.jpg' for the resources page
  - Maintained the original `.page-header` class for other internal pages

- **Updated header styling (March 19, 2025)**:
  - Changed header background from white to blue (same blue as the original "Father Trucker" text)
  - Changed all text in the header to white for better contrast
  - Made both buttons in the header ("Talk to a Chaplain" and "Sign Up") the same orange color
  - Updated inline styles in all HTML files to ensure the logo text appears white
  - Modified mobile menu background to match the blue header

## Previous Updates
- **Cleaned up documentation files (March 18, 2025)**:
  - After consolidating content into CONSOLIDATED.md, replaced the content of individual markdown files with a reference note
  - Updated the following files to point to CONSOLIDATED.md:
    - GITHUB-SETUP.md
    - LINK-FIXES.md
    - MAINTENANCE.md
    - PRE-LAUNCH-CHECKLIST.md
    - README-FINAL.md
    - SUMMARY.md
    - TESTING-NOTES.md
  - This approach preserves file links but directs users to the consolidated information
  - GitHub repository will maintain a cleaner structure while preserving the file history

## Project Overview
- **Project Name**: Father Trucker / Power Serve Ministries Website
- **Domain**: thefathertrucker.ca (registered on GoDaddy)
- **Hosting**: GitHub Pages (free hosting)
- **Purpose**: Create a simple website for a Christian ministry focused on reaching truckers

## Ministry Information
- **Name**: Power Serve Ministries / Father Trucker
- **Mission**: "To engage with truckers right where they are so that many would become fully committed, connected, and equipped disciples of Jesus Christ for the Glory of God and that they might become fully alive."
- **Values**: Focus on connecting truckers to local churches as "the local church is the hope of the world"
- **Biblical Reference**: Luke 14:23 - "And the master said to the servant, 'Go out to the highways and hedges and compel people to come in, that my house may be filled.'"
- **Founder**: Rev. Darren Milley, a retired Navy Lieutenant Chaplain

## Current Initiatives
- Social media presence ("The Father Trucker") on YouTube, Instagram, and TikTok
- Christian Truckers Toolbox app for discipleship tools
- Chaplain access feature in the app

## Website Structure
- **Pages**:
  - Home (index.html)
  - About (about.html)
  - Resources (resources.html)
  - Sign Up (signup.html)
  - Privacy Policy (privacy-policy.html)

## Completed Tasks
- **Consolidated all markdown documentation (March 18, 2025)**:
  - Created a single CONSOLIDATED.md file containing information from:
    - GITHUB-SETUP.md
    - LINK-FIXES.md
    - MAINTENANCE.md
    - PRE-LAUNCH-CHECKLIST.md
    - README-FINAL.md
    - SUMMARY.md
    - TESTING-NOTES.md
  - Kept README.md separate as requested
  - Organized the consolidated document with clear section headings
  - Maintained TODO.md as a separate file for tracking tasks

- **Fixed browser caching issues (March 18, 2025)**:
  - Added cache-busting version parameters to JavaScript includes (script.js?v=20250318)
  - Removed all references to JavaScript link-fixing scripts from HTML files
  - Created a clear-cache.html page with instructions for visitors to clear their browser cache
  - Fixed absolute paths in signup.html (/index.html → index.html)
  - Removed mobile testing notice that referenced the deleted redirect-fix.html page

- **Complete removal of all link-fixing JavaScript (March 18, 2025)**:
  - Removed all JavaScript files related to URL fixing
  - Moved the following scripts to js/removed-scripts directory:
    - github-pages-fix.js
    - path-fixer.js
    - fix-broken-links.js
    - fix-domain-links.js
    - Backup versions of these scripts
    - redirect-fix.html diagnostic page
    - update_logo_links.sh bash script
  - Cleaned up script.js to remove URL manipulation code
  - Added js/removed-scripts/ to .gitignore
  - Let the website function with standard HTML relative paths

- Previously removed problematic JavaScript URL fixing scripts (March 18, 2025):
  - Removed `github-pages-fix.js` and `path-fixer.js` from prayer guides and recommended apps pages
  - These scripts were causing issues with links rather than fixing them
  - The relative paths in the HTML were already correct and working properly without these scripts

- Previously fixed broken links and URL issues throughout the site (March 18, 2025):
  - Created new unified `path-fixer.js` script to handle all URL issues
  - Replaced ineffective `fix-broken-links.js` and `fix-domain-links.js` scripts
  - Fixed issues with links that were pointing to non-existent pages like `inddadex.html`
  - Ensured relative paths work correctly for both GitHub Pages and the main domain
- Previously fixed broken links in prayer guides and recommended apps pages (March 18, 2025):
  - Corrected navigation menu links with proper relative paths
  - Fixed logo links to ensure they point to the main site index
  - Removed references to non-existent pages like 'inddadex.html'
- Prepared site for launch on GitHub Pages:
  - Created proper CNAME file with thefathertrucker.ca domain
  - Updated sitemap.xml with absolute URLs
  - Created pre-launch checklist document
- Made logo clickable to navigate to home page across all site pages
- Added three new resource cards to resources.html page:
  - Ellel Ministries Canada - healing ministry and discipleship training
  - More Than Enough - financial fitness resources based on biblical principles
  - Gospel First Ministries - free resources for understanding and sharing the Gospel
- Added donation button to about.html page linking to onmb.org/donate/ (March 18, 2025)
- Fixed GitHub Pages styling issues for donation button:
  - Added version parameter to CSS links to prevent caching
  - Created dedicated donate-styles.css file with !important flags
  - Added inline styles as a fallback
- Updated TODO.md to reflect these changes

## Future Tasks
- Refer to TODO.md for a complete list of planned tasks and priorities
- Priority items include GitHub setup, domain configuration, and content refinement

## Notes
- The website uses a responsive design with a color scheme of primary blue (#3a5a78) and secondary orange (#d9621e)
- The website emphasizes connecting truckers to resources, community, and support specifically designed for the trucking lifestyle
- The site follows a clean, mobile-friendly design with clear call-to-action elements
