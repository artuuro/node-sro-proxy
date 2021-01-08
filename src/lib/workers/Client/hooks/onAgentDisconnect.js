async function onAgentDisconnect({ 
    proxy: {
        put,
    },
}, session) {
    await put(`/instances/${session}`, { 
        connected: 0,
    });
}

export default onAgentDisconnect;