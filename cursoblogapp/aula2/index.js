const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const Post = require('./models/Post');

//config

//template engine
app.engine('handlebars', handlebars.engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(express.urlencoded({ extended: false }));

app.get("/", function (req, res) {
    Post.findAll().then(function (posts) {
        res.render('home', { posts: posts });
    });
});

//Rotas
app.get("/cad", function (req, res) {
    res.render('formulario');
});

app.post("/add", function (req, res) {
    Post.create({
        titulo: req.body.titulo,
        conteudo: req.body.conteudo
    }).then(function () {
        res.redirect('/');
    }).catch(function (erro) {
        res.send('Falha ao criar o post: ' + erro);
    });
});

app.get('/delete/:id',function(req, res){
    Post.destroy({where:{
        'id': req.params.id
    }}).then(function(){
        res.send('Postagem deletada com sucesso.');
    }).catch(function(erro){
        res.send('Esta postagem não existe');
    });
});

app.listen(8080, function () {
    console.log("Servidor rodando na URL http://localhost:8080");
});