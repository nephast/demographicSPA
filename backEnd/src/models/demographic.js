class Demographic {
  constructor() {
   this.education = undefined;
  }

  static fromDatabase(data) {
    return new Demographic()
    .setEducation(data.education);
  }

  setEducation(education) {
    this.education = education;
    return this;
  }
}

module.exports = Demographic;
