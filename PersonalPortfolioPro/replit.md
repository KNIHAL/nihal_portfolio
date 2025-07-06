# Personal Portfolio Website - Kumar Nihal

## Overview

This is a production-ready personal portfolio website for Kumar Nihal, an AI Agent Developer and Full Stack SaaS Builder. The application is built as a single-page application (SPA) with React frontend and Express.js backend, featuring dark mode by default, responsive design, and dynamic content management.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized production builds
- **Styling**: Tailwind CSS with shadcn/ui component library
- **State Management**: TanStack Query for server state management
- **Routing**: Wouter for lightweight client-side routing
- **Animation**: Framer Motion for smooth transitions and scroll-based animations
- **Theme**: Dark mode by default with light/dark toggle using React Context

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Database**: PostgreSQL with Neon serverless database
- **ORM**: Drizzle ORM for type-safe database operations
- **Validation**: Zod for runtime type validation
- **Development**: Hot module replacement with Vite integration

### Project Structure
```
├── client/          # Frontend React application
│   ├── src/
│   │   ├── components/  # Reusable UI components
│   │   ├── pages/       # Route components
│   │   ├── hooks/       # Custom React hooks
│   │   └── lib/         # Utilities and configurations
├── server/          # Backend Express application
│   ├── routes.ts    # API route definitions
│   ├── storage.ts   # Database operations
│   └── db.ts        # Database connection
├── shared/          # Shared types and schemas
└── migrations/      # Database migration files
```

## Key Components

### Database Schema
- **Users Table**: Basic user authentication structure (currently minimal)
- **Contacts Table**: Stores contact form submissions with fields for name, email, subject, message, and timestamp

### API Endpoints
- `POST /api/contact`: Handles contact form submissions with validation
- `GET /api/contacts`: Retrieves all contact submissions (admin functionality)

### Frontend Components
- **Navbar**: Fixed navigation with smooth scrolling and mobile hamburger menu
- **Hero**: Profile image with introduction and action buttons
- **Projects**: Dynamic project showcase with filtering capabilities
- **Skills**: Technical skills organized by categories with icons
- **About**: Timeline-based personal journey and story
- **Contact**: Working contact form with backend integration
- **Footer**: Social links and attribution

### UI Framework
- Comprehensive shadcn/ui component library integration
- Radix UI primitives for accessibility
- Tailwind CSS for responsive design
- Custom color scheme supporting light/dark themes

## Data Flow

1. **Contact Form Submission**:
   - User fills contact form → Frontend validation → API call to `/api/contact`
   - Backend validates with Zod schema → Saves to PostgreSQL → Returns success/error response
   - Frontend shows toast notification and resets form on success

2. **Theme Management**:
   - Theme state managed in React Context → Persisted to localStorage
   - CSS variables update based on theme selection → Applied globally

3. **Project Display**:
   - Static project data from `client/src/lib/data.ts`
   - Filtering system for project categories
   - External links to GitHub and live demos

## External Dependencies

### Database & Hosting
- **Neon**: Serverless PostgreSQL database
- **Drizzle ORM**: Type-safe database operations with PostgreSQL dialect

### UI & Styling
- **Tailwind CSS**: Utility-first CSS framework
- **shadcn/ui**: High-quality React component library
- **Radix UI**: Unstyled, accessible component primitives
- **Lucide React**: Icon library

### Development Tools
- **TypeScript**: Type safety across frontend and backend
- **Vite**: Fast build tool with HMR support
- **TanStack Query**: Server state management
- **Zod**: Runtime type validation

### External Assets
- **Unsplash**: Professional images for projects and profile
- **Google Fonts**: Inter font family for modern typography

## Deployment Strategy

### Build Process
- **Frontend**: Vite builds optimized static assets to `dist/public`
- **Backend**: esbuild bundles server code to `dist/index.js`
- **Database**: Drizzle migrations handle schema changes

### Environment Configuration
- `DATABASE_URL`: Required for PostgreSQL connection
- Development mode includes Replit-specific tooling and error overlay
- Production build excludes development dependencies

### Scripts
- `npm run dev`: Development server with hot reload
- `npm run build`: Production build for both frontend and backend  
- `npm run start`: Production server
- `npm run db:push`: Apply database schema changes

### Scalability Considerations
- Separation of frontend/backend allows independent scaling
- Database design supports additional features (user management, project CRUD)
- Component architecture enables easy feature additions
- API structure ready for additional endpoints

## Changelog

```
Changelog:
- July 06, 2025. Initial setup
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```