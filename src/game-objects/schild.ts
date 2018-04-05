export class Schild extends Phaser.Sprite {
    game: Phaser.Game;
    private treffer: number = 0;

    constructor(game: Phaser.Game, x: number, y: number) {
        super(game, x, y);
        this.game = game;
        this.texture = this.zeichneSchild();
        this.anchor.set(0.5, 0.5);
        this.game.add.existing(this);
    }

    private zeichneSchild(): Phaser.RenderTexture {
        let texture: Phaser.RenderTexture;
        let kernGraphic = this.game.add.graphics(0, 0);
        kernGraphic.lineStyle(5, 0xFFFFFF, 1);
        kernGraphic.arc(this.game.world.centerX, this.game.world.centerY, 20, 0, Math.PI * 1.6, false);
        kernGraphic.lineStyle(0);
        kernGraphic.beginFill(0xFFFFFF, 0);
        kernGraphic.drawCircle(this.game.world.centerX, this.game.world.centerY, 40);
        texture = kernGraphic.generateTexture();
        kernGraphic.destroy();
        return texture;
    }
}