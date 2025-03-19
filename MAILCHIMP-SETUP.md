# Mailchimp Integration Guide

This document provides instructions for completing the Mailchimp integration with the Father Trucker website's signup form.

## Step 1: Create/Access Your Mailchimp Account

1. Sign up for a Mailchimp account at [mailchimp.com](https://mailchimp.com/) if you don't have one
2. Log in to your existing Mailchimp account

## Step 2: Create an Audience

1. In your Mailchimp dashboard, go to **Audience** > **Audience dashboard**
2. If you don't have an audience yet, click **Create Audience** and follow the prompts
3. If you already have an audience, you can use it or create a new one specifically for Father Trucker subscribers

## Step 3: Configure Your Signup Form

1. In Mailchimp, go to **Audience** > **Signup forms** > **Embedded forms**
2. Select the **Unstyled** option (this gives you just the form fields without Mailchimp styling)
3. Look for the generated HTML code - you'll need to extract two key pieces of information:
   - The form action URL, which looks like: `https://yourdomain.us1.list-manage.com/subscribe/post?u=a1b2c3d4e5f6g7h8i9j0&id=1a2b3c4d5e`
   - The hidden field name, which looks like: `b_a1b2c3d4e5f6g7h8i9j0_1a2b3c4d5e`

## Step 4: Update the Signup Form in signup.html

Open the file `C:\\Users\\pango\\Documents\\fathertrucker.ca\\signup.html` and make these changes:

1. Replace the form action URL:
   ```html
   <form id="mc-embedded-signup-form" action="https://yourdomain.us1.list-manage.com/subscribe/post?u=XXXXXXXXXXXXXXXXXXXXXXXX&amp;id=XXXXXXXXXX" method="post" name="mc-embedded-signup-form" class="validate" target="_blank" novalidate>
   ```
   Replace with your actual Mailchimp form action URL.

2. Update the hidden field:
   ```html
   <div style="position: absolute; left: -5000px;" aria-hidden="true">
       <input type="text" name="b_XXXXXXXXXXXXXXXXXXXXXXXX_XXXXXXXXXX" tabindex="-1" value="">
   </div>
   ```
   Replace `b_XXXXXXXXXXXXXXXXXXXXXXXX_XXXXXXXXXX` with your actual hidden field name.

## Step 5: Configure Groups (Optional)

If you want to use the interest groups in your form (Daily Devotionals, Bible Study Resources, etc.):

1. Go to **Audience** > **Signup forms** > **Form builder**
2. Add a new field > **Checkboxes**
3. Label it "What content are you most interested in?"
4. Add all the options from your form
5. Save the field
6. Return to the **Embedded forms** page and get the updated form code
7. Update the group IDs in your form to match the ones from Mailchimp

## Step 6: Test Your Form

1. Push your changes to GitHub
2. Visit your signup page
3. Fill out the form and submit it
4. Verify that the subscriber appears in your Mailchimp audience
5. Make sure they receive the welcome/confirmation email

## Step 7: Form Success Handling Options

You have two options for handling successful form submissions:

1. **Default Mailchimp Confirmation Page:**
   - Leave the form as is with `target="_blank"`
   - When users submit the form, they'll be redirected to Mailchimp's confirmation page

2. **Custom Success Message:**
   - Uncomment the JavaScript code in the signup.html file:
   ```javascript
   form.style.display = 'none';
   successMessage.style.display = 'block';
   window.scrollTo(0, successMessage.offsetTop - 100);
   return false;
   ```
   - This will show your custom success message without leaving the page

## Help Resources

- [Mailchimp Embedded Form Documentation](https://mailchimp.com/help/add-a-signup-form-to-your-website/)
- [Mailchimp API Documentation](https://mailchimp.com/developer/marketing/docs/fundamentals/)
- [Mailchimp List Field Reference](https://mailchimp.com/help/all-the-merge-tags-cheat-sheet/)

## Troubleshooting

- **Form submits but no subscribers appear:** Check that your Mailchimp account is active and that your audience is configured correctly.
- **Error messages on submission:** Verify that all required fields are properly named and that your form action URL is correct.
- **Styling issues:** The form is styled with the site's CSS. If you need to adjust styling, edit the CSS in the styles.css file or the inline styles in signup.html.
