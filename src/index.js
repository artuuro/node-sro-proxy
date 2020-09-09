const module = process.env.MODULE || false;

// Let's not allow the app to exit and handle the shit globally:
process.on('uncaughtException', error => {
  console.log(`[uncaughtException]\n`, error);
});

process.on('unhandledRejection', (error, promise) => {
  console.log(`[${module}]->(UnhandledRejection)->${promise}`);
  console.log(`[${module}]->(error)->${error}`);
  promise.catch();
});

try {
  require(`./${module}`);
} catch (error) {
  console.log(`[${module}]->(error)->${error}`);
}
