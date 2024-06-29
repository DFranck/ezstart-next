# My EZ Start

🌟 Kickstart Your Next.js Projects with Ease 🌟

Empowering Developers: Leverage the power of Next.js 14, TypeScript, Tailwind CSS, and Prisma to build modern, high-performance applications. This boilerplate includes essential tools like ESLint, Prettier, NextAuth.js for authentication, Framer Motion for smooth animations, and NextIntl for seamless internationalization. Everything you need to start your Next.js project quickly and efficiently.

Clone this project to use it as the foundation for your Next.js applications.

## Features

Optimized for a great developer experience and flexibility, keeping only what you need:

- ⚡ **Next.js 14 with App Router support**
- 🔥 **TypeScript** for robust type checking
- 💎 **Tailwind CSS** for efficient styling
- ✅ **Strict Mode** for TypeScript and React 18
- 🔒 **Authentication** with NextAuth.js: Comprehensive user management including sign-up, sign-in, sign-out, and more
- 🌐 **Internationalization (i18n)** with NextIntl for multilingual support
- 📦 **Prisma ORM**: Type-safe database management compatible with PostgreSQL, SQLite, and MySQL
- 📏 **ESLint**: Code linting with Next.js default and Airbnb configurations
- 💖 **Prettier**: Code formatting for consistent style
- 🔀 **React Hook Form**: Efficient form handling
- 🔴 **Zod**: Powerful schema validation
- 🖌️ **Radix UI and Framer Motion**: Dynamic and accessible UI components
- 🔧 **PostCSS** for CSS transformation
- 🔑 **Bcryptjs**: Secure password hashing
- 🎨 **Lucide React**: Comprehensive icon library
- 🛠️ **VSCode configuration**: Seamless development experience
- 🔍 **SEO optimization**: Metadata, JSON-LD, and Open Graph tags
- 📜 **Extensive documentation** for all features
- 🔄 **Future integration**: Plans for testing tools like Jest and React Testing Library
- 🚀 **Ready for modern web development**

### Built-in features from Next.js:

- ☕ **Minify HTML & CSS**
- 💨 **Live reload**
- ✅ **Cache busting**

## Philosophy

Transparent and open, allowing you to tailor the setup to your needs.
This boilerplate is for my personal use and i try to keep it as minimal and efficient as possible.  
Dependencies are regularly updated.  
Highly customizable.  
Minimalist codebase.  
SEO-friendly.  
🚀 Production-ready.

## Requirements

- Node.js 20+ and npm

## Getting Started

Clone the repository and install the dependencies:

```bash
git clone --depth=1 https://github.com/DFranck/my-ez-start.git my-project-name
cd my-project-name
npm install
npm run dev
```

To run the project locally in development mode with live reload:

```bash
npm run dev
```

Open http://localhost:3000 in your browser to see your project.

## Set up Authentication

Configure NextAuth.js by setting up the necessary environment variables in `.env.local`:

```bash
AUTH_URL=http://localhost:3000
AUTH_SECRET=your_secret_key
AUTH_SALT=your_salt
```

This enables a complete authentication system with Next.js: sign-up, sign-in, sign-out, and more.
Complete documentation on NextAuth.js:https://next-auth.js.org/getting-started/introduction

## Set up Remote Database

The project uses Prisma for database management, supporting PostgreSQL, SQLite, and MySQL. By default, it is configured for PostgreSQL in `.env.local`.

```bash
DATABASE_URL="postgresql://janedoe:janedoe@localhost:5432/janedoe?schema=hello-prisma"
```

Complete documentation on Prisma:https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/relational-databases-typescript-postgresql

## Translation (i18n) Setup

The project uses NextIntl for localization. Set up your locales in the src/locales directory to support multiple languages.

Complete documentation on NextIntl: https://nextIntl.org

## Commit Message Format

The project follows the Conventional Commits specification. This means all commit messages should adhere to this format. To help you, the project uses Commitizen, an interactive CLI for crafting commit messages:

```bash
npm run commit
```

This approach allows for automatic generation of a CHANGELOG file and versioning based on commit types included in a release.

## Testing

Placeholder for future integration: Unit tests with Vitest/Jest and React Testing Library.

## Integration & E2E Testing

Placeholder for future integration: Integration and E2E tests.

## Deploy to Production

During the build process, database migration runs automatically. Ensure DATABASE_URL is set in your environment variables.

### Generate a production build with:

```bash
Copy code
npm run build
```

To test the production build locally, run:

```bash
Copy code
npm run start
```

This starts a local server with the production build. Open http://localhost:3000 to see your project.

## Contributions

Contributions are welcome. Open an issue if you have questions or find bugs. Suggestions for improvements are also appreciated.

## License

Licensed under the MIT License, Copyright © 2024
