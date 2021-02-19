module.exports = {
  apps: [
    {
      name: 'rendertron-volto',
      script: 'node_modules/rendertron/bin/rendertron',
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
      },
      env_production: {
        NODE_ENV: 'production',
      },
    },
  ],
};

