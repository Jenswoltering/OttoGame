export class Laser extends Phaser.Sprite {
    game: Phaser.Game;
    public gewicht: number = null;
    private spawnPoints: number[] = null;

    constructor(game: Phaser.Game, gewicht: number) {
        // initialisiere Sprite an Position (0,0)
        super(game, 0, 0);
        // Berechne random Spawnpoint und setzte anschliessend Sprite an diese Position
        this.spawnPoints = this.berechnetEinstiegspunkt();
        super.x = this.spawnPoints[0];
        super.y = this.spawnPoints[1];
        this.game = game;
        this.gewicht = gewicht;
        this.texture = this.zeichneLaser();
        this.anchor.set(0.5);
        this.game.add.existing(this);
    }

    private berechnetEinstiegspunkt(): number[] {
        // Array fuer den random Einstiegspunkt (x,y)
        let coords: number[] = new Array(0, 0);
        let rndX: number = this.game.rnd.integerInRange(1, this.game.width - 1);
        let rndY: number = this.game.rnd.integerInRange(1, this.game.height - 1);
        let seite: number = 0;
        // berechne random Seite
        // 0 = oben, 1 = links, 2 unten, 3 = rechts
        seite = Math.floor(Math.random() * 4);
        switch (seite) {
            case 0: {
                coords[0] = rndX;
                coords[1] = 0;
                break;
            }
            case 1: {
                coords[0] = 0;
                coords[1] = rndY;
                break;
             }
            case 2: {
                coords[0] = rndX;
                coords[1] = this.game.height + 10;
                break;
             }
            case 3: {
                coords[0] = this.game.width + 10;
                coords[1] = rndY;
                break;
             }
            default: {
               console.log('Invalid choice');
               break;
            }
         }
        return coords;
    }

    private zeichneLaser(): Phaser.RenderTexture {
        let texture: Phaser.RenderTexture;
        let laserGraphic = this.game.add.graphics(0, 0);
        laserGraphic.lineStyle(0, 0xFFFFFF, 1);
        laserGraphic.beginFill(Phaser.Color.getRandomColor());
        laserGraphic.drawCircle(this.game.world.centerX, this.game.world.centerY, 5);
        texture = laserGraphic.generateTexture();
        laserGraphic.destroy();
        return texture;
    }
}