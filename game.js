var config ={
    //configuracoes basicas
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene:{
        preload:preload,
        create:create,
        update:update
    }
};

//variaveis
var game = new Phaser.Game(config);
var passarinho;
var velx = 5, vely = 5;

//aqui se inicia o ciclo da vida do jogo
function preload(){ //função para carregar objetos que serão inseridos no jogo
    this.load.image('bg','assets/bg_space.png');//Carrega a imagem do plano de fundo
    this.load.spritesheet('bird','assets/bird-purple.png',{frameWidth:75,frameHeight:75}); //Carrega a spritesheet do passaro

}

function create(){ // cria objetos dentro do jogo
    this.add.image(400,300,'bg').setScale(1.2); //Adiciona o background no jogo
    passarinho = this.add.sprite(100,300,'bird').setScale(1.3);//adiciona uma das sprites do passaro

    //configurando a animacao de voo do passaro
    this.anims.create({
        key:'fly', //Nome para chamar a animacao
        frames: this.anims.generateFrameNumbers('bird',{start: 0, end:7}), //define quais sprites vao rodar na animacao
        frameRate: 10, //velocidade da animacao
        repeat: -1 //definindo para repeticao infinita
    });
    passarinho.anims.play('fly', true); //rodar a animacao
}

function update(){ //atualização da lógica que será aplicada dentro do jogo
    passarinho.x += velx; //determina a velocidade de deslocamento do passaro no eixo x
    passarinho.y += vely; //determina a velocidade de deslocamento do passaro no eixo y
    if(passarinho.x > 700 || passarinho.x < 100){ //inverte a direcao do passaro no eixo x
        velx *= -1;
    }
    if(passarinho.y > 500 || passarinho.y <100){ //inverte a direcao do passaro no eixo y
        vely *= -1;
    }
    if(velx>0){ //espelha a imagem de acordo com a direacao do passaro no eixo x
        passarinho.setFlip(false, false);
    }else{
        passarinho.setFlip(true,false);
    }

}