const express = require('express');
const router = express.Router();
const { homePage } = require('../controller/home');
const {
  uploadImages,
  resizeImages,
  getResultImages,
} = require('../controller/imageUpload');

router.route('/').get(homePage);
router
  .route('/multiple-upload')
  .post(uploadImages, resizeImages, getResultImages);

module.exports = router;
