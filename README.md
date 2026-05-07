# Taha Jasim Mohammed Syala - Portfolio

A world-class, premium portfolio website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Backend**: Firebase Firestore
- **Icons**: Lucide React

## Features

- Premium dark UI with glassmorphism effects
- Cinematic scroll animations with blur-to-sharp reveals
- 3D tilt effects on cards
- Smooth micro-interactions
- Responsive design (mobile-first)
- Firebase contact form integration
- SEO optimized
- Accessibility compliant

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## Firebase Setup

1. Create a Firebase project at [firebase.google.com](https://firebase.google.com)
2. Enable Firestore Database
3. Create a web app and copy the configuration
4. Add environment variables to `.env.local`:

```
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

## Project Structure

```
taha-portfolio/
├── app/              # Next.js app router
├── components/       # React components
│   ├── sections/     # Page sections
│   └── ui/           # Reusable UI components
├── hooks/            # Custom React hooks
├── lib/              # Utilities and data
├── types/            # TypeScript types
└── public/           # Static assets
```

## License

MIT License - feel free to use this as a template for your own portfolio.
