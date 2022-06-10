const Distribution = require("..config");
const { getCategory } = require("./helpers");

module.exports = {
  /**
   * Returns customer award based on points he has
   * accumalated (i.e., respective distribution)
   * @param {Integer} points - Number of points.
   * @returns Award
   */
  getAward(points) {
    const index = getCategory(Distribution.selectDistribution(points));
    return Distribution.getAward(index);
  },
};
