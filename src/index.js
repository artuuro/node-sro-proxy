import * as modules from '@main';

const index = process.env.MODULE || 'GatewayServer';

process.on('unhandledRejection', (error, promise) => {
    console.log(`[${module}]->(UnhandledRejection)->${promise}`);
    console.log(`[${module}]->(PromiseError)->${error}`);
    promise.catch();
});

process.on('uncaughtException', error => {
    console.log(`[${module}]->(UncaughtException)->${error}`);
});

try {
    new modules[index]().run();
} catch (error) {
    console.log(`[${index}]->(error)->${error}`);
}
