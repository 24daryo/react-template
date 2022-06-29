const path = require("path");

module.exports = (config) => {
  config.resolve = {
    ...config.resolve,
    alias: {
      ...config.alias,
      "@": path.resolve(__dirname, "./src/"), //パス指定を@に書き換える
    },
  };

  return config;
};
