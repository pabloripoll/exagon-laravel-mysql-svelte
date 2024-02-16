import { defineConfig, loadEnv } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  // Load env file based on `mode` in the current working directory followed by the path of .env location
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  const env = loadEnv(mode, process.cwd()+'/docker/', '')

  return {
      plugins: [svelte()],
      define: {
          __APP_ENV__: JSON.stringify(env.APP_ENV),
      },
      server: {
          host: true,
          port: parseInt(env.PROJECT_PORT),
      }
  }
})