const url = require("url")

// fakeMode returns true if "fake mode" is enabled, and false otherwise.
// Fake can be accessed by visiting http://localhost:8080/?fake. It can
// only be accessed when in dev mode, not in a production build. The
// ALLOW_FAKE_MODE environment variable is set in webpack.config.js.
export default function fakeMode(): boolean {
    if (!process.env.ALLOW_FAKE_MODE || window === undefined) {
        return false
    }
    const query = url.parse(String(window.location), true).query
    return query.hasOwnProperty("fake")
}
