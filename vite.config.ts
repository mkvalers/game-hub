import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import { boneyardPlugin } from 'boneyard-js/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths(), boneyardPlugin()],
  // remove non-existing `tsconfigPaths` option from `resolve`
  resolve: {},
})
