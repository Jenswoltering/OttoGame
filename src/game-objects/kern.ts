export class Kern extends Phaser.Sprite {
    game: Phaser.Game;

    constructor(game: Phaser.Game, x: number, y: number) {
        super(game, x, y);
        this.game = game;
        this.texture = this.zeichneKern();
        this.anchor.set(0.5);
        this.game.add.existing(this);
    }

    private zeichneKern(): Phaser.RenderTexture {
        let texture: Phaser.RenderTexture;
        let kernGraphic = this.game.add.graphics(0, 0);
        kernGraphic.lineStyle(2, 0xFFFFFF, 1);
        kernGraphic.beginFill(0xFFFFFF);
        kernGraphic.drawCircle(this.game.world.centerX, this.game.world.centerY, 16);
        texture = kernGraphic.generateTexture();
        kernGraphic.destroy();
        return texture;
    }
}