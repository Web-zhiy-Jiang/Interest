var game = new Phaser.Game(320,480,Phaser.CANVAS);

var bootState = function(){
    var that = this;
    this.init = function(){
        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        // 屏幕适配方案
        // this.scaleX = document.body.offsetWidth/this.world.width;
        // this.scaleY = window.innerHeight / this.world.height;
        // this.scale.scale.scaleMode = Phaser.ScaleManager.USER_SCALE;
        // this.scale.setUserScale(this.scaleX,this.scaleY);
        // 游戏资源加载进度
        this.progressText = this.add.text(this.world.centerX,this.world.centerY);
        this.progressText.anchor = {x:0.5,y:0.5};
    };
    this.preload = function(){
        this.load.image('block','./block.png');
        this.load.image('yellow','./yellow.png');
        this.load.image('pink','./pink.png');
        this.load.image('lightblue','./lightblue.png');
        this.load.image('orange','./orange.png');
        this.load.onFileComplete.add(function(progress){
            that.progressText.text = progress+'%';
        });
    };
    this.create = function(){
        if(this.progressText.text=="100%"){
            this.state.start('main');
        }
    }
}
var mainState = function(){
    var that = this;
    this.create = function(){
        this.game.physics.startSystem(Phaser.Physics.ARCADE);
        this.bg = this.add.image(0,0,'block');
        this.bg.width = this.world.width;
        this.bg.height = this.world.height;
        this.og = this.add.image(0,0,'orange');
        this.og.width = this.world.width;
        this.ogr = this.add.image(0,0,'orange');
        this.ogr.ancher.set(0.5);
        this.ogr.y =this.ogr.height;
        this.ogr.x = this.world.centerX;
        this.ogr.angle = 45;
        this.bl = this.add.group();
        this.bl.enableBody = true;
    };
    this.dt = 0;
    this.update = function(){
        this.dt++;
        if(this.dt%10==0){
            this.b = this.bl.create(0,0,'lightblue')//随机一个色块
            this.b.body.velocity.y = 300;
        }
    }
}
game.state.add('boot',bootState);
game.state.add('main',mainState);
game.state.start('boot');