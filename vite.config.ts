import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'
import resolve from '@rollup/plugin-node-resolve'
export default defineConfig({
  plugins: [
    resolve(),
    react(),
  ],
  resolve: {
    alias: [
      {
        find: '@', // 别名
        replacement: path.resolve(__dirname, 'src') // 别名对应地址
      },
      {
        find: 'components',
        replacement: path.resolve(__dirname, 'src/components')
      },
    ]
  },
})
