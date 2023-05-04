const path = require('path');
const { node, browser } = require('@opensumi/cli/lib/config/webpack/shared.webpack.config');

const root = path.join(__dirname);

module.exports.node = node({
  mode: 'production',
  context: path.join(process.cwd()),
  entry: {
    'SUMI-NODE': path.join(root, 'src/extend/node/index.ts'),
  },
  output: {
    filename: 'nodeExtension.js',
    path: path.join(__dirname, 'dist'),
  },
});

module.exports.vscode = node({
  mode: 'production',
  context: path.join(process.cwd()),
  entry: {
    'SUMI-EXTENSION': path.join(root, 'src/extension.ts'),
  },
  output: {
    filename: 'extension.js',
    path: path.join(__dirname, 'dist'),
  },
});

module.exports.browser = browser({
  mode: 'production',
  context: path.join(process.cwd()),
  entry: {
    'SUMI-BROWSER': path.join(root, 'src/extend/browser/index.ts'),
  },
  output: {
    filename: 'browserExtension.js',
    path: path.join(__dirname, 'dist'),
    libraryTarget: 'commonjs',
  },
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM',
  }
});
