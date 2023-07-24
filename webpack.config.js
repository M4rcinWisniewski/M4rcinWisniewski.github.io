module.exports = {
    // ... other configurations ...
    resolve: {
      fallback: {
        path: require.resolve('path-browserify'),
        worker_threads: require.resolve('worker_threads'),
        perf_hooks: require.resolve('perf_hooks'),
        readline: require.resolve('readline'),
      },
    },
  };