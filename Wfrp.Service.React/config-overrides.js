module.exports = function override(config) {
    config.mode = 'development';
    config.optimization.minimize = false;

    //JS Overrides
    config.output.filename = 'static/js/main.js';
    config.output.chunkFilename = 'static/js/main.chunk.js';

    //CSS Overrides
    config.plugins[4].filename = 'static/css/main.css';
    return config;
  };