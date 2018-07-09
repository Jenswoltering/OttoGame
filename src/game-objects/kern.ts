import * as Assets from '../assets';

export class Kern extends Phaser.Sprite {
    game: Phaser.Game;
    private leben: number = 10;

    constructor(game: Phaser.Game, x: number, y: number) {
        super(game, x, y);
        this.game = game;
        this.texture = this.zeichneKern();
        this.anchor.set(0.5, 0.5);
        this.game.add.existing(this);
    }

    private zeichneKern(): Phaser.RenderTexture {
        // this.game.add.tileSprite(this.game.world.centerX + 22, this.game.world.centerY, 432, 199, Assets.Images.ImagesKern.getName());
        let texture: Phaser.RenderTexture;
        let kernGraphic = this.game.add.tileSprite(this.game.world.centerX, this.game.world.centerY, 30, 30, Assets.Images.ImagesKern.getName());
        kernGraphic.scale.y = 0.5;
        texture = kernGraphic.generateTexture();
        kernGraphic.destroy();
        return texture;
    }
    public getLeben(): number {
        return this.leben;
    }
    public reduzierteLeben(): void {
        this.leben -= 1;
    }
}