// const purgecss = [
//   '@fullhuman/postcss-purgecss',
//   {
//     content: ['./pages/index.js', './pages/posts/[id].js' ],
//     defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
//   },
// ];
// module.exports = {
//   plugins: [
//     'postcss-import',
//     'tailwindcss',
//     'autoprefixer',
//     ...(process.env.NODE_ENV === 'production' ? [purgecss] : []),
//   ],
// };
module.exports = {
  plugins: [
    'tailwindcss',
    ...(process.env.NODE_ENV === 'production'
      ? [
          [
            '@fullhuman/postcss-purgecss',
            {
              content: [
                './pages/**/*.{js,jsx,ts,tsx}',
                './components/**/*.{js,jsx,ts,tsx}'
              ],
              defaultExtractor: content =>
                content.match(/[\w-/:]+(?<!:)/g) || []
            }
          ]
        ]
      : []),
    'postcss-preset-env'
  ]
}