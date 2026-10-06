
# 🚀 Personal Portfolio Website

<div align="center">
  
  ![Next.js](https://img.shields.io/badge/Next.js-15.1.6-black?style=for-the-badge&logo=next.js)
  ![React](https://img.shields.io/badge/React-19.0.0-61DAFB?style=for-the-badge&logo=react)
  ![TypeScript](https://img.shields.io/badge/TypeScript-5.7.3-3178C6?style=for-the-badge&logo=typescript)
  ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0.0-38B2AC?style=for-the-badge&logo=tailwind-css)
  
  **A modern, responsive personal portfolio website showcasing projects, skills, and professional information**
  
  [Live Demo](https://portfolio-app-f513.vercel.app/) • [Report Bug](https://github.com/mahi-8/portfolio_app/issues) • [Request Feature](https://github.com/mahi-8/portfolio_app/issues)  
</div>

## 🎯 About The Project

This is a modern, fully responsive personal portfolio website built with cutting-edge web technologies. The portfolio serves as a digital showcase of my professional journey, featuring projects, technical skills, work experience, and contact information. The design emphasizes clean aesthetics, smooth user experience, and optimal performance across all devices.

### Why This Project?

<table>
<tr>
<td>

**🎨 Professional Presence**  
Establish a strong online presence to showcase work and skills

</td>
<td>

**⚡ Performance Focused**  
Built with Next.js for optimal loading speeds and SEO

</td>
</tr>
<tr>
<td>

**💎 Modern Design**  
Utilizes Tailwind CSS for a contemporary and responsive design

</td>
<td>

**🛡️ Type Safe**  
TypeScript ensures code reliability and better developer experience

</td>
</tr>
</table>

---

## 🛠️ Tech Stack

### Core Technologies

- **[Next.js 15.1.6](https://nextjs.org/)** - React framework for production with App Router
- **[React 19.0.0](https://react.dev/)** - JavaScript library for building user interfaces
- **[TypeScript 5.7.3](https://www.typescriptlang.org/)** - Typed superset of JavaScript
- **[Tailwind CSS 4.0.0](https://tailwindcss.com/)** - Utility-first CSS framework

### UI Components & Styling

- **[shadcn/ui](https://ui.shadcn.com/)** - Re-usable component collection built with Radix UI and Tailwind CSS
- **[Radix UI](https://www.radix-ui.com/)** - Unstyled, accessible UI components
- **[Lucide React](https://lucide.dev/)** - Beautiful & consistent icon toolkit
- **[class-variance-authority](https://cva.style/)** - For creating variant-based component APIs
- **[clsx](https://github.com/lukeed/clsx) & [tailwind-merge](https://github.com/dcastil/tailwind-merge)** - For conditional className management

### Development Tools

- **[ESLint](https://eslint.org/)** - Code linting and quality assurance
- **[PostCSS](https://postcss.org/)** - CSS transformation and processing
- **[TypeScript ESLint](https://typescript-eslint.io/)** - TypeScript-specific linting rules

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| 📱 **Fully Responsive** | Optimized for mobile, tablet, and desktop devices |
| 🎨 **Modern UI/UX** | Clean, professional interface with smooth animations |
| 🔒 **Type-Safe** | Built entirely with TypeScript for reliability |
| 🔍 **SEO Optimized** | Next.js App Router with metadata API for better search rankings |
| ⚡ **Fast Performance** | Optimized loading times with Next.js SSR and SSG |
| ♿ **Accessible** | Built with Radix UI primitives for WCAG compliance |
| 🌙 **Dark Mode Ready** | Theme system ready for implementation |
| 🧩 **Modular** | Easy to customize and extend |
| 🚀 **Production Ready** | Optimized build configuration for deployment |

---

## 🚀 Getting Started

Follow these instructions to get a local copy up and running on your machine.

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (version 18.x or higher recommended)
  ```bash
  node --version
  ```
  Download from: https://nodejs.org/

- **npm**, **yarn**, **pnpm**, or **bun** (package manager)
  ```bash
  npm --version
  # or
  yarn --version
  # or
  pnpm --version
  # or
  bun --version
  ```

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/mahi-8/portfolio_app.git
   ```

2. **Navigate to the project directory**
   ```bash
   cd portfolio_app
   ```

3. **Install dependencies**
   
   Choose your preferred package manager:
   
   ```bash
   # Using npm
   npm install

   # Using yarn
   yarn install

   # Using pnpm
   pnpm install

   # Using bun
   bun install
   ```

### Running the Project

1. **Start the development server**
   
   ```bash
   # Using npm
   npm run dev

   # Using yarn
   yarn dev

   # Using pnpm
   pnpm dev

   # Using bun
   bun dev
   ```

2. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000) to view the application.

3. **Start editing**
   
   - Edit `src/app/page.tsx` to modify the homepage
   - The page auto-updates as you edit and save files
   - Changes are reflected instantly with Fast Refresh

---

## 📁 Project Structure

```
portfolio_app/
├── public/                 # Static assets (images, fonts, etc.)
│   ├── favicon.ico
│   └── ...
├── src/                    # Source code
│   ├── app/               # Next.js App Router pages
│   │   ├── layout.tsx     # Root layout component
│   │   ├── page.tsx       # Homepage
│   │   └── globals.css    # Global styles
│   ├── components/        # React components
│   │   └── ui/           # shadcn/ui components
│   └── lib/              # Utility functions and helpers
│       └── utils.ts      # Utility functions
├── .gitignore             # Git ignore file
├── components.json        # shadcn/ui configuration
├── eslint.config.mjs      # ESLint configuration
├── next.config.ts         # Next.js configuration
├── package.json           # Project dependencies and scripts
├── postcss.config.mjs     # PostCSS configuration
├── tailwind.config.js     # Tailwind CSS configuration
├── tsconfig.json          # TypeScript configuration
└── README.md              # Project documentation
```

---

## 📜 Available Scripts

<div align="center">

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server at http://localhost:3000 |
| `npm run build` | Build the application for production |
| `npm run start` | Start the production server |
| `npm run lint` | Run ESLint to check code quality |

</div>

## 🤝 Contributing

Contributions make the open-source community an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**!

### How to Contribute

```bash
# 1. Fork the Project

# 2. Clone your fork
git clone https://github.com/YOUR_USERNAME/portfolio_app.git

# 3. Create a feature branch
git checkout -b feature/AmazingFeature

# 4. Make your changes and commit
git add .
git commit -m "Add some AmazingFeature"

# 5. Push to your branch
git push origin feature/AmazingFeature

# 6. Open a Pull Request
```

### Contribution Guidelines

<div align="center">

| ✅ Do | ❌ Don't |
|-------|----------|
| Follow existing code style | Submit broken code |
| Write clear commit messages | Make unrelated changes |
| Test your changes | Ignore linting errors |
| Update documentation | Create huge PRs |
| Be respectful | Copy without attribution |

</div>

### Reporting Issues

Found a bug or have a suggestion? Please open an issue:

1. Go to the [Issues](https://github.com/mahi-8/portfolio_app/issues) page
2. Click "New Issue"
3. Choose the appropriate template (Bug Report or Feature Request)
4. Provide detailed information about the issue or feature
---

## 📞 Contact

<div align="center">

[![GitHub](https://img.shields.io/badge/GitHub-mahi--8-181717?style=for-the-badge&logo=github)](https://github.com/mahi-8)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0A66C2?style=for-the-badge&logo=linkedin)](https://linkedin.com/in/yourprofile)
[![Twitter](https://img.shields.io/badge/Twitter-Follow-1DA1F2?style=for-the-badge&logo=twitter)](https://twitter.com/yourhandle)
[![Email](https://img.shields.io/badge/Email-Contact-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:your.email@example.com)

**Project Link**: [https://github.com/mahi-8/portfolio_app](https://github.com/mahi-8/portfolio_app)

**Portfolio Website**: [portfolio_website](https://portfolio-app-f513.vercel.app/))

</div>

---

## 🙏 Acknowledgments

- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API
- [React Documentation](https://react.dev) - Learn React
- [Tailwind CSS Documentation](https://tailwindcss.com/docs) - Utility-first CSS framework
- [shadcn/ui Components](https://ui.shadcn.com) - Re-usable component library
- [Radix UI Primitives](https://www.radix-ui.com) - Unstyled, accessible components
- [Lucide Icons](https://lucide.dev) - Beautiful & consistent icons
- [Vercel](https://vercel.com) - Deployment platform
- All contributors who help improve this project

---

<div align="center">
  
  ⭐ **If you like this project, please give it a star!** ⭐
  
  Made with ❤️ by [mahi-8](https://github.com/mahi-8)
  
  <img src="https://raw.githubusercontent.com/Trilokia/Trilokia/379277808c61ef204768a61bbc5d25bc7798ccf1/bottom_header.svg" />
  
</div> 
<<<<<<< HEAD
=======
## Hi Everyone
>>>>>>> 90d688b1c6667196e107871e11831f35a3278be7
=======
>>>>>>> 39f259bd5dc6c3bb121efd74965dad6bc6258f99
