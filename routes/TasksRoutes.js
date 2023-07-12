const express = require('express')
const TaskController = require('../controllers/TaskController')
const router = express.Router();

router.get('/create', TaskController.createTaskView);
router.get('/', TaskController.showTasks);
router.get('/edit/:id', TaskController.editTaskView);

router.post('/update', TaskController.updateTask);
router.post('/toggleStatus', TaskController.toggleStatus);
router.post('/insert', TaskController.insertTask);
router.post('/delete', TaskController.deleteTask);
module.exports = router;