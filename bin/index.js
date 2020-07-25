"use strict";

var _module = process.env.MODULE || false;

try {
  require("./".concat(_module));
} catch (error) {
  throw new Error("env MODULE not specified");
}