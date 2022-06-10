module.exports = {
  distributions: {
    a: [100, 0, 0, 0, 0, 0],
    b: [100, 0, 0, 0, 0, 0],
    c: [65, 20, 12, 2, 1, 0],
    d: [35, 33, 20, 7, 4, 1],
  },
  /**
   * Returns corresponding distribution based on given points
   *
   * @param {Integer} points - Customer's accumulated points
   * @returns Respective distribution
   */
  selectDistribution(points) {
    if (points >= 100) {
      return this.distributions.d;
    } else if (points >= 70) {
      return this.distributions.c;
    } else if (points >= 35) {
      return this.distributions.b;
    } else {
      return this.distributions.a;
    }
  },
  award: [0, 10, 25, 75, 100, 500],

  /**
   * Returns award from array
   * @param {Integer} index - Array index
   * @returns Award
   */
  getAward(index) {
    return this.award[index];
  },
};
