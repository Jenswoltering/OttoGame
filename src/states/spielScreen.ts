import * as Assets from '../assets';
import { Kern } from '../game-objects/kern';
import { Laser } from '../game-objects';
import { Schild } from '../game-objects';

export default class SpielScreen extends Phaser.State {
    // Hier Variablen fuer Sprites einfuegen
    private kernSpritesheet: Phaser.Sprite = null;
    private laserSprites: Phaser.Sprite[] = new Array();
    private schilde: Phaser.Sprite[] = new Array();

    public create(): void {
        // Hier das Spielsetup initialisieren
        this.game.stage.backgroundColor = '#736357';
        this.kernSpritesheet = new Kern(this.game, this.game.world.centerX, this.game.world.centerY);
        this.schilde.push(new Schild(this.game, this.game.world.centerX, this.game.world.centerY));
        for (let index = 0; index < 100; index++) {
            let neuerLaser = new Laser(this.game, 50);
            this.laserSprites.push(neuerLaser);
        }
    }
    public update(): void {
       // hier spaeter ueberpruefung ob tasten gedrueckt werden
       // oder alles was sich bewegen/veraendern soll
      }
}
