# GitHub Pages Setup Guide for Father Trucker Website

This guide provides step-by-step instructions for setting up the Father Trucker website on GitHub Pages and connecting it to the custom domain (fathertrucker.ca).

## Creating a GitHub Repository

1. **Create a GitHub Account** (if you don't already have one)
   - Go to [github.com](https://github.com) and sign up for an account

2. **Create a New Repository**
   - Click the "+" icon in the top right corner
   - Select "New repository"
   - Enter the repository name: `thefathertrucker.ca`
   - Add a description: "Father Trucker - Power Serve Ministries Website"
   - Choose "Public" repository
   - Check "Add a README file" if not already created
   - Click "Create repository"

## Uploading Files to GitHub

### Using GitHub Web Interface (Simplest Method)

1. **Navigate to Your Repository**
   - Go to `https://github.com/yourusername/thefathertrucker.ca`

2. **Upload Files**
   - Click "Add file" > "Upload files"
   - Drag and drop all files from your local `fathertrucker.ca` folder
   - Add a commit message: "Initial website upload"
   - Click "Commit changes"

### Using Git Command Line (Alternative Method)

If you're comfortable with Git:

1. **Initialize Git Repository Locally**
   ```
   cd C:\Users\pango\Documents\fathertrucker.ca
   git init
   git add .
   git commit -m "Initial commit"
   ```

2. **Connect to GitHub Repository**
   ```
   git remote add origin https://github.com/yourusername/thefathertrucker.ca.git
   git branch -M main
   git push -u origin main
   ```

## Setting Up GitHub Pages

1. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Click "Settings" tab
   - Scroll down to "Pages" section (or click "Pages" in the sidebar)
   - Under "Source", select "main" branch
   - Click "Save"

2. **Configure Custom Domain**
   - In the same "Pages" section, find "Custom domain"
   - Enter your domain: `thefathertrucker.ca`
   - Click "Save"
   - Note: GitHub will create a commit that adds a CNAME file to your repository (if it doesn't already exist)

3. **Enable HTTPS**
   - Check "Enforce HTTPS" box
   - Note: This option might not be available immediately; GitHub needs to verify your domain first

## GoDaddy DNS Configuration

1. **Log in to GoDaddy**
   - Go to [godaddy.com](https://www.godaddy.com) and sign in to your account

2. **Access DNS Settings**
   - Click "My Products"
   - Find your domain (thefathertrucker.ca)
   - Click "DNS" or "Manage DNS"

3. **Add GitHub Pages IP Addresses**
   - Add the following A records:
     - Type: A
     - Name: @
     - Value: 185.199.108.153
     - TTL: 600 seconds (or 1 Hour)
   - Repeat for the following IP addresses:
     - 185.199.109.153
     - 185.199.110.153
     - 185.199.111.153

4. **Add CNAME Record for www Subdomain**
   - Type: CNAME
   - Name: www
   - Value: yourusername.github.io (replace with your GitHub username)
   - TTL: 600 seconds (or 1 Hour)

5. **Save Changes**
   - Click "Save" to apply the DNS changes

## Verifying Setup

1. **Check DNS Propagation**
   - DNS changes can take up to 48 hours to propagate
   - You can check propagation using [whatsmydns.net](https://www.whatsmydns.net)

2. **Verify Website**
   - Once DNS has propagated, visit fathertrucker.ca in your browser
   - Verify that your website loads correctly
   - Check that HTTPS is working by looking for the padlock icon in the browser address bar

3. **Test All Pages**
   - Navigate through all pages to ensure they work correctly
   - Test all links, forms, and other functionality

## Troubleshooting

### Website Not Loading

- Ensure DNS settings are correct
- Verify GitHub Pages is enabled
- Check the CNAME file in your repository has the correct domain
- Wait for DNS propagation (can take up to 48 hours)

### HTTPS Not Working

- Ensure "Enforce HTTPS" is checked in GitHub Pages settings
- Wait for GitHub to provision the SSL certificate (can take up to 24 hours)
- Make sure your browser isn't caching an old HTTP version

### Custom Domain Not Working

- Verify the CNAME file in your repository contains only `thefathertrucker.ca`
- Check GoDaddy DNS settings for any errors
- Ensure the A records point to all four GitHub Pages IP addresses

## Additional Resources

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Managing a Custom Domain for GitHub Pages](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)
- [Troubleshooting Custom Domains](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/troubleshooting-custom-domains-and-github-pages)
