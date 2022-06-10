/**
 * Required to install lodash
 */
// const _ = require("lodash");

module.exports = {
  /**
   * Returns the index/category selected randomly based on
   * given distribution
   * @param {Array} distribution - Probability distribution
   * @returns Category
   */
  getCategory(distribution) {
    const sum = _.sum(distribution);
    const relativeAcc = _.random(0, 1, true);
    distribution = _.map(distribution, (count) => {
      return count / sum;
    });

    let accumulation = 0;
    for (let category = 0; category < distribution.length; category++) {
      accumulation += distribution[category];

      if (accumulation > relativeAcc) return category;
    }
  },
};
