const module = process.env.MODULE || false;

process.on('uncaughtException', error => console.log(error));

try {
  require(`./${module}`);
} catch (error) {
  throw new Error(error);
}
