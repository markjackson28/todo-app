module.exports = {
  entry: "./src/index.js",
  resolve: {
    fallback: {
      "crypto": require.resolve("crypto-browserify")
    },
  },
};
