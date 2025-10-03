Steps to create:

```bash
npm create vite@latest my-portfolio
cd my-portfolio
npm install
npm install -D tailwindcss@3 postcss autoprefixer
npx tailwindcss init
```

Then add to the tailwind.config.js:
content: [
  "./src/**/*.{js,jsx,ts,tsx}",
]
