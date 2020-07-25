const module = process.env.MODULE || false;

try {
  require(`./${module}`);
} catch (error) {
  throw new Error(`env MODULE not specified`);
}
