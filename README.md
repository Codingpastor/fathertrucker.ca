# Father Trucker - Power Serve Ministries Website

This repository contains the website for Father Trucker (Power Serve Ministries), a Christian ministry focused on supporting truckers in their faith journey.

## Website Structure

- **index.html** - Homepage
- **about.html** - About the ministry
- **resources.html** - Resources for truckers
- **signup.html** - Newsletter signup form (MailChimp integration)
- **css/** - Contains styling files
- **js/** - Contains JavaScript files
- **images/** - Contains image assets

## Setup and Deployment Instructions

### GitHub Pages Deployment

1. Create a GitHub repository named `fathertrucker.ca`
2. Push all files from this directory to the repository
3. In the repository settings, go to the "Pages" section
4. Under "Source", select the branch you want to deploy (usually `main`)
5. Save the settings and GitHub will provide a URL where your site is published

### Custom Domain Setup

To use the fathertrucker.ca domain:

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

## MailChimp Integration

To complete the MailChimp integration:

1. Create a MailChimp account if you don't have one
2. Create a new audience for Father Trucker subscribers
3. In MailChimp:
   - Go to "Audience" → "Signup forms" → "Embedded forms"
   - Customize your form fields
   - Get your form action URL (looks like: `https://yourdomain.us1.list-manage.com/subscribe/post?u=XXXX&amp;id=XXXX`)
   - Replace the placeholder URL in signup.html with your actual MailChimp form action URL
   - Update the hidden field values as needed

## Future Tasks

- Add actual social media links once accounts are created
- Upload real images to the images directory
- Customize content based on ministry needs
- Add actual contact information
- Consider adding a blog section for ministry updates

## Technologies Used

- HTML5
- CSS3
- JavaScript
- Font Awesome for icons
- Google Fonts
- MailChimp for newsletter signup

## Maintenance

To update the website:
1. Make changes to the files locally
2. Commit and push changes to GitHub
3. GitHub Pages will automatically update the live site
