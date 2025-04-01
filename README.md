# Iron Cite Website

## Email Functionality Setup

The contact form on this website uses EmailJS to send emails without a backend server. To make it work:

1. Create a free account at [EmailJS](https://www.emailjs.com/)
2. Create an Email Service (Gmail, Outlook, etc.)
3. Create an Email Template with the following variables:
   - `from_name` - Sender's name
   - `from_email` - Sender's email
   - `project_type` - Type of project
   - `message` - Message content
   - `to_email` - Recipient email (ironcites.official@gmail.com)
4. Get your EmailJS Public Key
5. Update the following in the `index.html` file:
   - Replace `YOUR_PUBLIC_KEY` with your actual EmailJS public key
6. Update the following in the `script.js` file:
   - Replace `service_id` with your actual EmailJS service ID
   - Replace `template_id` with your actual EmailJS template ID

After completing these steps, the contact form will send emails to ironcites.official@gmail.com when submitted.