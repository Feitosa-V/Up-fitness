module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',

  pwa: {
    name: 'UP Fitness',
    shortName: 'UP Fitness',
    themeColor: '#fed102',
    msTileColor: '#000000',
    appleMobileWebAppCapable: 'yes',
  },
}
