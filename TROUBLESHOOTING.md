# Troubleshooting Guide for Father Trucker Website

## GitHub Pages Caching Issues

### Problem: Changes don't appear after deploying to GitHub Pages

GitHub Pages uses aggressive caching strategies which can sometimes prevent your updates from appearing immediately after deployment. Here are several solutions:

#### 1. Force a cache refresh in your browser

- **Chrome/Edge**: Press `Ctrl+F5` or `Shift+F5` (Windows/Linux) or `Cmd+Shift+R` (Mac)
- **Firefox**: Press `Ctrl+Shift+R` (Windows/Linux) or `Cmd+Shift+R` (Mac)
- **Safari**: Press `Option+Cmd+E` to clear the cache, then reload

#### 2. Use query parameters for cache busting

We've implemented two cache-busting mechanisms:

1. **Version parameters** in HTML files:
   ```html
   <link rel="stylesheet" href="css/styles.css?v=20250319">
   <script src="js/script.js?v=20250319"></script>
   ```
   Update these version numbers when making changes.

2. **Automatic timestamp appending** via JavaScript:
   The script.js file contains code that automatically adds timestamps to resource URLs.

#### 3. Update your deployment practices

- **Wait for cache invalidation**: GitHub Pages can take up to 10 minutes to fully propagate changes
- **Check with private/incognito mode**: This uses a fresh cache
- **Use the site's clear-cache.html page**: We've created this specifically to help visitors clear their cache

#### 4. Force GitHub Pages to rebuild

Sometimes you need to trigger a new build:

1. Make a small change to any file (even adding a space)
2. Commit and push to GitHub
3. In your repository settings, toggle GitHub Pages off and back on

#### 5. Check your DNS settings

If using a custom domain, make sure your DNS records are correctly pointing to GitHub Pages IP addresses:
- 185.199.108.153
- 185.199.109.153
- 185.199.110.153
- 185.199.111.153

## Browser Console Errors

### Errors from browser extensions

Many errors in the browser console (especially those referencing "sw.js") are likely coming from browser extensions rather than your website code. You can test this by:

1. Opening the site in a private/incognito window (which disables extensions)
2. Temporarily disabling extensions to see if errors persist

### JavaScript errors

If you're seeing legitimate JavaScript errors from your site:

1. Check that all script files are being loaded correctly
2. Verify that scripts are in the correct order
3. Make sure external dependencies (like CDN-hosted libraries) are available

## Responsive Design Issues

If parts of the site don't look right on mobile devices:

1. Test using Chrome DevTools device emulation
2. Check CSS media queries in styles.css
3. Verify viewport meta tag is present in all HTML files:
   ```html
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   ```

## Image Loading Issues

If images aren't loading:

1. Check file paths and case sensitivity (GitHub Pages is case-sensitive)
2. Verify image files exist in the correct location
3. Optimize images for web (compress large files)
4. Use relative paths for all images

## Getting Help

If you encounter issues not addressed here:

1. Check [GitHub Pages documentation](https://docs.github.com/en/pages)
2. Search for similar issues on [Stack Overflow](https://stackoverflow.com/questions/tagged/github-pages)
3. Reach out to your web development team or consultant
