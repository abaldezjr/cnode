CREATE TABLE usuarios (
    nome VARCHAR(50),
    email VARCHAR(100),
    idade INT
);


SELECT * FROM usuarios;

INSERT INTO usuarios(nome, email, idade) VALUES("Alexandre", "abaldezjr@gmail.com", 34);
INSERT INTO usuarios(nome, email, idade) VALUES("Rodrigo", "rodrigoflipoff@gmail.com", 34);
INSERT INTO usuarios(nome, email, idade) VALUES("Fernanda", "fernandachlopes@gmail.com", 34);

update usuarios set idade=31 where nome="Fernanda";