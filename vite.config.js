import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})

// vite.config.js
// export default {
//   base: '/RestaurentService/',  // Adjust this to match your repository name
// };