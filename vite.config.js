import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { viteStaticCopy } from 'vite-plugin-static-copy'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/smart-monkeys/',
  plugins: [
    vue(),
    viteStaticCopy({
      targets: [
        {
          src: 'js',
          dest: ''
        },
        {
          src: 'fancybox3',
          dest: ''
        },
        {
          src: 'css',
          dest: ''
        },
        {
          src: 'fontawesome512',
          dest: ''
        }
      ]
    })
  ],
})
