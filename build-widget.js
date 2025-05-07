const esbuild = require('esbuild');
const aliasPlugin = require('esbuild-plugin-alias');
const path = require('path');

esbuild.build({
  entryPoints: ['app/chatbot-bundle.js'],
  bundle: true,
  minify: false,
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
    'process.env.NODE_ENV': '"production"',
    'global': 'window'
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
}).then(() => {
  console.log('Build completed successfully');
}).catch((error) => {
  console.error('Build failed:', error);
  process.exit(1);
}); 