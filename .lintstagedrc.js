const path = require('path')

const buildEslintCommand = filenames =>
  `next lint --fix --file ${filenames.map(f => path.relative(process.cwd(), f)).join(' --file ')}`

module.exports = {
  '*.{js,cjs,mjs,jsx,ts,tsx}': ['prettier --write', buildEslintCommand],
  '*.{css,scss}': ['prettier --write', 'stylelint --fix'],
}
