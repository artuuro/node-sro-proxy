const module = process.env.MODULE || false;

process.on('uncaughtException', console.error);

try {
  require(`./${module}`);
} catch (error) {
  throw new Error(`env MODULE not specified`);
}
