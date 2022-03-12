SELECT * FROM videos;

SELECT * FROM videos_canais;

SELECT * FROM videos_canais 
JOIN videos ON videos_canais.fk_video = videos.id_video;

SELECT * FROM videos_canais AS vc 
JOIN canais AS c ON vc.fk_canal = c.id_canal;

SELECT * FROM videos_canais AS vc 
JOIN videos AS v ON vc.fk_video = v.id_video
JOIN canais AS c ON vc.fk_canal = c.id_canal;

SELECT v.nome_video, v.autor_video, c.nome_canal
FROM videos_canais AS vc 
JOIN videos AS v ON vc.fk_video = v.id_video
JOIN canais AS c ON vc.fk_canal = c.id_canal;

SELECT *
FROM videos_canais AS vc 
JOIN videos AS v ON vc.fk_video = v.id_video
JOIN canais AS c ON vc.fk_canal = c.id_canal;

SELECT * FROM videos_canais AS vc 
RIGHT OUTER JOIN videos AS v 
ON vc.fk_video = v.id_video
RIGHT OUTER JOIN canais AS c
ON vc.fk_canal = c.id_canal;

SELECT v.id_video, v.nome_video FROM videos AS v 
LEFT OUTER JOIN videos_canais AS vc
ON v.id_video = vc.fk_video
UNION
SELECT c.id_canal, c.nome_canal FROM
videos_canais AS vc RIGHT OUTER JOIN canais AS c
ON vc.fk_canal = c.id_canal;

-- SELECT v.id_video, v.nome_video FROM videos AS v 
-- JOIN videos_canais AS vc
-- ON v.id_video = vc.fk_video
-- UNION
-- SELECT c.id_canal, c.nome_canal FROM
-- videos_canais AS
-- vc JOIN canais AS c
-- ON vc.fk_canal = c.id_canal;

SELECT * FROM videos_canais 
JOIN videos ON videos_canais.fk_video = videos.id_video
JOIN canais ON videos_canais.fk_canal = canais.id_canal;

SELECT * FROM videos_canais 
JOIN videos ON videos_canais.fk_video = videos.id_video
JOIN canais ON videos_canais.fk_canal = canais.id_canal
WHERE canais.id_canal = 2;

