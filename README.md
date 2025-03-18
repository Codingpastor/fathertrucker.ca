# Father Trucker - Power Serve Ministries Website

This repository contains the website for Father Trucker (Power Serve Ministries), a Christian ministry focused on supporting truckers in their faith journey.

## Website Structure

- **index.html** - Homepage with mission statement and ministry overview
- **about.html** - About the ministry, vision, and values
- **resources.html** - Resources for truckers including social media and support tools
- **signup.html** - Newsletter signup form (MailChimp integration)
- **css/** - Contains styling files
  - **styles.css** - Main stylesheet
- **js/** - Contains JavaScript files
  - **script.js** - Main JavaScript functionality
- **images/** - Contains image assets
  - **logo.png** - Father Trucker logo
  - **favicon.ico** - Site favicon
  - **highway.jpg** - Homepage hero background
  - **truck.jpg** - Page headers background

## Setup and Deployment Instructions

### Local Development

1. Clone this repository to your local machine
2. Make changes to the files as needed
3. Test locally by opening index.html in a web browser

### GitHub Pages Deployment

1. Create a GitHub repository named `fathertrucker.ca`
2. Push all files from this directory to the repository:
   ```
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/fathertrucker.ca.git
   git push -u origin main
   ```
3. In the GitHub repository settings, go to the "Pages" section
4. Under "Source", select the branch you want to deploy (usually `main`)
5. Save the settings and GitHub will provide a URL where your site is published

### Custom Domain Setup with GoDaddy

1. In the GitHub Pages settings, enter `fathertrucker.ca` in the "Custom domain" field
2. Save the settings
3. In GoDaddy (where the domain is registered):
   - Log in to your GoDaddy account
   - Go to your domain management page
   - Find DNS settings
   - Add the following records:
     - A record: `@` pointing to `185.199.108.153`
     - A record: `@` pointing to `185.199.109.153`
     - A record: `@` pointing to `185.199.110.153`
     - A record: `@` pointing to `185.199.111.153`
     - CNAME record: `www` pointing to `yourusername.github.io` (replace with your GitHub username)

4. Wait for DNS changes to propagate (can take up to 48 hours)
5. Once propagation is complete, check the "Enforce HTTPS" option in GitHub Pages settings

### Important Files

- **CNAME** - Contains the custom domain name (fathertrucker.ca)
- **.gitignore** - Specifies files Git should ignore

## MailChimp Integration

The signup form is set up to work with MailChimp. To complete the integration:

1. Create a MailChimp account if you don't have one
2. Create a new audience for Father Trucker subscribers
3. In MailChimp:
   - Go to "Audience" → "Signup forms" → "Embedded forms"
   - Customize your form fields
   - Get your form action URL (looks like: `https://yourdomain.us1.list-manage.com/subscribe/post?u=XXXX&amp;id=XXXX`)
   - Replace the placeholder URL in signup.html with your actual MailChimp form action URL
   - Update the hidden field values as needed

## Making Updates

To update the website:

1. Make changes to the files locally
2. Test changes in a web browser
3. Commit and push changes to GitHub:
   ```
   git add .
   git commit -m "Description of changes"
   git push
   ```
4. GitHub Pages will automatically update the live site

## Adding Content

### Adding New Pages

1. Create a new HTML file in the root directory
2. Copy the header and footer structure from an existing page
3. Update the navigation to include a link to the new page
4. Add your content in the main section

### Adding Images

1. Place new images in the images/ directory
2. Use relative paths to reference them in HTML: `src="images/your-image.jpg"`
3. Ensure images are web-optimized (compressed, appropriate dimensions)

## Maintenance Checklist

- [ ] Regularly update content
- [ ] Check all links periodically for functionality
- [ ] Update copyright year in footer annually
- [ ] Keep social media links current
- [ ] Test site on various devices and browsers

## Future Enhancements

See TODO.md for a prioritized list of future enhancements and improvements.

## Technologies Used

- HTML5
- CSS3
- JavaScript
- Font Awesome for icons
- Google Fonts
- MailChimp for newsletter signup
