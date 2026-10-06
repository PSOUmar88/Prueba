import {Scoreboard} from './componentes/Scoreboard.js';

export class Game extends Phaser.Scene {

    constructor(){

        super({key: 'game'});
            }

            init(){

                //Establecer e iniciar marcador:
                this.scoreboard = new Scoreboard(this);

            }

            preload(){

                this.load.image('background', 'images/background.png');

                this.load.image('gameover', 'images/gameover.png');

                this.load.image('platform', 'images/platform.png');

                this.load.image('ball', 'images/ball.png');

                this.load.image('bluebrick', 'images/brickBlue.png');

                this.load.image('blackbrick', 'images/brickBlack.png');

                this.load.image('greenbrick', 'images/brickGreen.png');

                this.load.image('orangebrick', 'images/brickOrange.png');

            }

            create(){

                this.physics.world.setBoundsCollision(true, true, true, false);

                this.add.image(400,250,'background');

                this.gameoverImage = this.add.image(400,90,'gameover');

                this.gameoverImage.visible = false;  

                this.platform = this.physics.add.image(400,460, 'platform').setImmovable();

                this.platform.body.allowGravity = false;

                this.ball = this.physics.add.image(385,430,'ball');

                this.ball.setData('glue',true);

                this.ball.setCollideWorldBounds(true);

                //let velocity = 100 * Phaser.Math.Between(1.3,2);
                  //if(Phaser.Math.Between(0,10) > 5){
                 // velocity = 0-velocity;
               // }

                //this.ball.setVelocity(velocity,10);

                this.physics.add.collider(this.ball, this.platform, this.platformImpact,null,this);

                this.ball.setBounce(1);

                this.cursors = this.input.keyboard.createCursorKeys();

                //this.platform.setVelocity(100,10);

                this.scoreboard.create();
                
                this.miGrupo = this.physics.add.staticGroup();

                this.miGrupo.create(254, 244, 'bluebrick');

                this.miGrupo.create(375, 232, 'greenbrick');
                
            }

            platformImpact(ball, platform){

                this.scoreboard.incrementPoints(1);
                let relativeImpact = ball.x -platform.x;
                if (relativeImpact < 0.1 && relativeImpact > -0.1){

                    ball.setVelocity(Phaser.Math.Between(-10,10))

                }else{

                    ball.setVelocityX(10 * relativeImpact);
                    
                }
                  
            }

            ejecutar(){

                console.log('ha chocado');
                this.ball.setVelocity(10, -800);
            }

            update()

            {
                if (this.cursors.left.isDown) {
                    this.platform.setVelocityX(-500);
                    if(this.ball.getData('glue')){
                        this.ball.setVelocityX(-500);

                    }
                    

                }
                else if (this.cursors.right.isDown) {
                    this.platform.setVelocityX(500);
                    if(this.ball.getData('glue')){
                        this.ball.setVelocityX(500);

                    }
                }
                else 
                    {
                    this.platform.setVelocityX(0);

                    if(this.ball.getData('glue')){

                        this.ball.setVelocityX(0);

                    }
                }
                if (this.ball.y > 500) {
                this.gameoverImage.visible = true;
                this.scene.pause();
                }
                if(this.cursors.up.isDown){
                    this.ball.setVelocity(-75, -300);
                    this.ball.setData('glue',false)

                }
    }   
}
