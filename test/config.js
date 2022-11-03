export default {
  transformers: {
    name: 'index.js',
    options: {
      jsc: {
        parser: {
          jsx: true
        },
        transform: {
          react: {
            runtime: 'automatic',
            development: true
          }
        }
      },
      module: {
        type: 'commonjs'
      }
    }
  }
};
