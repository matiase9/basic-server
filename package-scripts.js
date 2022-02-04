const { serie, rimraf } = require('nps-utils')

module.exports = {
  scripts: {
    default: 'nps start',
    start: {
      script: 'cd dist && cross-env NODE_ENV=production node ./src/index.js',
      description: 'Starts the builed app'
    },
    dev: {
      script: 'cross-env NODE_ENV=local NODE_OPTIONS=--max_old_space_size=8192 nodemon -L --exec ts-node -- ./src/index.ts',
      description: 'Starts the local development enviroment'
    }
  }
}