/**
 * Service to process Image
 *
 * @exports {Class} ImageService
 */
const ImageDao = require('../dao/Image');
const imageDao = new ImageDao();

/**
 * ImageService class
 *
 * @method {public} getImageById
 */
class ImageService {
  /**
   * Method to get image by id
   *
   * @param  {UUID} id
   * @param  {Function} getCB
   */
  getImageById(id, getCB) {
    imageDao.findImage(id, (imageErr, image) => {
      if (imageErr) {
        return getCB(imageErr);
      }
      return getCB(null, image);
    });
  }
}

module.exports = ImageService;
