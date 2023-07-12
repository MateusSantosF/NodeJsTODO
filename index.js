const express = require('express')
const exphdbs = require('express-handlebars')
const conn = require('./db/conn')
// Routes
const tasksRoutes = require('./routes/TasksRoutes');

const PORT = 3000;
const hbs = exphdbs.create({
    partialsDir:['views/partials']
})
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(express.static('public'))
app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')
app.set('views', './views');

app.use('/tasks', tasksRoutes);
app.get('/', (req,res)=>{
    
    res.redirect('/tasks');
})

conn.sync().then(()=>{
    app.listen(PORT, (err)=>{
        console.log(`Aplicação rodando na porta ${PORT}`)
    })
}).catch(err=>{
    console.log("Erro ao sincronizar modelos com banco de dados.\n" + err);
})