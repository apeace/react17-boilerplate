/**
 * main.tsx is the entry point of the app. It mounts a React component
 * into the DOM.
 */

// External dependencies.
import * as ReactDOM from "react-dom"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

// Global styles.
import "normalize.css"
import "./global.scss"

// Components.
import { BaseLayout } from "./components/layout/BaseLayout"
import { Hello } from "./components/pages/Hello"
import { Time } from "./components/pages/Time"
import { APIDemo } from "./components/pages/APIDemo"

// Internal dependencies.
import { API, FakeAPI, HTTPAPI } from "./lib/ts/api"
import fakeMode from "./lib/ts/testing/fake-mode"

// Initialized dependencies based on whether we are in "fake mode".
// Load fake mode using a URL like http://localhost:8080/?fake
// This is useful for local UI development without needing to run
// an API locally (or before the API is built).
let api: API
if (fakeMode()) {
    api = new FakeAPI()
} else {
    api = new HTTPAPI()
}

// This app is just a router. The layout is defined in BaseLayout and each page
// is its own component. Global styles are defined in global.scss. The initial
// DOM is in index.html.
function App() {
    return (
        <Router>
            <BaseLayout>
                <Switch>
                    <Route path="/" exact={true}>
                        <Hello compiler="TypeScript" framework="React" n={5} />
                    </Route>
                    <Route path="/time" exact={true}>
                        <Time />
                    </Route>
                    <Route path="/apidemo" exact={true}>
                        <APIDemo api={api} />
                    </Route>
                </Switch>
            </BaseLayout>
        </Router>
    )
}

ReactDOM.render(App(), document.getElementById("main"))
