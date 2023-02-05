const { getModuleBuildInfo } = require("next/dist/build/webpack/loaders/get-module-build-info");

function addFive(val) {
  return val + 5;
};

getModuleBuildInfo.exports = addFive;