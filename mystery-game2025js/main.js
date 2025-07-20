// ========== MAIN ROOM ==========
class MainRoom extends Phaser.Scene {
    constructor() {
        super('MainRoom');
    }

    create() {
        this.cameras.main.setBackgroundColor("#1a1a2e");

        this.player = this.add.rectangle(100, 300, 40, 40, 0x00ffcc);
        this.physics.add.existing(this.player);

        this.cursors = this.input.keyboard.createCursorKeys();

        this.door = this.add.rectangle(750, 300, 40, 80, 0xaaaaaa);
        this.physics.add.existing(this.door, true);

        this.add.text(600, 280, 'To Crime Scene', {
            font: '16px Arial',
            fill: '#ffffff'
        });

        this.physics.add.overlap(this.player, this.door, () => {
            this.scene.start('CrimeScene');
        });
    }

    update() {
        const speed = 4;
        if (this.cursors.left.isDown) this.player.x -= speed;
        if (this.cursors.right.isDown) this.player.x += speed;
        if (this.cursors.up.isDown) this.player.y -= speed;
        if (this.cursors.down.isDown) this.player.y += speed;
    }
}

// ========== CRIME SCENE ==========
class CrimeScene extends Phaser.Scene {
    constructor() {
        super('CrimeScene');
    }

    create() {
        this.cameras.main.setBackgroundColor("#2e1a1a");

        this.player = this.add.rectangle(100, 100, 40, 40, 0xff9999);
        this.cursors = this.input.keyboard.createCursorKeys();

        this.add.text(20, 20, '🧪 Crime Scene - Press [←] to go back', {
            font: '16px Arial',
            fill: '#ffffff'
        });
    }

    update() {
        const speed = 4;
        if (this.cursors.left.isDown) this.player.x -= speed;
        if (this.cursors.right.isDown) this.player.x += speed;
        if (this.cursors.up.isDown) this.player.y -= speed;
        if (this.cursors.down.isDown) this.player.y += speed;

        // Go back to MainRoom if player touches left side
        if (this.player.x < 10) {
            this.scene.start('MainRoom');
        }
    }
}

// ✅ CONFIG AFTER SCENES ARE DEFINED
const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: "#1a1a2e",
    physics: {
        default: 'arcade',
        arcade: {
            debug: false
        }
    },
    scene: [MainRoom, CrimeScene]
};

const game = new Phaser.Game(config);
