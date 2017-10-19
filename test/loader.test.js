/* eslint-disable
  import/order,
  comma-dangle,
*/
import webpack from './helpers/compiler';

import multi from '../src';

describe('Loader', () => {
  test('Default', async () => {
    const config = {
      rule: {
        test: /\.css$/,
        use: multi('css-loader', 'raw-loader'),
      }
    };

    const stats = await webpack('index.js', config);

    const src = stats.toJson()
      .modules[1].source
      .replace(new RegExp(`${process.cwd()}`, 'g'), '.');

    return expect(src).toMatchSnapshot();
  });
});
