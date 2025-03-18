# GitHub Pages Testing Setup

This document explains the changes made to enable testing on GitHub Pages before connecting the fathertrucker.ca domain.

## Current State

The website has been modified to work with GitHub Pages' default URL pattern (`username.github.io/repository-name`) by:

1. Renaming the `CNAME` file to `CNAME.bak` to prevent GitHub from trying to use the custom domain
2. Removing all absolute URLs that referenced fathertrucker.ca
3. Updating all meta tags to use relative paths
4. Modifying the sitemap.xml to use relative paths
5. Adding a special JavaScript fix (`js/fix-domain-links.js`) that prevents redirection to the domain
6. Disabling the domain-specific redirects in .htaccess

## How to Test on GitHub Pages

1. Push all files to your GitHub repository
2. Enable GitHub Pages in repository settings (Settings → Pages)
   - Set the source to the main branch
   - Do NOT configure a custom domain yet
3. GitHub will provide a URL like `username.github.io/fathertrucker.ca`
4. Test all pages and navigation using this URL

## Restoring for Production

When you're ready to connect the domain and go live:

1. Rename `CNAME.bak` back to `CNAME`
2. Update the meta tags in all HTML files:
   - Find: `<meta property="og:image" content="images/logo.png">`
   - Replace with: `<meta property="og:image" content="https://fathertrucker.ca/images/logo.png">`
   - Find: `<meta property="og:url" content="">`
   - Replace with: `<meta property="og:url" content="https://fathertrucker.ca/page-name.html">` (adjust for each page)
3. Update the sitemap.xml:
   - Change all `<loc>page.html</loc>` to `<loc>https://fathertrucker.ca/page.html</loc>`
4. Remove or comment out the fix-domain-links.js script tag from all HTML files
5. Uncomment the www to non-www redirect in .htaccess
6. Configure DNS settings in GoDaddy as described in GITHUB-SETUP.md
7. In GitHub repository settings, set the custom domain to fathertrucker.ca
8. Enable HTTPS once the domain is verified

## Files Modified

The following files were modified to remove absolute URLs:

- index.html
- about.html
- resources.html
- signup.html
- privacy-policy.html
- resources/recommended-apps/index.html
- sitemap.xml
- .htaccess

New files created:

- js/fix-domain-links.js (special script to prevent domain redirection)
- CNAME.bak (renamed from CNAME)

## Domain Configuration

Once testing is complete, follow the instructions in GITHUB-SETUP.md to properly configure the domain.
