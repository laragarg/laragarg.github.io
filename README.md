# Personal Portfolio & Blog

A modern, dark-themed personal website built with Next.js 15, featuring a markdown-based blog system. The site showcases professional experience, skills, and blog posts with automatic deployment to GitHub Pages.

## 🌟 Features

- **Modern Tech Stack**: Next.js 15, React 19, TypeScript, Tailwind CSS
- **Markdown Blog System**: Write blogs in markdown, automatically rendered
- **Static Site Generation**: Pre-rendered pages for optimal performance
- **Dark Theme**: Professional dark UI with smooth animations
- **Responsive Design**: Mobile-first, works on all devices
- **Automatic Deployment**: Push to main branch → auto-deploys to GitHub Pages

## 📁 Project Structure

```
.
├── app/                    # Next.js app directory
│   ├── blog/              # Blog pages
│   │   └── [slug]/        # Dynamic blog post pages
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── header.tsx         # Navigation header
│   ├── hero.tsx           # Hero section
│   ├── blog-post.tsx      # Blog post display
│   └── ...
├── lib/                   # Utility functions
│   ├── blog-data.ts       # Blog data management (reads markdown)
│   └── reading-time.ts    # Reading time calculator
├── content/               # Content directory
│   └── blog/              # ⭐ Blog posts go here (markdown files)
├── .github/
│   └── workflows/
│       └── deploy.yml     # GitHub Actions deployment
└── package.json           # Dependencies
```

## 🚀 Getting Started

### Prerequisites

- Node.js 20.x or higher
- npm (comes with Node.js)
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/laragarg/laragarg.github.io.git
   cd laragarg.github.io
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
# Create optimized production build
npm run build

# Test production build locally
npm start
```

The build output goes to the `out/` directory (static HTML files).

## ✍️ Adding a New Blog Post

### Step-by-Step Guide

1. **Create a new markdown file** in `content/blog/`

   File name becomes the URL slug:
   - `my-first-post.md` → `/blog/my-first-post`
   - `learning-nextjs.md` → `/blog/learning-nextjs`

2. **Add frontmatter** at the top of the file:

   ```markdown
   ---
   title: "Your Blog Post Title"
   date: "2024-03-23"
   excerpt: "A brief description that appears in blog listings (1-2 sentences)"
   ---

   # Your Blog Post Title

   Start writing your content here using markdown...

   ## Subheading

   - Bullet points
   - More content

   ### Code Examples

   \`\`\`javascript
   console.log("Hello, World!");
   \`\`\`
   ```

3. **Commit and push**

   ```bash
   git add content/blog/your-post.md
   git commit -m "Add new blog post: Your Title"
   git push
   ```

4. **Automatic deployment**

   GitHub Actions will automatically:
   - Build your site
   - Deploy to GitHub Pages
   - Your new post appears at `https://laragarg.github.io/blog/your-post`

### Frontmatter Fields

| Field | Required | Description | Example |
|-------|----------|-------------|---------|
| `title` | ✅ Yes | Blog post title | `"Learning Next.js"` |
| `date` | ✅ Yes | Publication date | `"2024-03-23"` (YYYY-MM-DD) |
| `excerpt` | ✅ Yes | Short description | `"A beginner's guide..."` |

### Markdown Tips

- Use `#` for headings (# H1, ## H2, ### H3)
- Use `**bold**` for **bold text**
- Use `*italic*` or `_italic_` for *italic text*
- Use `` `code` `` for inline code
- Use triple backticks for code blocks:
  ````markdown
  ```javascript
  const example = "code";
  ```
  ````
- Use `![alt text](image-url)` for images
- Use `[link text](url)` for links

## 🔧 Development

### Available Scripts

```bash
npm run dev     # Start development server (hot reload)
npm run build   # Create production build
npm run start   # Run production build locally
npm run lint    # Run ESLint
```

### Key Technologies

- **Next.js 15.2.4**: React framework with SSG
- **React 19**: UI library
- **TypeScript 5**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS
- **gray-matter**: Markdown frontmatter parser
- **Radix UI**: Accessible component primitives

## 🚢 Deployment

### Automatic Deployment (GitHub Actions)

Every push to the `main` branch automatically triggers:

1. **Build Process**:
   - Checks out code
   - Sets up Node.js 20
   - Installs dependencies with `npm install`
   - Builds static site with `npm run build`
   - Generates HTML files in `out/` directory

2. **Deployment**:
   - Uploads build artifacts
   - Deploys to GitHub Pages
   - Site updates at `https://laragarg.github.io`

### Manual Deployment

If you need to manually trigger deployment:

1. Go to **Actions** tab in GitHub
2. Click **Deploy to GitHub Pages** workflow
3. Click **Run workflow** → **Run workflow**

## 🐛 Troubleshooting

### Build fails on GitHub Actions

**Check the Actions tab** to see error logs:
1. Go to repository → Actions tab
2. Click on the failed workflow run
3. Expand the failing step to see error details

**Common issues:**
- **Markdown syntax error**: Check your frontmatter YAML syntax
- **Missing required fields**: Ensure all required frontmatter fields are present
- **Invalid date format**: Use YYYY-MM-DD format for dates

### Blog post not showing

1. **Check file location**: Must be in `content/blog/` directory
2. **Check file extension**: Must be `.md` (not `.markdown` or `.txt`)
3. **Check frontmatter**: All required fields present and properly formatted
4. **Check git**: Make sure you committed and pushed the file

### Local build works but GitHub Actions fails

- **Node version mismatch**: GitHub Actions uses Node 20 (check `.github/workflows/deploy.yml`)
- **Case sensitivity**: Linux (GitHub Actions) is case-sensitive, macOS is not
- **Missing dependencies**: Ensure all dependencies are in `package.json`

## 📝 License

This is a personal portfolio project.

## 🤝 Contributing

This is a personal website, but feel free to:
- Report bugs via Issues
- Suggest improvements via Issues
- Fork for your own use

## 📧 Contact

For questions or feedback:
- GitHub: [@laragarg](https://github.com/laragarg)
- Website: [laragarg.github.io](https://laragarg.github.io)

---

**Built with ❤️ using Next.js and deployed on GitHub Pages**