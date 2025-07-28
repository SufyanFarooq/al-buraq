# 🚀 Alburaq Cargo LLC - Deployment Guide

## Namecheap Shared Hosting Deployment

### ✅ Pre-Deployment Checklist

- [x] Next.js project built successfully
- [x] Static export configured (`next.config.js`)
- [x] All images optimized
- [x] EmailJS configured
- [x] Contact form functional
- [x] All pages working
- [x] Responsive design tested

### 📁 Files to Upload

Upload these files to `public_html` folder:

```
out/
├── index.html
├── _next/
│   ├── static/
│   └── [other Next.js files]
├── assets/
│   ├── alburaq-cargo-dark-logo.png
│   ├── alburaq-cargo-light-logo.png
│   ├── hero/
│   └── brands/
├── privacy-policy/
├── terms-conditions/
├── refund-policy/
├── delivery-policy/
└── .htaccess
```

### 🔧 cPanel Steps

1. **Login to cPanel**
   - Go to Namecheap dashboard
   - Click "Manage" → "cPanel"

2. **File Manager**
   - Open File Manager
   - Navigate to `public_html`

3. **Upload Files**
   - Upload all files from `out` folder
   - Maintain folder structure

4. **Set Permissions**
   - Folders: 755
   - Files: 644

5. **Test Website**
   - Visit your domain
   - Test all pages
   - Test contact form

### 📧 EmailJS Configuration

**Production Settings:**
- Service ID: `service_uk3qsca`
- Template IDs: 
  - Notification: `template_f0wcvqc`
  - Thank You: `template_5vhal6c`
- User ID: `opVzyI34Ov40AZg3D`

### 🔍 Post-Deployment Testing

- [ ] Homepage loads correctly
- [ ] All navigation links work
- [ ] Contact form sends emails
- [ ] Policy pages accessible
- [ ] Mobile responsive
- [ ] Images load properly
- [ ] Google Maps embed works
- [ ] SEO meta tags working

### 🚨 Important Notes

1. **SSL Certificate**: Enable SSL in cPanel
2. **Domain**: Point domain to hosting
3. **DNS**: Update nameservers if needed
4. **Backup**: Keep local backup of project
5. **Monitoring**: Set up uptime monitoring

### 📞 Support

If issues occur:
1. Check cPanel error logs
2. Verify file permissions
3. Test contact form functionality
4. Check EmailJS configuration

### 🎯 Success Metrics

- Website loads under 3 seconds
- All pages accessible
- Contact form functional
- Mobile-friendly design
- SEO optimized 