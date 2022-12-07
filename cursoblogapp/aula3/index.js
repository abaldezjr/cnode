const mongoose = require('mongoose');

//Conf mongoose
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://127.0.0.1/blog").then(function () {
    console.log("MongoDB conectado.");
}).catch(function (erro) {
    console.log("Houve um erro de conexão:" + erro);
});

//Model
const UsuarioSchema = mongoose.Schema({
    nome: {
        type: String,
        require: true
    },
    sobrenome: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    idade: {
        type: Number,
        require: true
    },
    pais: {
        type: String,
        require: false
    }
});


//Collection
mongoose.model('usuarios', UsuarioSchema);

const novoUsuario = mongoose.model('usuarios');

new novoUsuario({
    nome: "Alexandre",
    sobrenome: "Baldez Jr.",
    email: "abaldezjr@gmail.com",
    idade: 34,
    pais: "Brasil"
}).save().then(
    () => console.log("Usuario criado com sucesso")
).catch((erro) =>
    console.log("Houve um erro ao registrar usuario:" + erro)
);