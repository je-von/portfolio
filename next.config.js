const path = require('path')

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    domains: ['cdn.discordapp.com', 'i.scdn.co'],
  },
  async redirects() {
    return [
      {
        source: '/coding',
        destination: '/#coding',
        permanent: true,
      },
      {
        source: '/photography',
        destination: '/#photography',
        permanent: true,
      },
    ]
  },
}
