const pool = require('./pool');

class DefaultDb {
  constructor({ table, model }) {
    this.db = pool;
    this.table = table;
    this.fromDatabase = model.fromDatabase;
  }

  async list(filters)  {
    try {
      const models = await this.db(this.table)
      .select(filters.column)
      // .limit(10)
      return { err: null, data: models };
    } catch (e) {
      console.log({ error: 'DB list', stack: e });
      return { err: new Error(), data: null };
    }
  }

  async getBy(query) {
    try {
      const models = await this.db(this.table)
      .select('age')
      .where(query)
      return { err: null, data: models }
    } catch (e) {
      console.log({ error: 'DB getBy', stack: e });
      return { err: new Error(), data: null };
    }
  }

  async listColumns() {
    try {
      const models = await this.db(this.table)
      .select('*')
      .from('INFORMATION_SCHEMA.COLUMNS')
      return { err: null, data: models }
    } catch (e) {
      console.log({ error: 'DB listColumns', stack: e });
      return { err: new Error(), data: null }
    }
  }
}

module.exports = DefaultDb;