class DemographicControllers {
  constructor(database) {
    this.db = database;
  }

  async list({ column }) {
    if (!column) {
      console.log('attribute is mandatory to list db data');
      return { err: new Error(), data: null}
    }
    const filter = JSON.parse(JSON.stringify({
      column
    }));
    const { err, data } = await this.db.list(filter);
    if (err) return { err, data: null };
    return { err: null, data };
  }
}

module.exports = DemographicControllers;
