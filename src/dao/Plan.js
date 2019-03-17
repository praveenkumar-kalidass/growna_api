/**
 * Dao to fetch Plan data
 *
 * @exports {Class} PlanDao
 */
const models = require('../models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

/**
 * PlanDao class
 *
 * @method {public} findPlan
 */
class PlanDao {
  /**
   * Dao to find plan based on specifications
   *
   * @param  {Number} engineCc
   * @param  {String} type
   * @param  {Function} findCB
   */
  findPlan(engineCc, type, findCB) {
    models.Plan.find({
      where: {
        minEngineCc: {
          [Op.lte]: engineCc
        },
        maxEngineCc: {
          [Op.gt]: engineCc
        },
        type
      }
    }).then((plan) => (
      findCB(null, plan)
    ), (findErr) => (
      findCB(findErr)
    ));
  }
}

module.exports = PlanDao;
