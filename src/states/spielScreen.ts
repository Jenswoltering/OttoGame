import * as Assets from '../assets';
import { Kern } from '../game-objects/kern';
import { Laser } from '../game-objects';
import { Schild } from '../game-objects';

export default class SpielScreen extends Phaser.State {
    // Hier Variablen fuer Sprites einfuegen
    private kernSpritesheet: Kern = null;
    private laserSprites: Phaser.Group = null;
    private schilde: Phaser.Group = null;
    private schild1: Schild = null;
    private schild2: Schild = null;
    private laserCollisionGroup: Phaser.Physics.P2.CollisionGroup = null;
    private schildCollisionGroup: Phaser.Physics.P2.CollisionGroup = null;
    private kernCollisionGroup: Phaser.Physics.P2.CollisionGroup = null;
    private steuerung: Phaser.CursorKeys = null;
    private runde: number = 0;
    private wasd: any;
    private lebenText: Phaser.Text = null;

    public create(): void {
        this.steuerung = this.game.input.keyboard.createCursorKeys();
        this.wasd = {
            up: this.game.input.keyboard.addKey(Phaser.Keyboard.W),
            down: this.game.input.keyboard.addKey(Phaser.Keyboard.S),
            left: this.game.input.keyboard.addKey(Phaser.Keyboard.A),
            right: this.game.input.keyboard.addKey(Phaser.Keyboard.D),
          };
        // Hier das Spielsetup initialisieren
        this.game.physics.startSystem(Phaser.Physics.P2JS);
        this.game.physics.p2.setImpactEvents(true);
        this.game.stage.backgroundColor = '#736357';
        this.laserSprites = this.game.add.group();
        this.schilde = this.game.add.group();
        this.schildCollisionGroup = this.game.physics.p2.createCollisionGroup();
        this.laserCollisionGroup = this.game.physics.p2.createCollisionGroup();
        this.kernCollisionGroup = this.game.physics.p2.createCollisionGroup();
        this.kernSpritesheet = new Kern(this.game, this.game.world.centerX, this.game.world.centerY);
        let style: Phaser.PhaserTextStyle = {
            font: '12px Arial',
            fill: '#000000',
            align: 'center'
        };
        this.lebenText = this.game.add.text(this.game.world.centerX, this.game.world.centerY, this.kernSpritesheet.getLeben().toString(), style);
        this.lebenText.anchor.setTo(0.58, 0.40);
         this.game.physics.p2.enable(this.kernSpritesheet, false);
         this.kernSpritesheet.body.setCircle(10);
        this.kernSpritesheet.body.kinematic = true;
        this.kernSpritesheet.body.setCollisionGroup(this.kernCollisionGroup);
        this.kernSpritesheet.body.collides(this.laserCollisionGroup, this.kernGetroffen, this);
        // this.schilde.add(new Schild(this.game, this.game.world.centerX , this.game.world.centerY));
        this.schild1 = new Schild(this.game, this.game.world.centerX , this.game.world.centerY );
        this.schild1.body.setCollisionGroup(this.schildCollisionGroup);
        this.schild1.body.collides(this.laserCollisionGroup, this.schildGetroffen, this);
        this.schild2 = new Schild(this.game, this.game.world.centerX , this.game.world.centerY );
        this.schild2.body.setCollisionGroup(this.schildCollisionGroup);
        this.schild2.body.collides(this.laserCollisionGroup, this.schildGetroffen, this);
        // this.schild.pivot.y = 20;
        // this.game.physics.p2.enableBody(this.schild, true);
        // this.schild.body.clearShapes();
        // this.schild.body.setRectangleFromSprite(0, 0, 0, -20);
        // this.schild.body.addRectangle(60, 5, 0, -20);
        // this.schild.body.updateCollisionMask(0, 0, 0, 0);
        // this.schild.body.offsetY = 222;
        // this.schild.body.setRectangle(60, 5);
        // this.schild1.add(this.schild);
        // this.schild1.pivot = new PIXI.Point(12, 12);
        // this.schild.body.offsetX = -200;
        // this.schild.pivot.y = -3;
        // this.schild.body.anchor.setTo(0.6, 8);
        this.erstelleLaser (this.runde * 1);

        // for (let index = 0; index < 10; index++) {
           // let neuerLaser = new Laser(this.game, 10);
           // this.game.physics.p2.enable(neuerLaser, false);
           // neuerLaser.body.setCollisionGroup(this.laserCollisionGroup);
           // neuerLaser.body.collides([this.schildCollisionGroup]);
           // this.laserSprites.add(neuerLaser);
       // }
    }
    public schildGetroffen(body1:  Phaser.Physics.P2.Body, body2:  Phaser.Physics.P2.Body): void {
        console.log(body2);
        body2.sprite.kill();
        console.log(body2.sprite.alive);

    }
    public kernGetroffen(body1:  Phaser.Physics.P2.Body, body2:  Phaser.Physics.P2.Body): void {
        console.log(body1);
        let kern = body1.sprite as Kern;
        if (kern.getLeben() !== 0 ) {
            this.lebenText.setText(kern.getLeben().toString());
        } else {
            this.lebenText.setText('Game Over');
        }
        kern.reduzierteLeben();
        console.log(kern.getLeben());
        body2.sprite.kill();
        console.log(body1.sprite.alive);

    }
    public update(): void {
       // hier spaeter ueberpruefung ob tasten gedrueckt werden
       // oder alles was sich bewegen/veraendern soll
        if (this.steuerung.left.isDown) {
            this.schild1.body.rotation -= 0.1;
        }
        else if (this.steuerung.right.isDown) {
            this.schild1.body.rotation += 0.1;
        }

        if (this.steuerung.up.isDown) {
            this.schild1.body.rotation -= 0.1;
        }
        else if (this.steuerung.down.isDown) {
            this.schild1.body.rotation -= 0.1;
        }

        if (this.wasd.left.isDown) {
            this.schild2.body.rotation -= 0.1;
        }
        else if (this.wasd.right.isDown) {
            this.schild2.body.rotation += 0.1;
        }
       this.laserSprites.forEachAlive(this.moveLaser, this);
       if (this.laserSprites.countLiving() <= 4) {
            this.runde += 1;
            this.erstelleLaser(this.runde * 4);
       }
    }
    private moveLaser(laser: Laser): void {
        this.accelerateToObject(laser, this.kernSpritesheet, laser.gewicht);
    }
    private erstelleLaser(anzahl: number): void {
        for (let index = 0; index < anzahl; index++) {
            let neuerLaser = new Laser(this.game, Math.random() * 20 + 1);
            this.game.physics.p2.enable(neuerLaser, false);
            neuerLaser.body.setCollisionGroup(this.laserCollisionGroup);
            neuerLaser.body.collides([this.schildCollisionGroup, this.kernCollisionGroup]);
            this.laserSprites.add(neuerLaser);
            this.game.stage.backgroundColor = Phaser.Color.getRandomColor();
        }
    }
    private accelerateToObject(obj1, obj2, speed) {
        if (obj1 !== 'undefined') {
            if (typeof speed === 'undefined') { speed = 60; }
            let angle = Math.atan2(obj2.y - obj1.y, obj2.x - obj1.x); // richtung zum Kern
            obj1.body.rotation = angle + (90 * Math.PI / 180);  // correct angle of angry bullets (depends on the sprite used)
            obj1.body.force.x = Math.cos(angle) * speed;    // accelerateToObject
            obj1.body.force.y = Math.sin(angle) * speed;
        }
    }
}
