# Blog Backend API Documentation

## Base URL
```
http://localhost:3000/api
```

All endpoints are prefixed with `/api`.

---

## Table of Contents
1. [Pages](#pages)
2. [Posts](#posts)
3. [Categories](#categories)
4. [Tags](#tags)
5. [Menus](#menus)
6. [Submenus](#submenus)
7. [Comments](#comments)

---

## Pages

### Create a Page
- **Endpoint**: `POST /api/pages`
- **Description**: Create a new page
- **Input**:
```json
{
  "slug": "string (required, unique)",
  "title": "string (required)",
  "content": "string (required)",
  "metaTitle": "string (optional)",
  "metaDescription": "string (optional)",
  "isPublished": "boolean (optional, default: true)"
}
```
- **Response**:
```json
{
  "id": "number",
  "slug": "string",
  "title": "string",
  "content": "string",
  "metaTitle": "string",
  "metaDescription": "string",
  "isPublished": "boolean",
  "createdAt": "datetime",
  "updatedAt": "datetime"
}
```

### Get All Pages
- **Endpoint**: `GET /api/pages`
- **Description**: Retrieve all pages
- **Input**: None
- **Response**:
```json
[
  {
    "id": "number",
    "slug": "string",
    "title": "string",
    "content": "string",
    "metaTitle": "string",
    "metaDescription": "string",
    "isPublished": "boolean",
    "createdAt": "datetime",
    "updatedAt": "datetime"
  }
]
```

### Get Page by ID
- **Endpoint**: `GET /api/pages/:id`
- **Description**: Retrieve a specific page by ID
- **Input**: Path parameter `id` (number)
- **Response**:
```json
{
  "id": "number",
  "slug": "string",
  "title": "string",
  "content": "string",
  "metaTitle": "string",
  "metaDescription": "string",
  "isPublished": "boolean",
  "createdAt": "datetime",
  "updatedAt": "datetime"
}
```

### Get Page by Slug
- **Endpoint**: `GET /api/pages/slug/:slug`
- **Description**: Retrieve a specific page by slug
- **Input**: Path parameter `slug` (string)
- **Response**:
```json
{
  "id": "number",
  "slug": "string",
  "title": "string",
  "content": "string",
  "metaTitle": "string",
  "metaDescription": "string",
  "isPublished": "boolean",
  "createdAt": "datetime",
  "updatedAt": "datetime"
}
```

### Update a Page
- **Endpoint**: `PATCH /api/pages/:id`
- **Description**: Update an existing page
- **Input**: Path parameter `id` (number) + body:
```json
{
  "slug": "string (optional)",
  "title": "string (optional)",
  "content": "string (optional)",
  "metaTitle": "string (optional)",
  "metaDescription": "string (optional)",
  "isPublished": "boolean (optional)"
}
```
- **Response**:
```json
{
  "id": "number",
  "slug": "string",
  "title": "string",
  "content": "string",
  "metaTitle": "string",
  "metaDescription": "string",
  "isPublished": "boolean",
  "createdAt": "datetime",
  "updatedAt": "datetime"
}
```

### Delete a Page
- **Endpoint**: `DELETE /api/pages/:id`
- **Description**: Delete a page
- **Input**: Path parameter `id` (number)
- **Response**: No content (204)

---

## Posts

### Create a Post
- **Endpoint**: `POST /api/posts`
- **Description**: Create a new blog post
- **Input**:
```json
{
  "slug": "string (required, unique)",
  "title": "string (required)",
  "content": "string (required)",
  "excerpt": "string (optional)",
  "featuredImage": "string (optional, URL)",
  "metaTitle": "string (optional)",
  "metaDescription": "string (optional)",
  "isPublished": "boolean (optional, default: true)",
  "publishedAt": "datetime (optional)",
  "categoryIds": "number[] (optional)",
  "tagIds": "number[] (optional)"
}
```
- **Response**:
```json
{
  "id": "number",
  "slug": "string",
  "title": "string",
  "content": "string",
  "excerpt": "string",
  "featuredImage": "string",
  "metaTitle": "string",
  "metaDescription": "string",
  "isPublished": "boolean",
  "publishedAt": "datetime",
  "categories": [
    {
      "id": "number",
      "slug": "string",
      "name": "string",
      "description": "string"
    }
  ],
  "tags": [
    {
      "id": "number",
      "slug": "string",
      "name": "string"
    }
  ],
  "createdAt": "datetime",
  "updatedAt": "datetime"
}
```

### Get All Posts
- **Endpoint**: `GET /api/posts`
- **Description**: Retrieve all blog posts with their categories, tags, and comments
- **Input**: None
- **Response**:
```json
[
  {
    "id": "number",
    "slug": "string",
    "title": "string",
    "content": "string",
    "excerpt": "string",
    "featuredImage": "string",
    "metaTitle": "string",
    "metaDescription": "string",
    "isPublished": "boolean",
    "publishedAt": "datetime",
    "categories": [...],
    "tags": [...],
    "comments": [...],
    "createdAt": "datetime",
    "updatedAt": "datetime"
  }
]
```

### Get Post by ID
- **Endpoint**: `GET /api/posts/:id`
- **Description**: Retrieve a specific post by ID
- **Input**: Path parameter `id` (number)
- **Response**: Same as Create Post response

### Get Post by Slug
- **Endpoint**: `GET /api/posts/slug/:slug`
- **Description**: Retrieve a specific post by slug
- **Input**: Path parameter `slug` (string)
- **Response**: Same as Create Post response

### Update a Post
- **Endpoint**: `PATCH /api/posts/:id`
- **Description**: Update an existing post
- **Input**: Path parameter `id` (number) + body (all fields optional):
```json
{
  "slug": "string (optional)",
  "title": "string (optional)",
  "content": "string (optional)",
  "excerpt": "string (optional)",
  "featuredImage": "string (optional)",
  "metaTitle": "string (optional)",
  "metaDescription": "string (optional)",
  "isPublished": "boolean (optional)",
  "publishedAt": "datetime (optional)",
  "categoryIds": "number[] (optional)",
  "tagIds": "number[] (optional)"
}
```
- **Response**: Same as Create Post response

### Delete a Post
- **Endpoint**: `DELETE /api/posts/:id`
- **Description**: Delete a post
- **Input**: Path parameter `id` (number)
- **Response**: No content (204)

---

## Categories

### Create a Category
- **Endpoint**: `POST /api/categories`
- **Description**: Create a new category
- **Input**:
```json
{
  "slug": "string (required, unique)",
  "name": "string (required)",
  "description": "string (optional)"
}
```
- **Response**:
```json
{
  "id": "number",
  "slug": "string",
  "name": "string",
  "description": "string",
  "posts": [],
  "createdAt": "datetime",
  "updatedAt": "datetime"
}
```

### Get All Categories
- **Endpoint**: `GET /api/categories`
- **Description**: Retrieve all categories with their associated posts
- **Input**: None
- **Response**:
```json
[
  {
    "id": "number",
    "slug": "string",
    "name": "string",
    "description": "string",
    "posts": [...],
    "createdAt": "datetime",
    "updatedAt": "datetime"
  }
]
```

### Get Category by ID
- **Endpoint**: `GET /api/categories/:id`
- **Description**: Retrieve a specific category by ID
- **Input**: Path parameter `id` (number)
- **Response**: Same as Create Category response

### Update a Category
- **Endpoint**: `PATCH /api/categories/:id`
- **Description**: Update an existing category
- **Input**: Path parameter `id` (number) + body:
```json
{
  "slug": "string (optional)",
  "name": "string (optional)",
  "description": "string (optional)"
}
```
- **Response**: Same as Create Category response

### Delete a Category
- **Endpoint**: `DELETE /api/categories/:id`
- **Description**: Delete a category
- **Input**: Path parameter `id` (number)
- **Response**: No content (204)

---

## Tags

### Create a Tag
- **Endpoint**: `POST /api/tags`
- **Description**: Create a new tag
- **Input**:
```json
{
  "slug": "string (required, unique)",
  "name": "string (required)"
}
```
- **Response**:
```json
{
  "id": "number",
  "slug": "string",
  "name": "string",
  "posts": [],
  "createdAt": "datetime",
  "updatedAt": "datetime"
}
```

### Get All Tags
- **Endpoint**: `GET /api/tags`
- **Description**: Retrieve all tags with their associated posts
- **Input**: None
- **Response**:
```json
[
  {
    "id": "number",
    "slug": "string",
    "name": "string",
    "posts": [...],
    "createdAt": "datetime",
    "updatedAt": "datetime"
  }
]
```

### Get Tag by ID
- **Endpoint**: `GET /api/tags/:id`
- **Description**: Retrieve a specific tag by ID
- **Input**: Path parameter `id` (number)
- **Response**: Same as Create Tag response

### Update a Tag
- **Endpoint**: `PATCH /api/tags/:id`
- **Description**: Update an existing tag
- **Input**: Path parameter `id` (number) + body:
```json
{
  "slug": "string (optional)",
  "name": "string (optional)"
}
```
- **Response**: Same as Create Tag response

### Delete a Tag
- **Endpoint**: `DELETE /api/tags/:id`
- **Description**: Delete a tag
- **Input**: Path parameter `id` (number)
- **Response**: No content (204)

---

## Menus

### Create a Menu
- **Endpoint**: `POST /api/menus`
- **Description**: Create a new menu item
- **Input**:
```json
{
  "title": "string (required)",
  "url": "string (optional)",
  "order": "number (optional, default: 0)",
  "isActive": "boolean (optional, default: true)",
  "icon": "string (optional)"
}
```
- **Response**:
```json
{
  "id": "number",
  "title": "string",
  "url": "string",
  "order": "number",
  "isActive": "boolean",
  "icon": "string",
  "submenus": [],
  "createdAt": "datetime",
  "updatedAt": "datetime"
}
```

### Get All Menus
- **Endpoint**: `GET /api/menus`
- **Description**: Retrieve all menu items with their submenus (ordered)
- **Input**: None
- **Response**:
```json
[
  {
    "id": "number",
    "title": "string",
    "url": "string",
    "order": "number",
    "isActive": "boolean",
    "icon": "string",
    "submenus": [...],
    "createdAt": "datetime",
    "updatedAt": "datetime"
  }
]
```

### Get Menu by ID
- **Endpoint**: `GET /api/menus/:id`
- **Description**: Retrieve a specific menu by ID with its submenus
- **Input**: Path parameter `id` (number)
- **Response**: Same as Create Menu response

### Update a Menu
- **Endpoint**: `PATCH /api/menus/:id`
- **Description**: Update an existing menu item
- **Input**: Path parameter `id` (number) + body:
```json
{
  "title": "string (optional)",
  "url": "string (optional)",
  "order": "number (optional)",
  "isActive": "boolean (optional)",
  "icon": "string (optional)"
}
```
- **Response**: Same as Create Menu response

### Delete a Menu
- **Endpoint**: `DELETE /api/menus/:id`
- **Description**: Delete a menu item (also deletes associated submenus)
- **Input**: Path parameter `id` (number)
- **Response**: No content (204)

---

## Submenus

### Create a Submenu
- **Endpoint**: `POST /api/menus/submenus`
- **Description**: Create a new submenu item
- **Input**:
```json
{
  "title": "string (required)",
  "url": "string (required)",
  "menuId": "number (required)",
  "order": "number (optional, default: 0)",
  "isActive": "boolean (optional, default: true)",
  "icon": "string (optional)"
}
```
- **Response**:
```json
{
  "id": "number",
  "title": "string",
  "url": "string",
  "menuId": "number",
  "order": "number",
  "isActive": "boolean",
  "icon": "string",
  "menu": {...},
  "createdAt": "datetime",
  "updatedAt": "datetime"
}
```

### Get All Submenus
- **Endpoint**: `GET /api/menus/submenus/all`
- **Description**: Retrieve all submenu items
- **Input**: None
- **Response**:
```json
[
  {
    "id": "number",
    "title": "string",
    "url": "string",
    "menuId": "number",
    "order": "number",
    "isActive": "boolean",
    "icon": "string",
    "menu": {...},
    "createdAt": "datetime",
    "updatedAt": "datetime"
  }
]
```

### Get Submenus by Menu ID
- **Endpoint**: `GET /api/menus/:menuId/submenus`
- **Description**: Retrieve all submenus for a specific menu
- **Input**: Path parameter `menuId` (number)
- **Response**: Same as Get All Submenus response

### Get Submenu by ID
- **Endpoint**: `GET /api/menus/submenus/:id`
- **Description**: Retrieve a specific submenu by ID
- **Input**: Path parameter `id` (number)
- **Response**: Same as Create Submenu response

### Update a Submenu
- **Endpoint**: `PATCH /api/menus/submenus/:id`
- **Description**: Update an existing submenu item
- **Input**: Path parameter `id` (number) + body:
```json
{
  "title": "string (optional)",
  "url": "string (optional)",
  "order": "number (optional)",
  "isActive": "boolean (optional)",
  "icon": "string (optional)"
}
```
- **Response**: Same as Create Submenu response

### Delete a Submenu
- **Endpoint**: `DELETE /api/menus/submenus/:id`
- **Description**: Delete a submenu item
- **Input**: Path parameter `id` (number)
- **Response**: No content (204)

---

## Comments

### Create a Comment
- **Endpoint**: `POST /api/comments`
- **Description**: Create a new comment on a post
- **Input**:
```json
{
  "authorName": "string (required)",
  "authorEmail": "string (required, email format)",
  "content": "string (required)",
  "postId": "number (required)",
  "isApproved": "boolean (optional, default: false)"
}
```
- **Response**:
```json
{
  "id": "number",
  "authorName": "string",
  "authorEmail": "string",
  "content": "string",
  "postId": "number",
  "isApproved": "boolean",
  "post": {...},
  "createdAt": "datetime",
  "updatedAt": "datetime"
}
```

### Get All Comments
- **Endpoint**: `GET /api/comments`
- **Description**: Retrieve all comments with their associated posts
- **Input**: None
- **Response**:
```json
[
  {
    "id": "number",
    "authorName": "string",
    "authorEmail": "string",
    "content": "string",
    "postId": "number",
    "isApproved": "boolean",
    "post": {...},
    "createdAt": "datetime",
    "updatedAt": "datetime"
  }
]
```

### Get Comments by Post ID
- **Endpoint**: `GET /api/comments/post/:postId`
- **Description**: Retrieve all comments for a specific post
- **Input**: Path parameter `postId` (number)
- **Response**: Same as Get All Comments response

### Get Comment by ID
- **Endpoint**: `GET /api/comments/:id`
- **Description**: Retrieve a specific comment by ID
- **Input**: Path parameter `id` (number)
- **Response**: Same as Create Comment response

### Update a Comment
- **Endpoint**: `PATCH /api/comments/:id`
- **Description**: Update an existing comment (typically to approve/moderate)
- **Input**: Path parameter `id` (number) + body:
```json
{
  "authorName": "string (optional)",
  "authorEmail": "string (optional)",
  "content": "string (optional)",
  "isApproved": "boolean (optional)"
}
```
- **Response**: Same as Create Comment response

### Delete a Comment
- **Endpoint**: `DELETE /api/comments/:id`
- **Description**: Delete a comment
- **Input**: Path parameter `id` (number)
- **Response**: No content (204)

---

## Database Configuration

The application uses MySQL as the database. Configure the following environment variables:

```env
DB_HOST=localhost
DB_PORT=3306
DB_USERNAME=root
DB_PASSWORD=password
DB_DATABASE=blog_db
PORT=3000
```

Create a `.env` file in the project root with these variables or export them in your environment.

---

## Error Responses

All endpoints may return the following error responses:

### 400 Bad Request
```json
{
  "statusCode": 400,
  "message": ["validation error messages"],
  "error": "Bad Request"
}
```

### 404 Not Found
```json
{
  "statusCode": 404,
  "message": "Resource with ID X not found",
  "error": "Not Found"
}
```

### 500 Internal Server Error
```json
{
  "statusCode": 500,
  "message": "Internal server error",
  "error": "Internal Server Error"
}
```

---

## Features

- **CORS enabled** for cross-origin requests
- **Global validation** with class-validator
- **Automatic timestamp tracking** (createdAt, updatedAt)
- **Cascade delete** for related entities (comments with posts, submenus with menus)
- **Many-to-many relationships** for posts with categories and tags
- **SEO-friendly** with meta titles, descriptions, and slugs
- **Content moderation** with approval system for comments
- **Flexible menu system** with nested submenus

---

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Configure your database in `.env` file

3. Run the application:
```bash
# Development mode
npm run start:dev

# Production mode
npm run build
npm run start:prod
```

4. The API will be available at `http://localhost:3000/api`

---

## Notes

- All POST and PATCH endpoints validate input using DTOs (Data Transfer Objects)
- Timestamps are automatically managed by TypeORM
- The database schema is automatically synchronized (set `synchronize: false` in production)
- Slugs should be unique for pages, posts, categories, and tags
- Comments require approval before being visible (isApproved field)
- Menus and submenus are ordered by the `order` field in ascending order
