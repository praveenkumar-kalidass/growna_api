module.exports = {
  apps : [{
    name: 'Insurance-API',
    script: './app.js',
    env: {
      NODE_ENV: 'development',
    },
    env_production: {
      NODE_ENV: 'production',
    }
  }]
};
