# Contact Form Setup Guide

## Overview
The portfolio website includes a contact form in the Contact section (`components/sections/Contact.tsx`). Currently, the form submission is simulated with a mock delay. To make it functional, you need to connect it to a backend service or email provider.

## Current Setup
The form collects the following information:
- **Name** (required)
- **Email** (required)
- **Project Type** (required) - dropdown with options:
  - New App Development
  - App Redesign
  - App Modernization
  - Consultation
  - Other
- **Budget Range** (optional) - dropdown with ranges from $5K to $50K+
- **Project Description** (required) - text area

## Integration Options

### Option 1: EmailJS (Recommended - Free Tier Available)
EmailJS allows you to send emails directly from client-side JavaScript without backend code.

**Setup Steps:**
1. Create account at [emailjs.com](https://www.emailjs.com/)
2. Set up an email service (Gmail, Outlook, etc.)
3. Create an email template with variables: `{{name}}`, `{{email}}`, `{{projectType}}`, `{{budget}}`, `{{message}}`
4. Get your credentials:
   - Service ID-service_t8ohpsi
   - Template ID-template_e36qm7v
   - Public Key (User ID)-Dpg6Tz29CKnLaeoD2

**Installation:**
```bash
npm install @emailjs/browser
```

**Implementation:**
```typescript
import emailjs from '@emailjs/browser';

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    await emailjs.send(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      {
        name: formData.name,
        email: formData.email,
        projectType: formData.projectType,
        budget: formData.budget,
        message: formData.message,
      },
      'YOUR_PUBLIC_KEY'
    );
    setSubmitStatus('success');
    setFormData({ name: '', email: '', projectType: '', budget: '', message: '' });
  } catch (error) {
    setSubmitStatus('error');
  } finally {
    setIsSubmitting(false);
  }
};
```

### Option 2: Formspree (Easy, Free Tier Available)
Formspree provides form endpoints that forward submissions to your email.

**Setup Steps:**
1. Create account at [formspree.io](https://formspree.io/)
2. Create a new form and get your form endpoint
3. Update the form submission handler

**Implementation:**
```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setSubmitStatus('success');
      setFormData({ name: '', email: '', projectType: '', budget: '', message: '' });
    } else {
      setSubmitStatus('error');
    }
  } catch (error) {
    setSubmitStatus('error');
  } finally {
    setIsSubmitting(false);
  }
};
```

### Option 3: Web3Forms (Simple, Free)
Web3Forms sends form submissions to your email without requiring registration.

**Setup Steps:**
1. Get your access key from [web3forms.com](https://web3forms.com/)
2. Add a hidden input field with the access key

**Implementation:**
```typescript
// Add to form JSX
<input type="hidden" name="access_key" value="YOUR_ACCESS_KEY" />

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  const formDataToSend = {
    access_key: 'YOUR_ACCESS_KEY',
    ...formData,
  };

  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formDataToSend),
    });

    if (response.ok) {
      setSubmitStatus('success');
      setFormData({ name: '', email: '', projectType: '', budget: '', message: '' });
    } else {
      setSubmitStatus('error');
    }
  } catch (error) {
    setSubmitStatus('error');
  } finally {
    setIsSubmitting(false);
  }
};
```

### Option 4: Custom Backend (Nodemailer + Next.js API Routes)
For full control, create a Next.js API route that sends emails using Nodemailer.

**Setup Steps:**
1. Install nodemailer:
```bash
npm install nodemailer
npm install --save-dev @types/nodemailer
```

2. Create API route at `app/api/contact/route.ts`:
```typescript
import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { name, email, projectType, budget, message } = body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD, // Use app password for Gmail
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: 'harshitsinghal822@gmail.com',
    subject: `New Contact Form Submission from ${name}`,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Project Type:</strong> ${projectType}</p>
      <p><strong>Budget:</strong> ${budget || 'Not specified'}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
```

3. Add environment variables to `.env.local`:
```
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
```

4. Update form handler:
```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setSubmitStatus('success');
      setFormData({ name: '', email: '', projectType: '', budget: '', message: '' });
    } else {
      setSubmitStatus('error');
    }
  } catch (error) {
    setSubmitStatus('error');
  } finally {
    setIsSubmitting(false);
  }
};
```

## Gmail App Password Setup (for Nodemailer)
If using Gmail with Nodemailer:
1. Enable 2-factor authentication on your Google account
2. Go to Google Account settings > Security
3. Under "Signing in to Google," select "App passwords"
4. Generate a new app password for "Mail"
5. Use this password in your environment variables

## Testing
After implementation:
1. Test form with valid data
2. Verify email is received at harshitsinghal822@gmail.com
3. Test error handling (invalid email format, network errors)
4. Check success/error messages display correctly
5. Verify form clears after successful submission

## Security Considerations
- Never expose API keys or credentials in client-side code
- Use environment variables for sensitive data
- Add rate limiting to prevent spam
- Consider adding reCAPTCHA for additional spam protection
- Validate all inputs on the server side

## Recommended Solution
For quick setup: **EmailJS** or **Formspree** (no backend needed)
For production: **Custom Backend with Nodemailer** (full control, free)
