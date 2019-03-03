/**
 * Dao to fetch Image
 *
 * @exports {Class} ImageDao
 */
const models = require('../models');

/**
 * ImageDao class
 *
 * @method {public} findImage
 */
class ImageDao {
  /**
   * Method to get image by id
   *
   * @param  {UUID} id
   * @param  {Function} findCB
   */
  findImage(id, findCB) {
    models.Image.findById(id).then((image) => (
      findCB(null, image)
    ), (findErr) => (
      findCB(findErr)
    ));
  }
}

module.exports = ImageDao;
