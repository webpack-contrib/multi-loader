/* eslint-disable
  arrow-body-style,
*/
export default function loader() {}

export function pitch(request) {
  let items = JSON.parse(this.query.substr(1));

  items = items.map((item) => {
    return `require(${JSON.stringify(`-!${item}!${request}`)});`;
  });

  const last = items.pop();

  return `${items.join('\n')}\nmodule.exports = ${last}`;
}
