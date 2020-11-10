import { resolve } from 'path';
const module = process.env.MODULE || false;

global.ROOT_DIR = resolve(__dirname, '..');

console.log(ROOT_DIR)

process.on('unhandledRejection', (error, promise) => {
  console.log(`[${module}]->(UnhandledRejection)->${promise}`);
  console.log(`[${module}]->(PromiseError)->${error}`);
  promise.catch();
});

process.on('uncaughtException', error => {
  console.log(`[${module}]->(UncaughtException)->${error}`);
});

try {
  require(`./${module}`);
} catch (error) {
  console.log(`[${module}]->(error)->${error}`);
}
