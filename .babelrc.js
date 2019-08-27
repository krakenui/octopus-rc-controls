"use strict";

const output = process.env.BABEL_OUTPUT;
const modules = output == null ? false : output;

const options = {
  presets: [["@babel/env", { loose: true, modules }], "@babel/react"],
  plugins: [
    "@babel/plugin-syntax-dynamic-import",
    "@babel/proposal-object-rest-spread",
    ["@babel/proposal-class-properties", { loose: true }]
  ]
};

options.plugins.push(["transform-react-remove-prop-types", { mode: "wrap" }]);

module.exports = options;
