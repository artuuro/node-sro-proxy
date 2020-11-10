const module = process.env.MODULE || false;

// process.on('unhandledRejection', (error, promise) => {
//   console.log(`[${module}]->(UnhandledRejection)->${promise}`);
//   console.log(`[${module}]->(PromiseError)->${error}`);
//   promise.catch();
// });

// process.on('uncaughtException', error => {
//   console.log(`[${module}]->(UncaughtException)->${error}`);
// });

try {
  require(`./${module}`);
} catch (error) {
  console.log(`[${module}]->(error)->${error}`);
}
