import NodeCache from 'node-cache';

class Cache {
    async attach() {
        try {
            Object.assign(this, new NodeCache());
            console.log(`[MemoryCache]->(installed)`);
        } catch (e) {
            throw new Error(e);
        }
    }

    async destruct() {
        await this.close();
    }
}

export default Cache;