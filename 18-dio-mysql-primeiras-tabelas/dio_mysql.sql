CREATE TABLE pessoas (
    id_pessoa int NOT NULL AUTO_INCREMENT,
    nome varchar(30) NOT NULL,
    nascimento date,
    PRIMARY KEY (id_pessoa)
);

INSERT INTO pessoas (nome, nascimento) VALUES
('Bruno', '1981-04-13'),
('Liane', '1984-04-18'),
('Eduardo', '2006-09-27'),
('Valentina', '2014-05-29');

SELECT * FROM pessoas;
SELECT nome, nascimento FROM pessoas;

UPDATE pessoas SET nome = 'Bruno Seghese'; -- Alterou todos

UPDATE pessoas SET nome = 'Bruno Seghese' WHERE id_pessoa = 1;
UPDATE pessoas SET nome = 'Eduardo Seghese' WHERE id_pessoa = 3;
UPDATE pessoas SET nome = 'Valentina Seghese' WHERE id_pessoa = 4;

INSERT INTO pessoas (nome, nascimento) VALUES ('Luna', '2020-01-07');
DELETE FROM pessoas WHERE id_pessoa = 5;

SELECT * FROM pessoas ORDER BY nome;

DELETE FROM pessoas WHERE id_pessoa = 6;

SELECT * FROM pessoas ORDER BY nome DESC;

UPDATE pessoas SET genero = 'M' WHERE nome = 'Bruno Seghese';
UPDATE pessoas SET genero = 'F' WHERE id_pessoa = 2;
UPDATE pessoas SET genero = 'F' WHERE id_pessoa = 4;
UPDATE pessoas SET genero = 'M' WHERE id_pessoa = 3;

SELECT COUNT(id_pessoa) AS nome FROM pessoas GROUP BY genero; 

INSERT INTO pessoas (nome, nascimento, genero) VALUES ('Igor', '1994-01-02', 'M');
UPDATE pessoas SET nome = 'Igor Seghese' WHERE id_pessoa = 8;

SELECT COUNT(id_pessoa) AS nome, genero FROM pessoas GROUP BY genero;