module.exports = {
  resolve: {
    fallback: {
      fs: "empty",
      Buffer: false,
      http: "empty",
      https: "empty",
      zlib: "empty"
    }
  },
  module: {
    unknownContextCritical: false
  }
};
