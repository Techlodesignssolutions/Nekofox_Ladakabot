const esbuild = require('esbuild');
const aliasPlugin = require('esbuild-plugin-alias');
const path = require('path');

esbuild.build({
  entryPoints: ['app/chatbot-bundle.js'],
  bundle: true,
  minify: true,
  outfile: 'public/chatbot-bundle.js',
  format: 'iife',
  platform: 'browser',
  target: ['es2015'],
  plugins: [
    aliasPlugin({
      '@': path.resolve(__dirname, './')
    })
  ],
  define: {
    'process.env.NODE_ENV': '"production"'
  },
  loader: {
    '.tsx': 'tsx',
    '.ts': 'tsx',
    '.js': 'jsx',
    '.jsx': 'jsx',
    '.css': 'text',
    '.svg': 'dataurl',
    '.png': 'dataurl',
    '.jpg': 'dataurl',
    '.jpeg': 'dataurl'
  }
}).catch(() => process.exit(1)); 