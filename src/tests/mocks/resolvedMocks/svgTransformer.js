const path = require("path");
const buildModule = (props) => {
  const { filename, functionName, pathname } = props;

  return `
        const React = require('react');
        const ${functionName} = (props) =>
        {
        return React.createElement('svg', {
          ...props,
          'data-jest-file-name': '${pathname}',
          'data-jest-svg-name': '${filename}',
          'data-testid': '${filename}'
        });
        }
        module.exports.__esModule = true;
        module.exports.default = '${pathname}';
        module.exports.ReactComponent = ${functionName};
    `;
};

const createFunctionName = (base) => {
  const words = base.split(/\W+/);
  return words.reduce(
    (identifier, word) =>
      identifier + word.substring(0, 1).toUpperCase() + word.substring(1),
    ""
  );
};

const processSvg = (contents, filename) => {
  const parts = path.parse(filename);
  if (parts.ext.toLowerCase() === ".svg") {
    const functionName = createFunctionName(parts.name);
    return buildModule({
      filename: parts.name,
      functionName,
      pathname: parts.base,
    });
  }

  return contents;
};

module.exports = { process: processSvg };
