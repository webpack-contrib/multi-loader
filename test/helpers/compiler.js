/* eslint-disable
  import/order,
  comma-dangle,
  arrow-parens,
  multiline-ternary,
  no-param-reassign
*/

import path from 'path';
import webpack from 'webpack';
import MemoryFS from 'memory-fs';

export default function (name, config = {}) {
  config = {
    target: config.target || 'web',
    context: path.resolve(__dirname, '../fixtures'),
    entry: `./${name}`,
    output: {
      path: path.resolve(__dirname, `../__expected__/${name}`),
      filename: 'bundle.js',
    },
    module: {
      rules: [
        config.rule || {
          test: config.loader ? config.loader.test : /worker\.js$/,
          use: {
            loader: '../../src',
            options: config.loader ? config.loader.options : {}
          }
        }
      ]
    }
  };

  const compiler = webpack(config);

  if (!config.emit) {
    compiler.outputFileSystem = new MemoryFS();
  }

  return new Promise((resolve, reject) => {
    compiler.run((err, stats) => {
      if (err) reject(err);

      resolve(stats);
    });
  });
}
