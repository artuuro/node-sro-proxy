import * as service from '@service';

const index = process.env.MODULE || false;
const isDev = process.env.NODE_ENV == 'development';

// process.on('unhandledRejection', (error, promise) => {
//     if (isDev) {
//         console.log(`[${index}]->(UnhandledRejection)->${promise}`);
//         console.log(`[${index}]->(PromiseError)->${error}`);
//         process.exit(0);
//     } else {
//         promise.catch();
//     }
// });

// process.on('uncaughtException', (error) => {
//     if (isDev) {
//         console.log(`[${index}]->(UncaughtException)->${error}`);
//         process.exit(0);
//     }
// });

try {
    index && new service[index]().run();
} catch (error) {
    console.log(`[${index}]->(error)->${error}`);
}
