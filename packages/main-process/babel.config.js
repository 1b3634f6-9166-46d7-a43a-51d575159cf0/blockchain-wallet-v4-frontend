const path = require(`path`)

const resolve = directory => path.resolve(__dirname, directory)

module.exports = {
  presets: ['@babel/preset-env', '@babel/preset-react'],
  plugins: [
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-object-rest-spread',
    'babel-plugin-styled-components',
    [
      'module-resolver',
      {
        root: [resolve('src')],
        alias: { data: resolve('src/data') }
      }
    ],
    ['react-intl', { messagesDir: resolve('build/extractedMessages') }]
  ],
  ignore: [],
  env: {
    production: {
      presets: [
        ['@babel/preset-env', { modules: false }],
        '@babel/preset-react'
      ],
      plugins: [
        '@babel/plugin-proposal-class-properties',
        '@babel/plugin-proposal-object-rest-spread',
        'babel-plugin-styled-components',
        [
          'module-resolver',
          {
            root: [resolve('src')],
            alias: { data: resolve('src/data') }
          }
        ],
        ['react-intl', { messagesDir: resolve('build/extractedMessages') }]
      ]
    },
    development: {
      presets: [
        ['@babel/preset-env', { modules: false }],
        '@babel/preset-react'
      ],
      plugins: [
        '@babel/plugin-proposal-class-properties',
        '@babel/plugin-proposal-object-rest-spread',
        'babel-plugin-styled-components',
        [
          'module-resolver',
          {
            root: [resolve('src')],
            alias: { data: resolve('src/data') }
          }
        ],
        'react-hot-loader/babel'
      ]
    }
  }
}
