function start() {
  // Inicio da função start()

  $("#inicio").hide();

  $("#fundoGame").append("<div id='jogador' class='animaJogador'></div>");
  $("#fundoGame").append("<div id='inimigo1' class='animaInimigo1'></div>");
  $("#fundoGame").append("<div id='inimigo2'></div>");
  $("#fundoGame").append("<div id='amigo' class='animaAmigo'></div>");
  $("#fundoGame").append("<div id='placar1'></div>");
  $("#fundoGame").append("<div id='energia'></div>");

  //Principais variáveis do jogo
  let jogo = {};
  let TECLA = {
    W: 87,
    S: 83,
    D: 68,
    A: 65,
    space: 32,
  };
  jogo.pressionou = [];
  let velocidadeInimigo1 = 5;
  let velocidadeInimigo2 = 3;
  let posicaoX = 0;
  let posicaoY = 180;
  let podeAtirar = true;
  let fimdejogo = false;
  let pontos = 0;
  let salvos = 0;
  let perdidos = 0;
  let energiaAtual = 3;

  let somDisparo = document.getElementById("somDisparo");
  let somExplosao = document.getElementById("somExplosao");
  let musica = document.getElementById("musica");
  let somGameover = document.getElementById("somGameover");
  let somPerdido = document.getElementById("somPerdido");
  let somResgate = document.getElementById("somResgate");

  // Música em loop
  musica.addEventListener(
    "ended",
    function () {
      musica.currentTime = 0;
      musica.play();
    },
    false
  );
  musica.play();

  //Verifica se o usuário pressionou alguma tecla
  $(document).keydown(function (e) {
    jogo.pressionou[e.which] = true;
  });

  $(document).keyup(function (e) {
    jogo.pressionou[e.which] = false;
  });

  //Game Loop
  jogo.timer = setInterval(loop, 30);

  function loop() {
    movefundo();
    movejogador();
    moveinimigo1();
    moveinimigo2();
    moveamigo();
    colisao();
    placar();
    energia();
  } // Fim da função loop()

  //Função que movimenta o fundo do jogo
  function movefundo() {
    let esquerda = parseInt($("#fundoGame").css("background-position"));
    $("#fundoGame").css("background-position", esquerda - 2);
  } // fim da função movefundo()

  //Função que movimenta o jogador
  function movejogador() {
    if (jogo.pressionou[TECLA.W]) {
      let topo = parseInt($("#jogador").css("top"));
      $("#jogador").css("top", topo - 10);
      if (topo <= 40) {
        $("#jogador").css("top", topo);
      }
    }

    if (jogo.pressionou[TECLA.S]) {
      let topo = parseInt($("#jogador").css("top"));
      $("#jogador").css("top", topo + 10);
      if (topo >= 515) {
        $("#jogador").css("top", topo);
      }
    }

    if (jogo.pressionou[TECLA.A]) {
      let esq = parseInt($("#jogador").css("left"));
      $("#jogador").css("left", esq - 10);
      if (esq <= 20) {
        $("#jogador").css("left", esq);
      }
    }

    if (jogo.pressionou[TECLA.D]) {
      let esq = parseInt($("#jogador").css("left"));
      $("#jogador").css("left", esq + 10);
      if (esq >= 330) {
        $("#jogador").css("left", esq);
      }
    }

    if (jogo.pressionou[TECLA.space]) {
      //Chama função Disparo
      disparo();
    }
  } // fim da função movejogador()

  // Função que movimenta o inimigo 1
  function moveinimigo1() {
    posicaoX = parseInt($("#inimigo1").css("left"));
    $("#inimigo1").css("top", posicaoY);
    $("#inimigo1").css("left", posicaoX - velocidadeInimigo1);

    if (posicaoX <= 0) {
      posicaoY = parseInt(Math.random() * (250 - 50) + 50);
      $("#inimigo1").css("left", 720);
      $("#inimigo1").css("top", posicaoY);
    }
  } //Fim da função moveinimigo1()

  // Função que movimenta o inimigo 2
  function moveinimigo2() {
    posicaoX = parseInt($("#inimigo2").css("left"));
    $("#inimigo2").css("left", posicaoX - velocidadeInimigo2);

    if (posicaoX <= 0) {
      $("#inimigo2").css("left", 720);
    }
  } // Fim da função moveinimigo2()

  // Função que movimenta o amigo
  function moveamigo() {
    posicaoX = parseInt($("#amigo").css("left"));
    $("#amigo").css("left", posicaoX + 1);
    if (posicaoX > 970) {
      $("#amigo").css("left", 0);
    }
  } // fim da função moveamigo()

  // Função para atirar
  function disparo() {
    if (podeAtirar == true) {
      somDisparo.play();

      podeAtirar = false;
      positionX = parseInt($("#jogador").css("left"));
      positionY = parseInt($("#jogador").css("top"));
      tiroX = positionX + 180;
      tiroY = positionY + 50;
      $("#fundoGame").append("<div id='disparo'></div");
      $("#disparo").css("left", tiroX);
      $("#disparo").css("top", tiroY);

      let tempoDisparo = setInterval(executaDisparo, 30);

      function executaDisparo() {
        positionX = parseInt($("#disparo").css("left"));
        $("#disparo").css("left", positionX + 15);

        if (positionX > 900) {
          clearInterval(tempoDisparo);
          $("#disparo").remove();
          podeAtirar = true;
        }
      } // Fecha executaDisparo()
    } // Fim da função disparo
  } // Fecha disparo()

  // Função que detecta colisão das divs
  function colisao() {
    let colisao1 = $("#jogador").collision($("#inimigo1"));
    let colisao2 = $("#jogador").collision($("#inimigo2"));
    let colisao3 = $("#disparo").collision($("#inimigo1"));
    let colisao4 = $("#disparo").collision($("#inimigo2"));
    let colisao5 = $("#jogador").collision($("#amigo"));
    let colisao6 = $("#inimigo2").collision($("#amigo"));

    // jogador com o inimigo1
    if (colisao1.length > 0) {
      energiaAtual--;

      inimigo1X = parseInt($("#inimigo1").css("left"));
      inimigo1Y = parseInt($("#inimigo1").css("top"));

      explosao1(inimigo1X, inimigo1Y);
      $("#inimgo1").remove();

      posicaoY = parseInt(Math.random() * (250 - 50) + 50);
      $("#inimigo1").css("left", 860);
      $("#inimigo1").css("top", posicaoY);
    }

    // jogador com o inimigo2
    if (colisao2.length > 0) {
      energiaAtual--;

      inimigo2X = parseInt($("#inimigo2").css("left"));
      inimigo2Y = parseInt($("#inimigo2").css("top"));

      explosao2(inimigo2X, inimigo2Y);
      $("#inimigo2").remove();
      reposicionaInimigo2();
    }

    // disparo com o inimigo1
    if (colisao3.length > 0) {
      pontos = pontos + 100;
      velocidadeInimigo1 = velocidadeInimigo1 + 0.3;

      inimigo1X = parseInt($("#inimigo1").css("left"));
      inimigo1Y = parseInt($("#inimigo1").css("top"));

      explosao1(inimigo1X, inimigo1Y);
      $("#disparo").css("left", 950);

      posicaoY = parseInt(Math.random() * (250 - 50) + 50);
      $("#inimigo1").css("left", 860);
      $("#inimigo1").css("top", posicaoY);

      // $("#inimigo1").remove();
      // reposicionaInimigo1();
    }

    // disparo com o inimigo2
    if (colisao4.length > 0) {
      pontos = pontos + 50;
      velocidadeInimigo2 = velocidadeInimigo2 + 0.2;

      inimigo2X = parseInt($("#inimigo2").css("left"));
      inimigo2Y = parseInt($("#inimigo2").css("top"));

      $("#inimigo2").remove();
      explosao2(inimigo2X, inimigo2Y);
      $("#disparo").css("left", 950);
      reposicionaInimigo2();
    }

    // jogador com o amigo
    if (colisao5.length > 0) {
      salvos++;
      somResgate.play();

      reposicionaAmigo();
      $("#amigo").remove();
    }

    // inimigo2 com o amigo

    if (colisao6.length > 0) {
      perdidos++;

      amigoX = parseInt($("#amigo").css("left"));
      amigoY = parseInt($("#amigo").css("top"));

      explosao3(amigoX, amigoY);
      $("#amigo").remove();
      reposicionaAmigo();
    }
  } // Fim da função colisao()

  // Explosão 1 - jogador com o inimigo1
  function explosao1(inimigo1X, inimigo1Y) {
    somExplosao.play();
    $(".animaExplosao").remove();
    $("#fundoGame").append("<div id='explosao1' class='animaExplosao'></div");
    let div = $("#explosao1");
    div.css("left", inimigo1X);
    div.css("top", inimigo1Y);
    let tempoExplosao = setInterval(removeExplosao, 1000);

    function removeExplosao() {
      div.remove();
      clearInterval(tempoExplosao);
    }
  } // Fim da função explosao1()

  // Explosão 2 - jogador com o inimigo2
  function explosao2(inimigo2X, inimigo2Y) {
    somExplosao.play();
    $(".animaExplosao").remove();
    $("#fundoGame").append("<div id='explosao2' class='animaExplosao'></div");
    let div2 = $("#explosao2");
    div2.css("top", inimigo2Y);
    div2.css("left", inimigo2X);
    let tempoExplosao2 = setInterval(removeExplosao2, 1000);

    function removeExplosao2() {
      div2.remove();
      clearInterval(tempoExplosao2);
    }
  } // Fim da função explosao2()

  // Explosão 3 - amigo com o inimigo2
  function explosao3(amigoX, amigoY) {
    somPerdido.play();
    $("#fundoGame").append("<div id='explosao3' class='animaAmigoMorte'></div");
    $("#explosao3").css("top", amigoY);
    $("#explosao3").css("left", amigoX);
    let tempoExplosao3 = setInterval(resetaExplosao3, 1500);

    function resetaExplosao3() {
      $("#explosao3").remove();
      clearInterval(tempoExplosao3);
    }
  } // Fim da funçãoo explosao3()

  // reposiciona inimigo2
  function reposicionaInimigo2() {
    let tempoColisao4 = setInterval(reposiciona4, 5000);

    function reposiciona4() {
      clearInterval(tempoColisao4);
      if (fimdejogo == false) {
        $("#fundoGame").append(
          "<div id='inimigo2' class='animaInimigo2'></div"
        );
      }
    }
  } // Fim da função reposicionaInimigo2()

  // reposiciona amigo
  function reposicionaAmigo() {
    let tempoAmigo = setInterval(reposiciona6, 6000);

    function reposiciona6() {
      clearInterval(tempoAmigo);
      if (fimdejogo == false) {
        $("#fundoGame").append("<div id='amigo' class='animaAmigo'></div>");
      }
    }
  } // Fim da função reposicionaAmigo()

  // placar
  function placar() {
    $("#placar1").html(
      "<h2> Pontos: " +
        pontos +
        " Salvos: " +
        salvos +
        " Perdidos: " +
        perdidos +
        "</h2>"
    );
  } // Fim da função placar()

  // barra de energia
  function energia() {
    if (energiaAtual == 3) {
      $("#energia").css("background-image", "url(./assets/imgs/energia3.png)");
    }

    if (energiaAtual == 2) {
      $("#energia").css("background-image", "url(./assets/imgs/energia2.png)");
    }

    if (energiaAtual == 1) {
      $("#energia").css("background-image", "url(./assets/imgs/energia1.png)");
    }

    if (energiaAtual == 0) {
      $("#energia").css("background-image", "url(./assets/imgs/energia0.png)");

      // Game Over
      gameOver();
    }
  } // Fim da função energia()

  // game over
  function gameOver() {
    fimdejogo = true;
    musica.pause();
    somGameover.play();

    clearInterval(jogo.timer);

    $("#jogador").remove();
    $("#inimigo1").remove();
    $("#inimigo2").remove();
    $("#amigo").remove();

    $("#fundoGame").append("<div id='fim'></div>");

    $("#fim").html(
      "<h1> Game Over </h1><p>Sua pontuação foi: " +
        pontos +
        "</p>" +
        "<div id='reinicia' onClick=reiniciaJogo()><a class='botao' href='#'>Jogar Novamente !</a></div>"
    );
  } // Fim da função gameOver();
} // Fim da função start

// Reinicia o Jogo

function reiniciaJogo() {
  somGameover.pause();
  $("#fim").remove();
  start();
} // Fim da função reiniciaJogo
