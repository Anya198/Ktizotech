# Deploying KtizoTech to Netlify

This project is a Next.js 14 application configured for Netlify deployment with a custom domain.

## Prerequisites

1.  A Netlify account.
2.  Your domain (`ktizotech.com`) registered and accessible.
3.  A Resend account with your domain verified (for email sending).
4.  A Calendly account (for the booking widget).

## Deployment Steps

1.  **Push to GitHub:**
    Commit your code to a GitHub repository. Main branch is recommended.

2.  **Import to Netlify:**
    - Log into Netlify.
    - Click "Add new site" -> "Import an existing project".
    - Connect to your GitHub account and select your repository.
    - Netlify should automatically detect Next.js and apply the settings from `netlify.toml`.

3.  **Configure Environment Variables:**
    In the Netlify dashboard for your site, go to **Site configuration > Environment variables**. Add the following:
    - `NEXT_PUBLIC_CALENDLY_URL` (e.g., `https://calendly.com/ktizotech/consultation`)
    - `NEXT_PUBLIC_SITE_URL` (e.g., `https://www.ktizotech.com`)
    - `RESEND_API_KEY` (Your API key from Resend)
    - `RESEND_FROM_EMAIL` (e.g., `onboarding@resend.dev` or a verified domain email)
    - `CONTACT_EMAIL` (Where you want to receive the contact form submissions)

4.  **Deploy Site:**
    Trigger a manual deploy or push a commit to trigger an automatic build. Ensure the build completes successfully.

5.  **Set Up Custom Domain:**
    - In Netlify, go to **Domain management > Custom domains**.
    - Click "Add custom domain" and enter `ktizotech.com`.
    - Follow the prompts to update your DNS records (usually pointing an A record and a CNAME record to Netlify's load balancers).
    - Netlify will automatically provision a free Let's Encrypt SSL certificate once DNS propagates.

## Local Development

To run the project locally:

```bash
npm install
npm run dev
```

Verify everything is working at `http://localhost:3000`.
