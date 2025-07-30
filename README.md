# Marqness - Personal Hobby Tracking App

**Marqness** is a simple, elegant hobby tracking application designed to help you monitor and analyze how you spend time on your personal interests. Built with modern web technologies, it provides a seamless experience for tracking hobby activities, categorizing your interests, and gaining insights into your hobby engagement patterns.

## 🎯 What is Marqness?

Marqness is a personal hobby tracking tool that allows you to:

- **⏱️ Track Time**: Start and stop timers for any hobby activity with a simple click
- **📝 Add Context**: Describe your hobby sessions with names, descriptions, and custom categories  
- **📊 Analyze Patterns**: View detailed analytics and insights about your hobby engagement
- **🔒 Keep Data Private**: Your hobby tracking data is completely private and secure
- **📱 Access Anywhere**: Responsive design works on desktop, tablet, and mobile devices

## ✨ Key Features

### Simple Hobby Tracking Workflow

1. **🚀 Start**: Click "Start" to begin timing any hobby activity
2. **⏹️ Stop**: Click "Stop" when you're done 
3. **📋 Describe**: Add a name, description, and category for your hobby session
4. **💾 Save**: Your hobby entry is automatically saved to your personal database

### Dashboard & Analytics

- **📈 Summary Statistics**: See total entries, total time tracked, and average session length
- **📊 Category Breakdown**: Visual breakdown of time spent across different hobby categories
- **📋 Activity History**: Complete list of all your hobby entries with details
- **⏰ Recent Activity**: Quick view of your most recent hobby tracking sessions

### User Management

- **🔐 Secure Authentication**: Sign up with email and password
- **👤 Personal Data**: Each user's data is completely isolated and private
- **🔄 Session Persistence**: Stay logged in across browser sessions
- **📱 Cross-Device Sync**: Access your data from any device

### Organization Tools

- **🏷️ Custom Categories**: Create and manage your own hobby categories
- **📝 Rich Descriptions**: Add detailed descriptions to your hobby entries
- **🔍 Easy Navigation**: Tab-based interface for quick access to all features
- **📊 Export Options**: Export your data for external analysis (CSV format)

## 🚀 Quick Start

### For Users

1. **Visit the Application**: Navigate to your Marqness instance
2. **Create Account**: Sign up with your email and password
3. **Start Tracking**: Click the "Start" button to begin your first hobby session
4. **Add Details**: When you stop the timer, describe your hobby activity
5. **View Analytics**: Check the Dashboard tab to see your hobby tracking insights

### For Developers

#### Prerequisites
- **Node.js** (version 18+ recommended)
- **npm** or **yarn**

#### Installation

```bash
# Clone the repository
git clone <repository-url>
cd marqness-server/marqness-front

# Install dependencies
npm install

# Set up environment
cp .env.example .env

# Start local Supabase (for development)
npx supabase start

# Start development server
npm run dev
```

The application will be available at `http://localhost:5173/`

## 🛠 Tech Stack

Marqness is built with modern, reliable technologies:

### Frontend
- **⚡ Vite** - Fast build tool and dev server for optimal development experience
- **⚛️ React 19** - Latest React with improved performance and developer experience
- **📘 TypeScript** - Type-safe JavaScript for better code quality and developer productivity
- **🎨 TailwindCSS v4** - Latest utility-first CSS framework for rapid UI development
- **🔍 ESLint** - Code linting and formatting for consistent code quality

### Backend & Database
- **🗄️ Supabase** - Backend-as-a-Service with PostgreSQL database
- **🔒 Row Level Security** - Database-level security ensuring user data isolation
- **🔐 Supabase Auth** - Secure user authentication and session management
- **📊 Real-time Features** - Live updates and synchronization across devices

### Development Tools
- **📦 NPM** - Package management
- **🔧 React Context** - State management for timer and authentication
- **📋 React Hook Form** - Form handling and validation
- **🎯 TypeScript Strict Mode** - Enhanced type safety with verbatimModuleSyntax

## 📋 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint to check code quality |
| `npm run lint:fix` | Run ESLint and auto-fix issues |

## 🏗 Project Structure

```
marqness-front/
├── src/
│   ├── components/          # React components
│   │   ├── TimerView.tsx   # Main timer interface
│   │   ├── Dashboard.tsx   # Analytics and insights
│   │   ├── Activities.tsx  # Hobby entry management
│   │   ├── AuthGuard.tsx   # Authentication protection
│   │   └── ...
│   ├── contexts/           # React Context providers
│   │   ├── AuthContext.tsx # User authentication state
│   │   └── TimerContext.tsx # Timer state management
│   ├── services/           # API and business logic
│   │   ├── timeEntryService.ts # Hobby entry CRUD operations
│   │   ├── categoryService.ts  # Category management
│   │   └── csvExportService.ts # Data export functionality
│   └── lib/
│       └── supabase.ts     # Database configuration
├── docs/                   # Documentation
│   └── troubleshooting.md  # Technical troubleshooting guide
└── supabase/              # Database migrations and config
    └── migrations/        # SQL migration files
```

## 🔒 Security & Privacy

- **🛡️ Row Level Security**: Database policies ensure users can only access their own data
- **🔐 Secure Authentication**: Industry-standard authentication with Supabase Auth
- **📊 Data Isolation**: Complete separation of user data at the database level
- **🔒 Session Management**: Secure session handling with automatic token refresh

## 📚 Additional Documentation

- **[Troubleshooting Guide](docs/troubleshooting.md)** - Solutions for common development issues
- **[Authentication Setup](README-AUTHENTICATION.md)** - Detailed authentication system guide
- **[Supabase Integration](README-SUPABASE.md)** - Backend setup and configuration
- **[Feature Tracker](feature-tracker.md)** - Detailed feature implementation status

## 🤝 Development Workflow

1. **Start Development**: `npm run dev`
2. **Make Changes**: Edit files in `src/` directory
3. **Check Code Quality**: `npm run lint`
4. **Build for Production**: `npm run build`
5. **Preview Build**: `npm run preview`

## 🎨 UI/UX Design Principles

- **🎯 Simplicity**: Clean, intuitive interface focused on the core workflow
- **📱 Responsive**: Works seamlessly across all device sizes
- **⚡ Performance**: Fast loading times and smooth interactions
- **♿ Accessibility**: Designed with accessibility best practices
- **🌙 Modern Design**: Contemporary UI with thoughtful use of color and spacing

## 📈 Use Cases

**Perfect for:**
- Hobbyists tracking time spent on personal interests
- Creatives monitoring time on projects
- People wanting to balance multiple hobbies
- Anyone wanting to understand their hobby engagement patterns
- Individuals looking to optimize their leisure time

**Key Benefits:**
- Simple, distraction-free interface
- Automatic data backup and synchronization
- Detailed analytics and insights
- Complete privacy and data ownership
- Cross-platform compatibility

---

**Ready to start tracking your hobbies more effectively?** 🚀

*Marqness helps you understand where your hobby time goes, so you can make better decisions about how you engage with your interests.*
