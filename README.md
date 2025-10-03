# Oakland Tech Week

A production-ready static site for Oakland Tech Week 2026, built with Astro and Tailwind CSS.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
/
├─ public/                 # Static assets
│  ├─ favicon.svg
│  ├─ og-image.svg
│  ├─ logos/              # Speaker and sponsor logos
│  └─ press/              # Press kit assets
├─ src/
│  ├─ content/            # Content collections
│  │  ├─ config.ts       # Collection schemas
│  │  ├─ speakers/       # Speaker markdown files
│  │  └─ pages/          # Static pages (code-of-conduct, press)
│  ├─ data/              # JSON data files
│  │  ├─ schedule.json   # Event schedule
│  │  └─ sponsors.json   # Sponsor information
│  ├─ components/        # Astro components
│  ├─ layouts/           # Page layouts
│  ├─ pages/             # Route pages
│  └─ styles/            # Global CSS
├─ functions/            # Cloudflare Pages Functions
│  └─ api/
│     └─ subscribe.ts    # Email subscription handler
└─ astro.config.mjs      # Astro configuration
```

## 🎨 Design System

### Colors
- **Primary**: #0E7C66 (emerald green)
- **Primary Hover**: #0A5F4E
- **Accent**: #F59E0B (amber)
- **Ink**: #0B1220
- **Background**: #FFFFFF

### Typography
- **Display**: Space Grotesk (headings)
- **Body**: Inter (body text)

### Components
- Cards with `rounded-2xl` corners
- Badges with `rounded-full`
- Generous spacing with `py-16 sm:py-24`
- Subtle hover effects with `hover:scale-[1.01]`

## 📝 Content Management

### Adding Speakers
1. Create a new markdown file in `src/content/speakers/`
2. Use the following frontmatter structure:

```yaml
---
name: "Speaker Name"
title: "Job Title"
company: "Company Name"
photo: "/logos/speaker-photo.svg"
bio: "Short bio (2-3 sentences)"
links:
  twitter: "https://x.com/username"
  linkedin: "https://www.linkedin.com/in/username"
  website: "https://website.com"
---
```

### Updating Schedule
Edit `src/data/schedule.json` with the following structure:

```json
[
  {
    "day": "2026-04-14",
    "date": "Monday, April 14",
    "items": [
      {
        "time": "09:00",
        "title": "Session Title",
        "speakers": ["Speaker Name"],
        "location": "Venue",
        "type": "keynote|panel|workshop|other"
      }
    ]
  }
]
```

### Managing Sponsors
Edit `src/data/sponsors.json` with sponsor information:

```json
{
  "platinum": [
    {
      "name": "Company Name",
      "logo": "/logos/company-logo.svg",
      "url": "https://company.com"
    }
  ]
}
```

## 🔧 Configuration

### Email Forms
The site includes two email subscription options:

1. **Formspree** (default): Update the form action in `NewsletterForm.astro`
2. **Cloudflare Pages Function**: Configure in `functions/api/subscribe.ts`

To switch to the Pages Function:
1. Update the form action to `/api/subscribe`
2. Configure environment variables in Cloudflare Pages dashboard
3. Uncomment the relevant service integration in `subscribe.ts`

### Analytics
Cloudflare Web Analytics is configured but commented out. To enable:
1. Get your token from Cloudflare dashboard
2. Uncomment the script in `BaseLayout.astro`
3. Replace `your-token-here` with your actual token

## 🚀 Deployment

### Cloudflare Pages
1. Connect your Git repository to Cloudflare Pages
2. Set build command: `npm run build`
3. Set output directory: `dist`
4. Set Node.js version: `18` or `20`
5. Add environment variables if using Pages Functions

### Environment Variables
For the email subscription function, add these in Cloudflare Pages:
- `MAILCHIMP_API_KEY` (if using Mailchimp)
- `CONVERTKIT_API_KEY` (if using ConvertKit)
- `EMAIL_SERVICE_URL` (if using custom service)

### Custom Domain
1. Add your domain in Cloudflare Pages dashboard
2. DNS records will be automatically provisioned
3. SSL certificate will be automatically generated

## 🎯 Performance

The site is optimized for:
- **Lighthouse Performance**: ≥95
- **Lighthouse Accessibility**: ≥95
- **Core Web Vitals**: Good on mobile
- **Minimal JavaScript**: Only essential client-side code
- **Optimized Images**: Proper sizing and lazy loading

## 📱 Features

- ✅ Responsive design (mobile-first)
- ✅ Accessible (WCAG AA compliant)
- ✅ SEO optimized (meta tags, sitemap, robots.txt)
- ✅ Progressive enhancement
- ✅ Static generation
- ✅ Content collections
- ✅ MDX support
- ✅ TypeScript
- ✅ Tailwind CSS with custom design system

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test locally with `npm run dev`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

