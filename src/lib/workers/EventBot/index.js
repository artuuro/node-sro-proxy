(async () => {
    
    parentPort.on('message', query => console.log(`EventBot Received: `, query));
})();