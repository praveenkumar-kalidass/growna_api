/**
 * Service to process Image
 *
 * @exports {Class} ImageService
 */
const imageDao = require('../dao/Image');

/**
 * ImageService class
 *
 * @method {public} getImageById
 * @method {public} createDefaultImage
 * @method {public} updateImagePath
 */
let ImageService = {};

/**
 * Method to get image by id
 *
 * @param  {UUID} id
 * @param  {Function} getCB
 */
ImageService.getImageById = (id, getCB) => {
  imageDao.findImage(id, (imageErr, image) => {
    if (imageErr) {
      return getCB(imageErr);
    }
    return getCB(null, image);
  });
};

/**
 * Method to create image with default app image
 *
 * @param  {String} type
 * @param  {Function} createCB
 */
ImageService.createDefaultImage = (type, createCB) => {
  imageDao.createImage({type}, (imageErr, image) => {
    if (imageErr) {
      return createCB(imageErr);
    }
    return createCB(null, image);
  });
};

/**
 * Method to update image path
 *
 * @param  {UUID} id
 * @param  {String} path
 * @param  {Function} updateCB
 */
ImageService.updateImagePath = (id, path, updateCB) => {
  imageDao.updateImage(id, path, (imageErr, image) => {
    if (imageErr) {
      return updateCB(imageErr);
    }
    return updateCB(null, image);
  });
};

module.exports = ImageService;
