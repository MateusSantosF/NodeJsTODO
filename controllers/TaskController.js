const Task = require('../models/Taks')

module.exports = class TaskController{
    static createTaskView(req,res){
        res.render('tasks/create')
    }

    static async showTasks(req, res){

        const tasks = await Task.findAll({raw:true});~

        res.render('tasks/tasks', {tasks})
    }

    static async insertTask(req,res){
        const task = {
            name: req.body.title,
            description: req.body.description,
            done: false
        }

        await Task.create(task);
        res.redirect('/tasks')
    }

    static async deleteTask(req,res){
        const taskId = req.body.id;

        await Task.destroy({where: {id:taskId}})

        res.redirect('/tasks')
    }

    static async editTaskView(req,res){
        const taskId = req.params.id;

        const task = await Task.findOne({raw:true, where:{id:taskId}})

        res.render('tasks/edit', {task})
    }

    static async updateTask(req,res){
        const task = {
            id: req.body.id,
            name: req.body.title,
            description: req.body.description,
            done: false
        }
       await Task.update(task,{where: {id:task.id}});

        res.redirect('/tasks')
    }

    static async toggleStatus(req,res){
        const taskId = req.body.id
        const task = await Task.findOne({raw:true, where:{id:taskId}})
        task.done = !task.done;
        console.log(task)
        await Task.update(task,{where: {id:task.id}});
        res.redirect('/tasks')
    }
}