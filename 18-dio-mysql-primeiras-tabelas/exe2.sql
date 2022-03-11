INSERT INTO `videos` (autor, titulo, likes, dislikes) VALUES ('1', 'MySql', '10', '2');
INSERT INTO `videos` (autor, titulo, likes, dislikes) VALUES ('1', 'HTML', '30', '1');
INSERT INTO `videos` (autor, titulo, likes, dislikes) VALUES ('2', 'CSS', '18', '3');
INSERT INTO `videos` (autor, titulo, likes, dislikes) VALUES ('2', 'JavaScript', '10', '2');
INSERT INTO `videos` (autor, titulo, likes, dislikes) VALUES ('3', 'Bootstrap', '5', '0');

INSERT INTO `autores` (nome, nascimento) VALUES ('Bruno  ', '1981-04-13');
INSERT INTO `autores` (nome, nascimento) VALUES ('Liane', '1984-04-18');
INSERT INTO `autores` (nome, nascimento) VALUES ('Eduardo', '2006-09-27');

SELECT * FROM videos JOIN autores ON videos.fk_autor = autores.id_autor;

SELECT videos.titulo, autores.nome FROM videos JOIN autores ON videos.fk_autor = autores.id_autor;
SELECT autores.nome, videos.titulo FROM videos JOIN autores ON videos.fk_autor = autores.id_autor;

INSERT INTO videos (fk_autor, titulo, likes, dislikes) VALUES (1, 'PHP', '15', '10');

INSERT INTO seo (categorias) VALUES ('Frontend');
INSERT INTO seo (categorias) VALUES ('Backend');

UPDATE videos SET fk_seo = 1 WHERE id_video = 6;

SELECT * FROM videos JOIN seo ON videos.fk_seo = seo.id_seo;

SELECT videos.titulo, seo.categorias FROM videos JOIN seo ON videos.fk_seo = seo.id_seo; -- 2 tabelas

SELECT videos.titulo, autores.nome, seo.categorias FROM videos JOIN seo ON videos.fk_seo = seo.id_seo JOIN autores ON videos.fk_autor = autores.id_autor; -- 3 tabelas

INSERT INTO playlist (nome_playlist) VALUES ('HTML + CSS');
INSERT INTO playlist (nome_playlist) VALUES ('HTML + PHP + JavaScript');
INSERT INTO playlist (nome_playlist) VALUES ('Phyton + PHP');

INSERT INTO videos_playlist (fk_videos, fk_playlist) VALUES (1, 1);
INSERT INTO videos_playlist (fk_videos, fk_playlist) VALUES (2, 1);

INSERT INTO videos_playlist (fk_videos, fk_playlist) VALUES (1, 6);
INSERT INTO videos_playlist (fk_videos, fk_playlist) VALUES (5, 6);

SELECT * FROM playlist JOIN videos_playlist ON playlist.id_playlist = videos_playlist.fk_playlist;

SELECT * FROM playlist 
JOIN videos_playlist ON playlist.id_playlist = videos_playlist.fk_playlist 
JOIN videos ON videos.id_video = videos_playlist.fk_videos;

SELECT playlist.nome_playlist, videos.titulo FROM playlist 
JOIN videos_playlist ON playlist.id_playlist = videos_playlist.fk_playlist 
JOIN videos ON videos.id_video = videos_playlist.fk_videos;

SELECT playlist.nome_playlist, videos.titulo, autores.nome FROM playlist 
JOIN videos_playlist ON playlist.id_playlist = videos_playlist.fk_playlist 
JOIN videos ON videos.id_video = videos_playlist.fk_videos
JOIN autores ON videos.fk_autor = autores.id_autor;

SELECT * FROM playlist JOIN autores ON playlist.fk_autor = autores.id_autor;

SELECT playlist.nome_playlist, autores.nome FROM playlist JOIN autores ON playlist.fk_autor = autores.id_autor;
