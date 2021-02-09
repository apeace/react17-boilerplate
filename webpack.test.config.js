// Import jsdom globally, giving us things like `document`
require("jsdom-global")()
module.exports.jsdom = global.jsdom

const base = require("./webpack.config")

const config = base(undefined, { mode: "development" })
// Insert test-specific Webpack config here.
module.exports = config
