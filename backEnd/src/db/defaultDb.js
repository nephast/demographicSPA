const pool = require('./pool');


class DefaultDb {
  constructor({ table, model }) {
    this.db = pool;
    this.table = table;
    this.fromDatabase = model.fromDatabase;
  }

  async list(filters = {})  {
    try {
      const models = await this.db(this.table)
      .select(filters.column)
      .limit(100)
      return { err: null, data: models };
    } catch (e) {
      console.log({ error: 'DB list', stack: e });
      return { err: new Error(), data: null };
    }
  }
}

module.exports = DefaultDb;