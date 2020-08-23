import Cache from 'node-cache';

class MemoryCache {
  async attach() {
    try {
      Object.assign(this, new Cache());
      console.log(`[MemoryCache]->(installed)`);
    } catch (e) {
      throw new Error(e);
    }
  }

  async destruct() {
    await this.close();
  }
}

export default MemoryCache;