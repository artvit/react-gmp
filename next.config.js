const withImages = require('next-images');

module.exports = withImages({
  redirects: async () => [
    {
      source: '/',
      destination: '/film',
      permanent: true
    }
  ]
});
