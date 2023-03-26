const express = require('express');
const { Post, get } = require('../controllers/postController');
const router = express.Router();

router.route('/post').post(Post).get(get)


module.exports = router;