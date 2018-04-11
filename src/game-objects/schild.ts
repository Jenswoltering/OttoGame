export class Schild extends Phaser.Sprite {
    game: Phaser.Game;
    private treffer: number = 0;
    private breite: number = 60;
    private farbe: number;

    constructor(game: Phaser.Game, x: number, y: number, farbe: number) {
        super(game, x, y);
        this.game = game;
        this.farbe = farbe;
        this.texture = this.zeichneSchild(this.breite);
        this.game.physics.p2.enableBody(this, true);
        this.pivot.y = 20;
        this.body.clearShapes();
        this.body.addRectangle(60, 5, 0, -20);
        // this.body.addPolygon ( {}, 9, 108, 32, 107, 21, 164, 0, 164, 44, 51, 89, 17, 76, 50, 32, 107, 9, 108, 89, 17, 147, 0, 111, 30, 76, 50, 147, 0, 181, 0, 248, 22, 219, 31, 160, 20, 248, 22, 290, 58, 255, 53, 219, 31, 290, 58, 316, 101, 295, 106, 255, 53, 316, 101, 327, 164, 307, 164, 295, 106);
        // let arcShape = [[-20, -20], [-0, -30], [20, -20]];
        // this.body.addShape (arcShape, 0, -20);
        // this.body.addPolygon ({}, [[-20, -20], [-0, -30], [20, -20]]);
        this.body.updateCollisionMask(0, 0, 0, 0);
        this.body.kinematic = true;
        // this.anchor.setTo (0, 0);
        // this.game.physics.p2.enable(this, true);
        // this.addChild(this.zeichneSchild2());
        // this.anchor.set(0, 0);
        this.game.add.existing(this);
    }

    private zeichneSchild(breite: number): Phaser.RenderTexture {
        let texture: Phaser.RenderTexture;
        let schildGraphic = this.game.add.graphics(0, 0);
        schildGraphic.lineStyle(4, this.farbe, 1);
        // schildGraphic.arc(0, 0, 20, 0, 1, false);
        // schildGraphic.arc(0, 0, 20, 4, 5.5, false); // radianwert: "4,8" als mittelpunkt. der vierte und fünte wert brauchen den gleichen abstand von 4,8
        schildGraphic.arc(0, 0, 22, Phaser.Math.PI2 / 2 + 0.5, Phaser.Math.PI2 - 0.5, false); // radianwert: "4,8" als mittelpunkt. der vierte und fünte wert brauchen den gleichen abstand von 4,8
        schildGraphic.beginFill(this.farbe, 1);
        // schildGraphic.drawCircle(0, 0, 44);
        // kernGraphic.arc(this.game.world.centerX, this.game.world.centerY, 20, 0, Math.PI * 1.6, false);
        // schildGraphic.drawRect(this.game.world.centerX, this.game.world.centerY, breite, 5);
       // schildGraphic.drawRoundedRect(this.game.world.centerX, this.game.world.centerY, breite, 4, 9); // abgerundete Schilde
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