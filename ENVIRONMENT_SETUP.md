# 🔐 Environment Variables Setup

## EmailJS Configuration

### Required Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
# EmailJS Configuration
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_uk3qsca
NEXT_PUBLIC_EMAILJS_NOTIFICATION_TEMPLATE_ID=template_f0wcvqc
NEXT_PUBLIC_EMAILJS_THANKYOU_TEMPLATE_ID=template_5vhal6c
NEXT_PUBLIC_EMAILJS_USER_ID=opVzyI34Ov40AZg3D

# Business Information
NEXT_PUBLIC_BUSINESS_EMAIL=info@alburaqcargo.com
NEXT_PUBLIC_BUSINESS_NAME="Alburaq Cargo LLC"
NEXT_PUBLIC_BUSINESS_ADDRESS="Al Salam Tower, 10th Floor Office R10, Abu Dhabi"
```

### How to Get EmailJS Credentials

1. **Service ID:**
   - Go to EmailJS Dashboard
   - Email Services section
   - Copy your service ID

2. **Template IDs:**
   - Go to Email Templates section
   - Copy template IDs for notification and thank you emails

3. **User ID:**
   - Go to Account section
   - Copy your Public Key

### Security Notes

- ✅ `.env.local` is automatically ignored by Git
- ✅ Never commit sensitive data to public repositories
- ✅ Use `NEXT_PUBLIC_` prefix for client-side variables
- ✅ Keep backup of credentials in secure location

### Production Deployment

For production deployment on Namecheap:

1. **Local Development:**
   ```bash
   # Create .env.local file
   cp .env.example .env.local
   # Edit with your actual values
   ```

2. **Production:**
   - Add environment variables in hosting control panel
   - Or create `.env.local` file on server

### Testing

After setting up environment variables:

```bash
# Restart development server
npm run dev

# Test contact form
# Check browser console for any errors
```

### Troubleshooting

If contact form doesn't work:

1. Check browser console for errors
2. Verify EmailJS credentials
3. Test EmailJS templates
4. Check network connectivity 