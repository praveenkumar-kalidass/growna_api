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
 * @method {public} createImage
 * @method {public} updateImage
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
  /**
   * Create a new image with default path
   *
   * @param  {String} type
   * @param  {Function} createCB
   */
  createImage(type, createCB) {
    models.Image.create({type}).then((image) => (
      createCB(null, image)
    ), (createErr) => (
      createCB(createErr)
    ));
  }
  /**
   * Update image path
   *
   * @param  {UUID} id
   * @param  {String} path
   * @param  {Function} updateCB
   */
  updateImage(id, path, updateCB) {
    models.Image.update({path}, {
      where: {id},
      returning: true
    }).then((image) => (
      updateCB(null, image[1][0])
    ), (updateErr) => (
      updateCB(updateErr)
    ));
  }
}

module.exports = ImageDao;
