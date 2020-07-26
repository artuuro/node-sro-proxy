const module = process.env.MODULE || false;

process.on('uncaughtException', function (err) {
  console.error(err.stack);
  console.log("Node NOT Exiting...");
});

try {
  require(`./${module}`);
} catch (error) {
  throw new Error(`env MODULE not specified`);
}
