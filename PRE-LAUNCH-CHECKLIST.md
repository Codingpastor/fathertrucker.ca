# Pre-Launch Checklist for Father Trucker Website

## Already Done
- [x] Made logo clickable to navigate to home page
- [x] Added donation button to about page
- [x] Fixed styling issues with donation button for GitHub Pages
- [x] Added three new resource cards to resources page
- [x] Created proper CNAME file for GitHub Pages
- [x] Updated sitemap.xml with absolute URLs

## GitHub Steps
- [ ] Push all changes to GitHub repository
- [ ] Enable GitHub Pages in repository settings
  - Go to repository > Settings > Pages
  - Source: Deploy from a branch
  - Branch: main / (root)
  - Click Save
- [ ] Add custom domain in GitHub Pages settings
  - Enter: thefathertrucker.ca
  - Save
- [ ] Wait for GitHub Pages to verify domain
- [ ] Enable "Enforce HTTPS" option

## GoDaddy DNS Configuration
- [ ] Log in to GoDaddy account
- [ ] Access DNS settings for thefathertrucker.ca
- [ ] Configure A records pointing to GitHub Pages IPs:
  - Type: A, Name: @, Value: 185.199.108.153, TTL: 1 hour
  - Type: A, Name: @, Value: 185.199.109.153, TTL: 1 hour
  - Type: A, Name: @, Value: 185.199.110.153, TTL: 1 hour
  - Type: A, Name: @, Value: 185.199.111.153, TTL: 1 hour
- [ ] Configure CNAME record for www subdomain:
  - Type: CNAME, Name: www, Value: codingpastor.github.io, TTL: 1 hour

## Final Checks
- [ ] Verify website loads at https://thefathertrucker.ca
- [ ] Test all pages and links
- [ ] Check mobile responsiveness
- [ ] Verify donation button works properly
- [ ] Ensure all external links open in new tabs

## Notes
- DNS changes may take up to 48 hours to fully propagate
- GitHub Pages may take a few minutes to publish changes
- If any issues arise, check GitHub's troubleshooting guide for custom domains
