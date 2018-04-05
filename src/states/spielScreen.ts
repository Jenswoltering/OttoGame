import * as Assets from '../assets';
import { Kern } from '../game-objects/kern';

export default class SpielScreen extends Phaser.State {
    // Hier Variablen fuer Sprites einfuegen
    private kernSpritesheet: Phaser.Sprite = null;

    public create(): void {
        // Hier das Spielsetup initialisieren
        this.game.stage.backgroundColor = '#736357';
        this.kernSpritesheet = new Kern(this.game, this.game.world.centerX, this.game.world.centerY);
    }
    public update(): void {
       // hier spaeter ueberpruefung ob tasten gedrueckt werden
       // oder alles was sich bewegen/veraendern soll
      }
}
