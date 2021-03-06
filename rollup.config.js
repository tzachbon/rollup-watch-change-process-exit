import { readFileSync } from 'fs';
import { join } from 'path';

export default {
  input: 'src/main.js',
  output: {
    file: 'public/bundle.js',
    format: 'iife',
    sourcemap: true,
  },
  plugins: [onBuildStartPlugin()],
};

const filePath = join(__dirname, 'src', 'not-in-graph-file.js');

/**
 * @type {() => import('rollup').Plugin}
 */
function onBuildStartPlugin() {
  return {
    name: 'onWatchThrow',
    async buildStart() {
      this.addWatchFile(filePath);
      emitError(this);
    },
    async watchChange() {
      emitError(this);
    },
  };
}
function emitError(ctx) {
  const file = readFileSync(filePath, 'utf8');

  if (file.includes("console.log('error')")) {
    ctx.error(new Error('Stop the process'));
  }
}
