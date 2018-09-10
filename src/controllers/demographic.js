class DemographicControllers {
  constructor(database) {
    this.db = database;
  }

  async list({ column }) {
    if (!column) {
      console.log('column is mandatory to list db data');
      return { err: new Error(), data: null}
    }
    const filter = JSON.parse(JSON.stringify({
      column
    }));
    const { err, data } = await this.db.list(filter);
    if (err) return { err, data: null };
    return { err: null, data };
  }

  async get(column) {
    if (!column) {
      console.log('missing mandatory attribute');
      return { err: new Error(), data: null }
    }
    const { err, data } = await this.db.getBy(column);
    if (err) return { err, data: null};
    return { err: null, data };
  }

  async getColumns() {
    const { err, data } = await this.db.listColumns();
    if (err) return { err, data: null };
    return { err: null, data };
  }
}

module.exports = DemographicControllers;
