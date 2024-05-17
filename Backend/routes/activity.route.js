const express = require('express');
const router = express.Router();
const roleCtrl = require('../controller/activity.controller');

router.post('/create_activity', roleCtrl.createActivity);
router.get('/get_activity/:id', roleCtrl.getActivity);
router.get('/get_activitybyid/:id', roleCtrl.getActivityData);
router.put('/get_activity/:id', roleCtrl.getActivityDataUpdate);
router.delete('/get_activity/:id', roleCtrl.getActivityDataDelete);
router.get('/search/:key', roleCtrl.getActivitySearch);
module.exports = router;