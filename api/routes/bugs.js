const express = require('express');
const router = express.Router();

const bugsController = require('../controllers/bugs');

router.post('/', bugsController.addBug);
router.post('/', bugsController.bugHistory);
router.post('/', bugsController.bugUpdate);
router.post('/', bugsController.deleteBug);
router.post('/', bugsController.editBug);
router.get('/', bugsController.findAllBugs);
router.post('/', bugsController.findOneBug);
router.post('/', bugsController.fingBugByUser);


module.exports = router;