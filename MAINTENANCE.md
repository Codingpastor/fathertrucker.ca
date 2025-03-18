# Father Trucker Website Maintenance Guide

This document provides step-by-step instructions for maintaining and updating the Father Trucker website.

## Regular Maintenance Tasks

### Monthly Checks

1. **Test All Links**
   - Click through all navigation links
   - Test "Talk to a Chaplain" email link
   - Check social media links
   - Verify all resource links work properly

2. **Content Updates**
   - Review content for accuracy and relevance
   - Update any time-sensitive information
   - Consider adding new testimonials if available

3. **Form Testing**
   - Submit a test entry to the signup form
   - Verify that form submissions are received in MailChimp

### Quarterly Tasks

1. **Image Optimization**
   - Check that all images are loading properly
   - Optimize any new images for web use
   - Consider refreshing hero images if they feel dated

2. **Browser Testing**
   - Test the website in Chrome, Firefox, Safari, and Edge
   - Check mobile responsiveness on different devices
   - Fix any layout or display issues

3. **SEO Review**
   - Update meta descriptions if needed
   - Check Google Search Console for any issues
   - Review and update keywords if necessary

### Annual Tasks

1. **Update Copyright Year**
   - Update the year in the footer copyright notice

2. **Domain and Hosting Review**
   - Verify domain registration is current
   - Check GitHub Pages settings
   - Review SSL certificate status

3. **Content Audit**
   - Review all pages for outdated content
   - Update staff/leadership information if changed
   - Consider refreshing testimonials and stories

## Making Updates

### How to Update Content

1. **Basic Text Changes**
   - Open the relevant HTML file in a text editor
   - Locate the content you want to change
   - Make your edits
   - Save the file

2. **Adding/Replacing Images**
   - Place new images in the `images/` directory
   - Update the relevant HTML files to reference the new images
   - Make sure to include proper alt text

3. **Updating Links**
   - Find the `<a href="...">` tag in the HTML
   - Replace the URL in the href attribute
   - Test the new link after deployment

### Deploying Updates

1. **Local Testing**
   - Open the modified pages in a web browser to test changes
   - Check for any layout issues or broken elements

2. **Committing Changes to GitHub**
   ```
   git add .
   git commit -m "Description of changes"
   git push
   ```

3. **Verify Deployment**
   - Wait a few minutes for GitHub Pages to update
   - Visit the live site to verify changes are visible
   - Check on both desktop and mobile devices

## Adding New Pages

1. **Create the HTML File**
   - Copy an existing page as a template
   - Update the title, meta tags, and content
   - Save with a descriptive filename (e.g., `prayer-resources.html`)

2. **Update Navigation**
   - Add the new page to the navigation menu in all HTML files
   - Example:
     ```html
     <li><a href="prayer-resources.html">Prayer Resources</a></li>
     ```

3. **Update Sitemap**
   - Add the new page to `sitemap.xml`
   - Update the lastmod date

## Troubleshooting Common Issues

### Page Not Displaying Correctly

1. Check for HTML errors (missing tags, etc.)
2. Verify CSS references are correct
3. Ensure all referenced images exist

### Form Submission Problems

1. Verify MailChimp form action URL is correct
2. Check for JavaScript errors in the console
3. Test with different browsers

### Custom Domain Issues

1. Verify DNS settings in GoDaddy
2. Check CNAME file contains correct domain
3. Ensure HTTPS is properly configured in GitHub Pages

## Contact Information

For technical assistance with the website, contact:
- Website Administrator: [Add Contact Information]
- Ministry Lead: [Add Contact Information]
