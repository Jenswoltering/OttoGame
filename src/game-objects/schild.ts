export class Schild extends Phaser.Sprite {
    game: Phaser.Game;
    private treffer: number = 0;
    private breite: number = 60;

    constructor(game: Phaser.Game, x: number, y: number) {
        super(game, x, y);
        this.game = game;
        this.texture = this.zeichneSchild(this.breite);
        this.pivot.y = 20;
        this.game.physics.p2.enableBody(this, false);
        this.body.clearShapes();
        this.body.addRectangle(60, 5, 0, -20);
        this.body.updateCollisionMask(0, 0, 0, 0);
        this.body.kinematic = true;
        // this.game.physics.p2.enable(this, true);
        // this.addChild(this.zeichneSchild2());
        // this.anchor.set(0.5, 0.5);
        this.game.add.existing(this);
    }

    private zeichneSchild(breite: number): Phaser.RenderTexture {
        let texture: Phaser.RenderTexture;
        let schildGraphic = this.game.add.graphics(0, 0);
        schildGraphic.lineStyle(0, 0xFFFFFF, 1);
        schildGraphic.beginFill(0xFFFFFF, 1);
        // kernGraphic.arc(this.game.world.centerX, this.game.world.centerY, 20, 0, Math.PI * 1.6, false);
        schildGraphic.drawRect(this.game.world.centerX, this.game.world.centerY, breite, 5);
        // schildGraphic.lineStyle(0);
        // schildGraphic.drawCircle(this.game.world.centerX, this.game.world.centerY, 40);
        texture = schildGraphic.generateTexture();
        schildGraphic.destroy();
        return texture;
    }

    public reduziereGroesse(): void {
      if (this.breite > 20) {
        this.breite -= 5;
        this.texture = this.zeichneSchild(this.breite);
        this.body.clearShapes();
        this.body.addRectangle(this.breite, 5, 0, -20);
        this.body.updateCollisionMask(0, 0, 0, 0);
      }
    }
}