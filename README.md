## Fixed in rollup version [2.70.0](https://github.com/rollup/rollup/releases/tag/v2.70.0)

Trying to reproduce the process exit that happens on `changeWatch` hook in rollup.

https://github.com/rollup/rollup/issues/4424

* `npm i`
* `npm run watch`.
* Go to `src/not-in-graph-file.js`.
* Save the file. 
