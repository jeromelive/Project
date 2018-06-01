let config = {
  'development': {
    baseUrl: '/',
    outputDir: '/dist'
  },
  'production': {
    baseUrl: '/shousi',
    outputDir: '/server/public/shousi'
  }
}

let env = process.env.NODE_ENV;

module.exports = {
  baseUrl: config[env].baseUrl,
  outputDir: config[env].outputDir
}