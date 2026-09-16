import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// If deploying to https://<username>.github.io/<repo-name>/,
// set base to '/<repo-name>/'. If deploying to a custom domain
// or to <username>.github.io root, leave base as '/'.
export default defineConfig({
  plugins: [react()],
  base: '/portfolio/',
})
