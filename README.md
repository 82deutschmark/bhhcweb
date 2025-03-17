# BHHC Website

Personal website built with React and Express, deployed at [www.bighappyholding.com](https://www.bighappyholding.com)

## Features

- Modern, responsive design with Tailwind CSS
- Smooth animations and transitions using Framer Motion
- Full-screen loading animations with BHHC branding
- Optimized image handling and delivery
- Server-side rendering capabilities
- Type-safe development with TypeScript

## Development

Start local development server:
```bash
npm run dev
```

The site will be available at http://localhost:5000

### Recent Improvements
- Enhanced loading screen with full-viewport BHHC logo animation
- Improved server configuration for better Windows compatibility
- Optimized image handling and delivery
- Added smooth transitions and animations

## Deployment Workflow

1. Push changes to GitHub:
   ```bash
   git add .
   git commit -m "your commit message"
   git push
   ```

2. Changes automatically deploy to [www.bighappyholding.com](https://www.bighappyholding.com)

### Build Process
- Frontend: Vite builds the React application
- Backend: esbuild bundles the Express server
- Output goes to `dist/` directory

### Environment Variables
Set these in Cloudflare Pages dashboard:
Settings > Environment variables

## Project Structure
```
├── client/             # Frontend React code
│   ├── src/           # React source code
│   │   ├── components/  # React components
│   │   └── styles/     # CSS and styling
│   └── public/        # Static assets
│       └── images/    # Image assets
├── server/            # Express.js backend
├── shared/            # Shared types
└── vite.config.ts     # Build config
```

## Dependencies Overview

### Core
- React 18 with TypeScript
- Express.js server
- Vite + esbuild for building

### UI Components
- Radix UI primitives
- Tailwind CSS
- Framer Motion animations

### Features
- Form handling (react-hook-form)
- Data validation (zod)
- Cookie consent tracking
- Date handling (date-fns)
- Charts (recharts)

## Common Tasks

### Making Changes
1. Make your changes locally
2. Test with `npm run dev`
3. Commit and push to GitHub
4. Changes automatically go live on www.bighappyholding.com

### Adding New Pages
Add new React components in `client/src/components/` directory

### Updating Styles
Using Tailwind CSS - edit classes directly in components

### Working with Images
- Place new images in `client/public/images/`
- Use relative paths starting with `/images/` in components
- Optimize images before adding to the project

## Configuration Issues to Address

1. TypeScript Configuration:
   - Missing @types/node - need to run `npm install -D @types/node`
   - Missing vite client types - need to run `npm install -D vite`

2. Dependencies that may need cleanup:
   - Database related (drizzle-orm, @neondatabase/serverless) - can be removed if not using
   - Session management (express-session, passport) - can be removed if not using auth
   - WebSocket (ws) - can be removed if not using real-time features

## 🚀 Quick Start

### Prerequisites
- Node.js 20 or higher
- npm or yarn
- Cloudflare account

### Local Development
1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:5000](http://localhost:5000) in your browser.

## 🏗️ Project Structure

```
├── client/             # Frontend React application
│   ├── src/           # React source code
│   │   ├── components/  # React components
│   │   └── styles/     # CSS and styling
│   └── public/        # Static assets
│       └── images/    # Image assets
├── server/            # Express.js server
├── shared/            # Shared types and utilities
└── vite.config.ts     # Vite configuration
```

## 📦 Building for Production

```bash
npm run build
```

This will:
1. Build the React frontend using Vite
2. Bundle the server code using esbuild
3. Prepare the distribution for Cloudflare Pages

## ☁️ Deployment to Cloudflare Pages

### First-time Setup

1. Connect your repository to Cloudflare Pages:
   - Go to Cloudflare Dashboard
   - Navigate to Pages
   - Click "Create a project"
   - Select your repository
   - Choose "Connect to Git"

2. Configure your build settings:
   - Build command: `npm run build`
   - Build output directory: `dist`
   - Node.js version: 20

### Automatic Deployments

Once configured, Cloudflare Pages will automatically:
- Deploy when you push to your main branch
- Create preview deployments for pull requests
- Handle all routing and serving of your application

Your application will be available at `https://bhhcweb.pages.dev` (or your custom domain if configured)

## 🛠️ Development Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run check` - Type-check TypeScript
- `npm start` - Run production server locally

## 📝 License

MIT