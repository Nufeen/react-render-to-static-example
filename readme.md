# react-render-to-static-example


## Problem

Sometimes (in my practice) it's needed to render some existing components to pure `html + css`, for example, that could be some simple widget to inject to some friendly site via `iframe`. Another case is when I don't know how complex will the project be, start it with some standard react boilerplate, and after all it remains that simple that it's still possible to fit it into pure static markup. Packing `react` (or even `preact`) in such cases is overkill, SSR recepies are way too tricky, so I ended up with this.


## How it works

1. We create an util (`render.js` in this repo) that takes our react app, generates markup with `react-dom` [renderToStaticMarkup](https://reactjs.org/docs/react-dom-server.html#rendertostaticmarkup) method and prints it.

2. Build it with `webpack` into temp file. CSS is extracted to separate file.

3. Run it and write output to html file.

4. Remove temp file.


## Usage

`npm i` and `npm run render` to build example


## Notes

Some relevant links:

https://webpack.js.org/concepts/targets/#multiple-targets (Rendering to static is usually a final step. You will normally use another webpack config for development. If you want to avoid several config files, consider returning an array of configs)

https://github.com/kriasoft/isomorphic-style-loader (I used extraction plugin since I need CSS modules, for other scenarios this loader seemes to be interesting. Basic `style-loader` will break the rendering util since it keeps references to `window` object)

https://github.com/markdalgleish/static-site-generator-webpack-plugin (If you are planning more complex static site from the very beginning it seemes to be more straightforward solution)