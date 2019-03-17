/**
 * Utils JS Functions
 *
 * @exports {Object}
 */
module.exports = {
  /**
   * Method to round number based on decimals
   *
   * @param  {Number} value
   * @param  {Number} decimals
   */
  round: (value, decimals) => {
    const tens = Math.pow(10, decimals);
    return (Math.round(value * tens) / tens);
  }
};
