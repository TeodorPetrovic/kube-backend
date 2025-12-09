# Blog Backend API

A comprehensive NestJS backend API for a blog website with pages, posts, categories, tags, menu configurations, and comments functionality.

## Features

- ✅ **Pages Management** - Create and manage static pages
- ✅ **Blog Posts** - Full-featured blog posts with categories and tags
- ✅ **Categories** - Organize posts into categories
- ✅ **Tags** - Tag posts for better organization
- ✅ **Menu System** - Dynamic menu and submenu configuration
- ✅ **Comments** - User comments with moderation system
- ✅ **SEO Friendly** - Meta titles and descriptions for all content
- ✅ **TypeORM Integration** - MySQL database with automatic migrations
- ✅ **Validation** - Input validation using class-validator
- ✅ **CORS Enabled** - Ready for frontend integration

## Tech Stack

- **NestJS** - Progressive Node.js framework
- **TypeORM** - ORM for database operations
- **MySQL** - Relational database
- **TypeScript** - Type-safe development
- **Class Validator** - DTO validation

## Installation

```bash
# Install dependencies
npm install
```

## Configuration

1. Copy the example environment file:
```bash
cp .env.example .env
```

2. Update the `.env` file with your database credentials:
```env
DB_HOST=localhost
DB_PORT=3306
DB_USERNAME=root
DB_PASSWORD=password
DB_DATABASE=blog_db
PORT=3000
```

3. Ensure MySQL is running and create the database:
```sql
CREATE DATABASE blog_db;
```

## Running the Application

```bash
# Development mode
npm run start:dev

# Production mode
npm run build
npm run start:prod

# Watch mode
npm run start
```

The API will be available at `http://localhost:3000/api`

## API Documentation

Complete API documentation is available in [API_DOCUMENTATION.md](./API_DOCUMENTATION.md)

### Quick Overview

Base URL: `http://localhost:3000/api`

#### Endpoints:

- **Pages**: `/api/pages`
- **Posts**: `/api/posts`
- **Categories**: `/api/categories`
- **Tags**: `/api/tags`
- **Menus**: `/api/menus`
- **Submenus**: `/api/menus/submenus`
- **Comments**: `/api/comments`

Each endpoint supports standard CRUD operations (GET, POST, PATCH, DELETE).

## Project Structure

```
src/
├── pages/           # Pages module
├── posts/           # Blog posts module
├── categories/      # Categories module
├── tags/            # Tags module
├── menus/           # Menus and submenus module
├── comments/        # Comments module
├── app.module.ts    # Root module
└── main.ts          # Application entry point
```

## Database Schema

The application automatically creates the following tables:

- `pages` - Static pages
- `posts` - Blog posts
- `categories` - Post categories
- `tags` - Post tags
- `post_categories` - Posts-Categories relationship
- `post_tags` - Posts-Tags relationship
- `menus` - Main menu items
- `submenus` - Submenu items
- `comments` - Post comments

## Development

```bash
# Run in development mode with hot reload
npm run start:dev

# Build the project
npm run build

# Run tests (if configured)
npm run test
```

## License

ISC