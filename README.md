# react17-boilerplate

A project template for a React 17 app, with Typescript and all the goodies.

## Goals

-   All the fancy "modern web app" and local dev stuff.
-   More fine-grained control and visibility than opaque options like `create-react-app`.

## Why?

I spent too many days of my life fighting against Webpack templates that did way too
much for me in ways I didn't understand. There was always one small detail I couldn't figure out how
to change. One day I decided to write my own Webpack config from scratch, and since then I've never had
another problem changing something in the build.

## Features

-   Write code in strict Typescript, including JSX templates.
-   Unit tests for library functions and React components, both using Mocha.
-   Style components with SASS.
-   Hot-reloading dev server with source maps.
-   Auto code formatting.
-   Use `make` to run build commands.
-   Normalize.css built in.
-   Built-in "fake mode" to easily mock API calls during local development.
-   Include moment.js while removing extraneous locales.
-   The Webpack config file is well-commented.

## How to do stuff

If you run `make help`, every make command is documented:

```
$ make help
test                            Run both library tests and component tests.
test-lib                        Run just library tests (no Webpack involved).
test-components                 Run just component tests (uses webpack.test.config.js)
run                             Run the dev server.
build                           Run a production build.
fmt                             Auto-format the codebase.
```

### Fake mode

Visit `http://localhost:8080/?fake` to access fake mode. You can see in `main.tsx` that we inject a
fake API object when this mode is activated. Instantiate real vs. fake things here. Fake mode is
only accessible in the dev build, never production.

You don't need to use this if you have a local version of your API running. But I've found it useful
for quick prototyping of UIs while mocking out the real API access patterns you will use. Plus, you
will want fake versions of your API objects for all those component tests you're going to write!

## Notes & Gotchas

### You don't need Typescript installed globally

Build commands such as `make run` and `make build` will use the version of Typescript installed by
NPM, residing in your `node_modules` folder. You don't need to have Typescript or the `tsc` command
installed globally, just Node and NPM.

### Why not use `styled-components`?

I prefer to use SASS because it offers mixins. I also prefer to define things like color variables
in SASS instead of Javascript. I haven't been able to get SASS to play nicely with
`styled-components`. Unfortunately this means we miss out on the nice style scoping that comes with
`styled-components`. But as long as component names are unique, we can scope all styles inside of a
`.ComponentName` class.

You are free to install the `styled-components` dependency and use it as usual. You just won't have
SASS.

### What if I want to use a library from NPM and it doesn't have typings?

That's okay. For the purposes of this example, assume you want to use a library `foo`.

1. Go into `typings/` and create `foo.d.ts`.
2. In that file, type `declare module "foo"`

Now you can import the `foo` library, and Typescript will assume it's an `any` type. Of course, you
could write your own typings in `foo.d.ts` and describe the shape of the library instead of
declaring it as `any`, if you want.

### Separating dependencies

You could reconfigure Webpack to output React (and/or other libraries) as their own bundle to allow
for better caching. I've chosen not to do that because I don't need it right now and wanted a
simpler config.

## List of production dependencies

The dependencies which make it into the final, compiled bundle:

-   [moment](https://github.com/moment/moment) - A library for formatting and manipulating dates and
    times.
-   [normalize.css](https://github.com/necolas/normalize.css/) - Make default CSS behaviors more
    consistent across browsers.
-   [react](https://github.com/facebook/react) - A library for writing reusable UI components.
-   [react-dom](https://github.com/facebook/react/tree/master/packages/react-dom) - DOM-specific
    functionality for React.
-   [react-router-dom](https://github.com/ReactTraining/react-router) - A library for declaring
    routes in a React app.

## List of dev dependencies

The dependencies that are used locally during development:

### Typescript stuff

-   `@types/[...]` - Some packages declare their Typescript types in a separate package.
-   [typescript](https://github.com/Microsoft/TypeScript) - A statically-typed superset of
    Javascript.

### Build stuff

-   [clean-webpack-plugin](https://github.com/johnagan/clean-webpack-plugin) - A Webpack plugin that
    deletes your build directory before building.
-   [css-loader](https://github.com/webpack-contrib/css-loader) - A webpack loader that resolves CSS
    imports.
-   [file-loader](https://github.com/webpack-contrib/file-loader) - A webpack loader that resolves
    file imports, such as images.
-   [html-webpack-plugin](https://github.com/jantimon/html-webpack-plugin) - A Webpack plugin that
    takes an HTML template and injects a script tag with your bundle's name.
-   [moment-locales-webpack-plugin](https://github.com/iamakulov/moment-locales-webpack-plugin) -
    Remove unused Moment.js locales.
-   [node-sass](https://github.com/sass/node-sass) - Node bindings for the SASS compiler.
-   [sass-loader](https://github.com/webpack-contrib/sass-loader) - A Webpack plugin that compiles
    SASS to CSS.
-   [source-map-loader](https://github.com/webpack-contrib/source-map-loader) - Allows Webpack to
    extract and output source maps.
-   [style-loader](https://github.com/webpack-contrib/style-loader) - A Webpack plugin that allows
    styles to be injected into the DOM.
-   [ts-loader](https://github.com/TypeStrong/ts-loader) - A Webpack plugin that compiles Typescript
    to Javascript.
-   [tsconfig-paths-webpack-plugin](https://github.com/dividab/tsconfig-paths-webpack-plugin) -
    Points Typescript to local type declarations when compiling via Webpack.
-   [webpack](https://github.com/webpack/webpack) - A bundler for web apps.
-   [webpack-cli](https://github.com/webpack/webpack-cli) - Command-line programs for Webpack.
-   [webpack-dev-server](https://github.com/webpack/webpack-dev-server) - A dev server that
    live-reloads when you make a change.

### Testing stuff

-   [chai](https://github.com/chaijs/chai) - An assertion library used in tests.
-   [jsdom](https://github.com/jsdom/jsdom) - A fake DOM implementation that runs in Node.
-   [jsdom-global](https://github.com/PilotFiber/jsdom-global) - Makes jsdom's primitives available
    as globals.
-   [mocha](https://github.com/mochajs/mocha) - A library for unit testing.
-   [mochapack](https://github.com/sysgears/mochapack) - A mocha test runner that runs Webpack
    before running tests, so that things like React components can be compiled and tested.
-   [ts-node](https://github.com/TypeStrong/ts-node) - Allows the use of Node builtins (e.g. `path`)
    from within our tests.

### Other

-   [prettier](https://github.com/prettier/prettier) - A code formatter.

A note about `jsdom-global`. This template uses
[a version](https://github.com/PilotFiber/jsdom-global) I once forked at work, because it fixes
issues I had accessing jsdom primitives. This is only necessary for certain access patterns. If you
switch to the [official version](https://github.com/rstacruz/jsdom-global) it should work just fine.

## Suggestions for the user

-   Configure your text editor to format using `prettier`. Make sure it matches what `make fmt`
    does.

## TODO

-   Font importing.
-   Warning about relative path to node_modules in tsconfig.
-   Upgrade to Webpack 5, waiting on [this](https://github.com/sysgears/mochapack/pull/83).
