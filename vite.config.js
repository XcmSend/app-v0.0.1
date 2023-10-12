import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import topLevelAwait from "vite-plugin-top-level-await";


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    topLevelAwait({
      promiseExportName: "__tla",
      promiseImportName: i => `__tla_${i}`
    })  
  ],
	server: {
	       host: true,
		      port: 5173,
		      strictPort: true,
		  hmr: {
	      overlay: false, // Disable HMR overlay
	    },
	  },
  allowImportingTsExtensions: true,

  build: {
    target: 'esnext'
  }
})
