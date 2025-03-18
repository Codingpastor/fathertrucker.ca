# Project Memory Tracking

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
- Removed problematic JavaScript URL fixing scripts (March 18, 2025):
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
