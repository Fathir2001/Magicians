# Magicians - React + TypeScript + Tailwind CSS

A modern React application built with TypeScript and styled with Tailwind CSS, powered by Vite for fast development.

## 🚀 Tech Stack

- **React 18** - A JavaScript library for building user interfaces
- **TypeScript** - A typed superset of JavaScript
- **Tailwind CSS** - A utility-first CSS framework
- **Vite** - Next generation frontend tooling

## 📋 Prerequisites

- Node.js (version 20.12.0 or higher)
- npm or yarn package manager

## 🛠️ Installation

1. Install dependencies:
   ```bash
   npm install
   ```

## 🏃‍♂️ Running the Application

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎨 Tailwind CSS

This project is configured with Tailwind CSS. You can:

- Use any Tailwind utility classes in your components
- Customize the theme in `tailwind.config.js`
- Add custom styles in `src/index.css`

### Example Usage

```tsx
<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Click me
</button>
```

## 📁 Project Structure

```
src/
├── assets/          # Static assets
├── App.tsx          # Main application component
├── main.tsx         # Application entry point
├── index.css        # Global styles with Tailwind directives
└── vite-env.d.ts    # Vite type definitions
```

## 🔧 Configuration Files

- `vite.config.ts` - Vite configuration
- `tailwind.config.js` - Tailwind CSS configuration
- `postcss.config.js` - PostCSS configuration
- `tsconfig.json` - TypeScript configuration

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

Happy coding! 🎉
