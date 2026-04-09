const path = require('path');

module.exports = function override(config, env) {
  // Fix for webpack watching external drive and macOS system files
  config.watchOptions = {
    ignored: [
      '**/node_modules',
      '**/.git',
      '**/.DS_Store',
      '**/._*',
      '/Volumes/**',
      '/.VolumeIcon.icns',
      '**/.Spotlight-V100/**',
      '**/.Trashes/**',
      '**/.TemporaryItems/**',
      path.resolve(__dirname, 'node_modules')
    ],
    followSymlinks: false,
    poll: false
  };

  // Also set resolve.mainFields to avoid issues
  config.resolve.mainFields = ['browser', 'module', 'main'];

  return config;
};
