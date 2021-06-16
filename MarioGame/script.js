kaboom({
    global: true,
    fullscreen: true,
    scale: 2,
    debug: true,
    clearColor: [0, 0, 1, 1]
});

const MOVE_SPEED = 120;
const JUMP_FORCE = 360;
const BIG_JUMP_FORCE = 450;
let CURRENT_JUMP_FORCE = JUMP_FORCE;
let isJumping = true;
const ENEMY_SPEED = -20;
const FALL_DEATH = 400;

loadRoot('./images/');
loadSprite('coin', 'coin.png');
loadSprite('evil-shroom', 'shroom.png');
loadSprite('brick', 'brick.png');
loadSprite('block', 'block.png');
loadSprite('mario', 'mario.png');
loadSprite('mushroom', 'mushroom.png');
loadSprite('surprise', 'surprise.png');
loadSprite('unboxed', 'unboxed.png');
loadSprite('pipeTL', 'pipeTL.png');
loadSprite('pipeTR', 'pipeTR.png');
loadSprite('pipeBL', 'pipeBL.png');
loadSprite('pipeBR', 'pipeBR.png');

loadSprite('blue-block', 'blue-block.png');
loadSprite('blue-brick', 'blue-brick.png');
loadSprite('blue-steel', 'blue-steel.png');
loadSprite('blue-evil-shroom', 'blue-mushroom.png');
loadSprite('blue-surprise', 'blue-surprise.png');

scene("game", ({ level, score }) => {
    layers(['bg', 'obj', 'ui'], 'obj');


    const maps = [

        [
            '                                 ',
            '                                 ',
            '                                 ',
            '                                 ',
            '     % *=   %                    ',
            '                                 ',
            '                         -+      ',
            '                     ^ ^ ()      ',
            '===========================  ===='
        ],
        [
            '&                                 &',
            '&                                 &',
            '&                                 &',
            '&               @@@@@             &',
            '&                                 &',
            '&           &&                    &',
            '&     &      -+                   &',
            '&       <<   ()                   &',
            '!!!!!!!!!!   !!!!!!  !!!!!!!!!!!!!!'
        ]
    ]

    const levelCfg = {
        width: 20,
        height: 20,
        '=': [sprite('block'), solid()],
        '$': [sprite('coin'), 'coin'],
        '%': [sprite('surprise'), solid(), 'coin-surprise'],
        '*': [sprite('surprise'), solid(), 'mushroom-surprise'],
        '}': [sprite('unboxed'), solid()],
        '(': [sprite('pipeBL'), solid(), scale(0.5)],
        ')': [sprite('pipeBR'), solid(), scale(0.5)],
        '-': [sprite('pipeTL'), solid(), scale(0.5), 'pipe'],
        '+': [sprite('pipeTR'), solid(), scale(0.5), 'pipe'],
        '^': [sprite('evil-shroom'), solid(), 'dangerous'],
        '#': [sprite('mushroom'), solid(), 'mushroom', body()],
        '!': [sprite('blue-block'), scale(0.5), solid()],
        '&': [sprite('blue-brick'), scale(0.5), solid()],
        '<': [sprite('blue-evil-shroom'), scale(0.5), solid(), 'dangerous'],
        '@': [sprite('blue-surprise'), scale(0.5), solid(), 'coin-surprise'],
        '|': [sprite('blue-steel'), scale(0.5), solid(), 'coin-surprise'],
    }


    const gameLevel = addLevel(maps[level], levelCfg);


    const scoreLabel = add([
        text(score),
        pos(30, 6),
        layer('ui'),
        {
            value: score,
        }
    ]);

    add([text('level ' + +(level + 1)), pos(40, 6)])

    function big() {
        let timer = 0;
        let isBig = false;
        return {
            update() {
                if (isBig) {
                    CURRENT_JUMP_FORCE = BIG_JUMP_FORCE;
                    timer -= dt()
                    if (timer <= 0) {
                        this.smallify()
                    }
                }
            },
            isBig() {
                return isBig
            },
            smallify() {
                CURRENT_JUMP_FORCE = JUMP_FORCE;
                this.scale = vec2(1);
                timer = 0;
                isBig = false;
            },
            biggify(time) {
                this.scale = vec2(2);
                timer = time;
                isBig = true;
            }
        }
    };


    const player = add([
        sprite('mario'), solid(), big(), pos(30, 0), body(), origin('bot')
    ]);

    action('mushroom', (m) => {
        m.move(30, 0);
    });

    player.on("headbump", (obj) => {
        if (obj.is('coin-surprise')) {
            gameLevel.spawn('$', obj.gridPos.sub(0, 1));
            destroy(obj);
            gameLevel.spawn('}', obj.gridPos.sub(0, 0));
        }
        if (obj.is('mushroom-surprise')) {
            gameLevel.spawn('#', obj.gridPos.sub(0, 1));
            destroy(obj);
            gameLevel.spawn('}', obj.gridPos.sub(0, 0));
        }
    });


    player.collides('mushroom', (m) => {
        destroy(m);
        player.biggify(10);
    });


    player.collides('dangerous', (d) => {
        // console.log(player.pos.y, d.pos.y)
        if (player.pos.y === d.pos.y) {
            destroy(d);
        } else {
            go('lose', { score: scoreLabel.value });
        }
    });

    player.collides('coin', (c) => {
        destroy(c);
        scoreLabel.value++;
        scoreLabel.text = scoreLabel.value;
    });


    player.collides('pipe', () => {
        keyPress('down', () => {
            go('game', {
                level: (level + 1) % maps.length,
                score: scoreLabel.value
            })
        })
    })


    player.action(() => {
        // camPos(player.pos);  
        if (player.pos.y >= FALL_DEATH) {
            go('lose', { score: scoreLabel.value });
        }
    })

    action('dangerous', (d) => {
        d.move(ENEMY_SPEED, 0);
    });


    keyDown('left', () => {
        player.move(-MOVE_SPEED, 0);
    });
    keyDown('right', () => {
        player.move(MOVE_SPEED, 0);
    });
    player.action(() => {
        if (player.grounded()) {
            isJumping = false;
        }
    });
    keyPress('space', () => {
        if (player.grounded()) {
            isJumping = true;
            player.jump(CURRENT_JUMP_FORCE);
        }
    });



});

scene('lose', ({ score }) => {
    add([text(score, 32), origin('center'), pos(width() / 2, height() / 2)]);
});

start("game", { level: 0, score: 0 });