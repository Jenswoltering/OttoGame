import * as Assets from '../assets';
import { Kern } from '../game-objects/kern';
import { Laser } from '../game-objects';
import { Schild } from '../game-objects';

export default class SpielScreen extends Phaser.State {
    // Hier Variablen fuer Sprites einfuegen
    private kernSpritesheet: Phaser.Sprite = null;
    private laserSprites: Phaser.Group = null;
    private schilde: Phaser.Group = null;
    private schild: Schild = null;

    public create(): void {
        // Hier das Spielsetup initialisieren
        this.game.physics.startSystem(Phaser.Physics.P2JS);
        this.game.stage.backgroundColor = '#736357';
        this.laserSprites = this.game.add.group();
        this.schilde = this.game.add.group();
        this.kernSpritesheet = new Kern(this.game, this.game.world.centerX, this.game.world.centerY);
        // this.schilde.add(new Schild(this.game, this.game.world.centerX , this.game.world.centerY));
        this.schild = new Schild(this.game, this.game.world.centerX , this.game.world.centerY);
        this.game.physics.p2.enableBody(this.schild, true);
        // this.schild.pivot.y = -3;
        // this.schild.body.
        // this.schild.body.anchor.setTo(0.6, 8);
        this.schild.body.kinematic = true;
        for (let index = 0; index < 10; index++) {
            let neuerLaser = new Laser(this.game, 90);
            this.game.physics.p2.enable(neuerLaser, false);
            this.laserSprites.add(neuerLaser);
        }
    }
    public update(): void {
       // hier spaeter ueberpruefung ob tasten gedrueckt werden
       // oder alles was sich bewegen/veraendern soll
       this.schild.body.rotation += 0.05;
       this.laserSprites.forEachAlive(this.moveLaser, this);
    }
    private moveLaser(laser: Laser): void {
        this.accelerateToObject(laser, this.kernSpritesheet, laser.gewicht);
    }
    private accelerateToObject(obj1, obj2, speed) {
        if (typeof speed === 'undefined') { speed = 60; }
        let angle = Math.atan2(obj2.y - obj1.y, obj2.x - obj1.x); // richtung zum Kern
        obj1.body.rotation = angle + (90 * Math.PI / 180);  // correct angle of angry bullets (depends on the sprite used)
        obj1.body.force.x = Math.cos(angle) * speed;    // accelerateToObject
        obj1.body.force.y = Math.sin(angle) * speed;
    }
}
