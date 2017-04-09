[![npm][npm]][npm-url]
[![node][node]][node-url]
[![deps][deps]][deps-url]
[![test][test]][test-url]
[![coverage][cover]][cover-url]
[![chat][chat]][chat-url]

<div align="center">
  <a href="https://github.com/webpack/webpack">
    <img width="200" height="200"
      src="https://cdn.rawgit.com/webpack/media/e7485eb2/logo/icon.svg">
  </a>
  <h1>Multi Loader</h1>
  <p>This loader requires a module multiple times, each time loaded with a different loader. Like in a multi entry point the exports of the last item are exported<p>
</div>

<h2 align="center">Install</h2>

```bash
npm i -D multi-loader
```

<h2 align="center">Usage</h2>

**webpack.config.js**
```js
const multi = require('multi-loader');

const config = {
  module: {
    rules: [
      {
        test: /\.css$/,
        // Add CSS to the DOM and returns the raw content
        use: multi('style-loader!css-loader', 'raw-loader')
      }
    ]
  }
}
```

<h2 align="center">Maintainers</h2>

<table>
  <tbody>
    <tr>
      <td align="center">
        <a href="https://github.com/bebraw">
          <img width="150" height="150" src="https://github.com/bebraw.png?v=3&s=150">
          </br>
          Juho Vepsäläinen
        </a>
      </td>
      <td align="center">
        <a href="https://github.com/d3viant0ne">
          <img width="150" height="150" src="https://github.com/d3viant0ne.png?v=3&s=150">
          </br>
          Joshua Wiens
        </a>
      </td>
      <td align="center">
        <a href="https://github.com/michael-ciniawsky">
          <img width="150" height="150" src="https://github.com/michael-ciniawsky.png?v=3&s=150">
          </br>
          Michael Ciniawsky
        </a>
      </td>
      <td align="center">
        <a href="https://github.com/evilebottnawi">
          <img width="150" height="150" src="https://github.com/evilebottnawi.png?v=3&s=150">
          </br>
          Alexander Krasnoyarov
        </a>
      </td>
    </tr>
  <tbody>
</table>


[npm]: https://img.shields.io/npm/v/multi-loader.svg
[npm-url]: https://npmjs.com/package/multi-loader

[node]: https://img.shields.io/node/v/multi-loader.svg
[node-url]: https://nodejs.org

[deps]: https://david-dm.org/webpack-contrib/multi-loader.svg
[deps-url]: https://david-dm.org/webpack-contrib/multi-loader

[test]: http://img.shields.io/travis/webpack-contrib/multi-loader.svg
[test-url]: https://travis-ci.org/webpack-contrib/multi-loader

[cover]: https://codecov.io/gh/webpack-contrib/multi-loader/branch/master/graph/badge.svg
[cover-url]: https://codecov.io/gh/webpack-contrib/multi-loader

[chat]: https://img.shields.io/badge/gitter-webpack%2Fwebpack-brightgreen.svg
[chat-url]: https://gitter.im/webpack/webpack
