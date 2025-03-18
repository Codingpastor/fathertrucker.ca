#!/bin/bash

# This script updates all HTML files to make the logo clickable and link to the home page

# Function to update a file
update_file() {
    local file="$1"
    echo "Processing $file..."
    
    # Use sed to modify the logo section
    sed -i 's/<div class="logo">/<div class="logo"><a href="index.html" style="text-decoration: none; color: inherit; display: flex; align-items: center; gap: 15px;">/g' "$file"
    sed -i 's/<\/div><!-- end of logo content -->/\n                <\/a>\n            <\/div>/g' "$file"
    
    # If there's no end of logo comment marker, try another approach
    sed -i 's/<div>\n                    <h1>Father Trucker<\/h1>\n                    <p>Power Serve Ministries<\/p>\n                <\/div>\n            <\/div>/<div>\n                    <h1>Father Trucker<\/h1>\n                    <p>Power Serve Ministries<\/p>\n                <\/div>\n                <\/a>\n            <\/div>/g' "$file"
    
    echo "Updated $file"
}

# Find all HTML files and update them
find . -name "*.html" | while read file; do
    update_file "$file"
done

echo "All HTML files have been updated."
