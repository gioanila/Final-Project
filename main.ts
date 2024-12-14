namespace ConnectionKind {
    export const Door3 = ConnectionKind.create()
    export const Door4 = ConnectionKind.create()
    export const Door5 = ConnectionKind.create()
}
function R6 () {
    tiles.loadMap(tiles.createMap(tilemap`level17`))
    tiles.placeOnTile(mySprite, tiles.getTileLocation(1, 1))
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite, randint(-100, 100), randint(-100, 100))
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Projectile, function (sprite, otherSprite) {
    sprites.destroy(sprite)
    game.splash("You passed this level!!")
    mySprite.sayText("YAY", 500, false)
    pause(1000)
    game.splash("Your second number is", _2)
    RoomNumber2done = true
    R3()
})
info.onCountdownEnd(function () {
    scene.cameraShake(10, 5000)
    mySprite.sayText("YOU DIED")
    game.gameOver(false)
})
function R1 () {
    info.setScore(0)
    mySprite.sayText("Room 1... looks like I just need to collect 10 fruits.", 5000, false)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(8, 8))
    for (let index = 0; index < 10; index++) {
        mySprite2 = sprites.create(img`
            . . . . . . . 6 . . . . . . . . 
            . . . . . . 8 6 6 . . . 6 8 . . 
            . . . e e e 8 8 6 6 . 6 7 8 . . 
            . . e 2 2 2 2 e 8 6 6 7 6 . . . 
            . e 2 2 4 4 2 7 7 7 7 7 8 6 . . 
            . e 2 4 4 2 6 7 7 7 6 7 6 8 8 . 
            e 2 4 5 2 2 6 7 7 6 2 7 7 6 . . 
            e 2 4 4 2 2 6 7 6 2 2 6 7 7 6 . 
            e 2 4 2 2 2 6 6 2 2 2 e 7 7 6 . 
            e 2 4 2 2 4 2 2 2 4 2 2 e 7 6 . 
            e 2 4 2 2 2 2 2 2 2 2 2 e c 6 . 
            e 2 2 2 2 2 2 2 4 e 2 e e c . . 
            e e 2 e 2 2 4 2 2 e e e c . . . 
            e e e e 2 e 2 2 e e e c . . . . 
            e e e 2 e e c e c c c . . . . . 
            . c c c c c c c . . . . . . . . 
            `, SpriteKind.Food)
        mySprite2.setPosition(randint(20, 200), randint(20, 200))
    }
}
info.onScore(10, function () {
    game.splash("You passed this level!!")
    mySprite.sayText("YAY", 500, false)
    game.splash("Your first number is ", _1)
    RoomNumber1done = true
    R2()
})
function R2 () {
    tiles.placeOnTile(mySprite, tiles.getTileLocation(8, 8))
    tiles.loadMap(tiles.createMap(tilemap`level2`))
    mySprite.sayText("Room 2... I need to find the enemy and beat them with the A button.")
    villain = sprites.create(img`
        ........................
        ........................
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff1111ff........
        .......fb111111bf.......
        .......f11111111f.......
        ......fd11111111df......
        ....7.fd11111111df......
        ...7..fd11111111df......
        ...7..fd11111111df......
        ...7..fddd1111dddff.....
        ...77.fbdbfddfbdbfcf....
        ...777fcdcf11fcdcfbf....
        ....77fffbdb1bdffcf.....
        ....fcb1bcffffff........
        ....f1c1c1ffffff........
        ....fdfdfdfffff.........
        .....f.f.f..............
        ........................
        ........................
        ........................
        `, SpriteKind.Enemy)
    villain.follow(mySprite, 30)
    tiles.placeOnTile(villain, tiles.getTileLocation(randint(0, tiles.tileWidth()), 0))
}
function R3 () {
    tiles.loadMap(tiles.createMap(tilemap`level8`))
    Math1 = game.askForNumber("What is 52+15+19", 2)
    if (Math1 == 86) {
        Math2 = game.askForNumber("What is " + "89-7+7", 2)
        if (Math2 == 89) {
            Math3 = game.askForNumber("What is " + "57+5-6", 2)
            if (Math3 == 56) {
                game.splash("You passed this level!!")
                mySprite.sayText("YAY", 500, false)
                game.splash("Your third number is ", _3)
                RoomNumber3done = true
                R4()
            } else {
                mySprite.sayText("WRONG! YOU DIED IN THE DUNGEONS")
                music.play(music.melodyPlayable(music.wawawawaa), music.PlaybackMode.UntilDone)
                R1()
            }
        } else {
            mySprite.sayText("WRONG! YOU DIED IN THE DUNGEONS")
            music.play(music.melodyPlayable(music.wawawawaa), music.PlaybackMode.UntilDone)
        }
        R1()
    } else {
        mySprite.sayText("WRONG! YOU DIED IN THE DUNGEONS")
        music.play(music.melodyPlayable(music.wawawawaa), music.PlaybackMode.UntilDone)
        R1()
    }
}
function R4 () {
    tiles.loadMap(tiles.createMap(tilemap`level13`))
    game.splash("You passed this level!!")
    mySprite.sayText("YAY", 500, false)
    game.splash("Your fourth number is", _4)
    RoomNumber4done = true
    R5()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    sprites.destroy(otherSprite)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleRedCrystal, function (sprite, location) {
    game.splash("You passed this level!!")
    mySprite.sayText("YAY", 500, false)
    game.splash("Your sixth number is", _6)
    RoomNumber6done = true
    pause(100)
    answer = game.askForNumber("What is the code?", 6)
    if (answer == _1 * 100000 + (_2 * 10000 + (_3 * 1000 + (_4 * 100 + (_5 * 10 + _6 * 1))))) {
        game.splash("You escaped!")
        game.gameOver(true)
    } else {
        game.splash("Start over :(")
        game.gameOver(false)
        R1()
    }
})
function R5 () {
    tiles.loadMap(tiles.createMap(tilemap`level15`))
    game.splash("You passed this level!!")
    mySprite.sayText("YAY", 500, false)
    game.splash("Your fifth number is", _5)
    RoomNumber5done = true
    R6()
}
let answer = 0
let Math3 = 0
let Math2 = 0
let Math1 = 0
let villain: Sprite = null
let mySprite2: Sprite = null
let projectile: Sprite = null
let RoomNumber6done = false
let RoomNumber5done = false
let RoomNumber4done = false
let RoomNumber3done = false
let RoomNumber2done = false
let RoomNumber1done = false
let mySprite: Sprite = null
let _6 = 0
let _5 = 0
let _4 = 0
let _3 = 0
let _2 = 0
let _1 = 0
mySprite = sprites.create(img`
    . . . . . . 5 . 5 . . . . . . . 
    . . . . . f 5 5 5 f f . . . . . 
    . . . . f 1 5 2 5 1 6 f . . . . 
    . . . f 1 6 6 6 6 6 1 6 f . . . 
    . . . f 6 6 f f f f 6 1 f . . . 
    . . . f 6 f f d d f f 6 f . . . 
    . . f 6 f d f d d f d f 6 f . . 
    . . f 6 f d 3 d d 3 d f 6 f . . 
    . . f 6 6 f d d d d f 6 6 f . . 
    . f 6 6 f 3 f f f f 3 f 6 6 f . 
    . . f f d 3 5 3 3 5 3 d f f . . 
    . . f d d f 3 5 5 3 f d d f . . 
    . . . f f 3 3 3 3 3 3 f f . . . 
    . . . f 3 3 5 3 3 5 3 3 f . . . 
    . . . f f f f f f f f f f . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
tiles.loadMap(tiles.createMap(tilemap`level6`))
controller.moveSprite(mySprite)
scene.cameraFollowSprite(mySprite)
characterAnimations.loopFrames(
mySprite,
[img`
    . . . . . . 5 . 5 . . . . . . . 
    . . . . . f 5 5 5 f . . . . . . 
    . . . . f 6 2 5 5 6 f . . . . . 
    . . . f 6 6 6 6 1 6 6 f . . . . 
    . . . f 6 6 6 6 6 1 6 f . . . . 
    . . . f d f d 6 6 6 1 f . . . . 
    . . . f d f d 6 6 6 6 f f . . . 
    . . . f d 3 d d 6 6 6 f 6 f . . 
    . . . . f d d d f f 6 f f . . . 
    . . . . . f f 5 3 f 6 6 6 f . . 
    . . . . f 5 3 3 f f f f f . . . 
    . . . . f 3 3 f d f . . . . . . 
    . . . . . f 3 f d f . . . . . . 
    . . . . f 3 5 3 f d f . . . . . 
    . . . . f f 3 3 f f . . . . . . 
    . . . . . . f f f . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . 5 . 5 . . . . . . 
    . . . . . . f 5 5 5 f . . . . . 
    . . . . . f 6 2 5 5 6 f . . . . 
    . . . . f 6 6 6 6 1 6 6 f . . . 
    . . . . f 6 6 6 6 6 1 6 f . . . 
    . . . . f d f d 6 6 6 1 f . . . 
    . . . . f d f d 6 6 6 6 f f . . 
    . . . . f d 3 d d 6 6 6 f 6 f . 
    . . . . . f d d d f f 6 f f . . 
    . . . . . . f f 3 3 f f 6 6 f . 
    . . . . . f d d d d f f f f . . 
    . . . . . f d d d f 3 f . . . . 
    . . . . . . f f f d 5 3 f . . . 
    . . . . . f f f 3 3 f f . . . . 
    . . . . . f f f f f f f . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . 5 . 5 . . . . . . 
    . . . . . . f 5 5 5 f . . . . . 
    . . . . . f 6 2 5 5 6 f . . . . 
    . . . . f 6 6 6 6 1 6 6 f . . . 
    . . . . f 6 6 6 6 6 1 6 f . . . 
    . . . . f d f d 6 6 6 1 f . . . 
    . . . . f d f d 6 6 6 6 f f . . 
    . . . . f d 3 d d 6 6 6 f 6 f . 
    . . . . . f d d d f f 6 f f . . 
    . . . . . . f f 3 3 f f 6 6 f . 
    . . . . . f 5 3 3 d d f f f . . 
    . . . . . f 3 3 3 f d d f . . . 
    . . . . . . f 3 5 f f f . . . . 
    . . . . . f 3 3 3 3 f . . . . . 
    . . . . . . f f f f f . . . . . 
    `],
200,
characterAnimations.rule(Predicate.MovingLeft)
)
characterAnimations.loopFrames(
mySprite,
[img`
    . . . . . . . 5 . 5 . . . . . . 
    . . . . . . f 5 5 5 f . . . . . 
    . . . . . f 6 5 5 2 6 f . . . . 
    . . . . f 6 6 1 6 6 6 6 f . . . 
    . . . . f 6 1 6 6 6 6 6 f . . . 
    . . . . f 1 6 6 6 d f d f . . . 
    . . . f f 6 6 6 6 d f d f . . . 
    . . f 6 f 6 6 6 d d 3 d f . . . 
    . . . f f 6 f f d d d f . . . . 
    . . f 6 6 6 f 3 5 f f . . . . . 
    . . . f f f f f 3 3 5 f . . . . 
    . . . . . . f d f 3 3 f . . . . 
    . . . . . . f d f 3 f . . . . . 
    . . . . . f d f 3 5 3 f . . . . 
    . . . . . . f f 3 3 f f . . . . 
    . . . . . . . f f f . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . 5 . 5 . . . . . . . 
    . . . . . f 5 5 5 f . . . . . . 
    . . . . f 6 5 5 2 6 f . . . . . 
    . . . f 6 6 1 6 6 6 6 f . . . . 
    . . . f 6 1 6 6 6 6 6 f . . . . 
    . . . f 1 6 6 6 d f d f . . . . 
    . . f f 6 6 6 6 d f d f . . . . 
    . f 6 f 6 6 6 d d 3 d f . . . . 
    . . f f 6 f f d d d f . . . . . 
    . f 6 6 f f 3 3 f f . . . . . . 
    . . f f f f d d d d f . . . . . 
    . . . . f 3 f d d d f . . . . . 
    . . . f 3 5 d f f f . . . . . . 
    . . . . f f 3 3 f f f . . . . . 
    . . . . f f f f f f f . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . 5 . 5 . . . . . . . 
    . . . . . f 5 5 5 f . . . . . . 
    . . . . f 6 5 5 2 6 f . . . . . 
    . . . f 6 6 1 6 6 6 6 f . . . . 
    . . . f 6 1 6 6 6 6 6 f . . . . 
    . . . f 1 6 6 6 d f d f . . . . 
    . . f f 6 6 6 6 d f d f . . . . 
    . f 6 f 6 6 6 d d 3 d f . . . . 
    . . f f 6 f f d d d f . . . . . 
    . f 6 6 f f 3 3 f f . . . . . . 
    . . f f f d d 3 3 5 f . . . . . 
    . . . f d d f 3 3 3 f . . . . . 
    . . . . f f f 5 3 f . . . . . . 
    . . . . . f 3 3 3 3 f . . . . . 
    . . . . . f f f f f . . . . . . 
    `],
200,
characterAnimations.rule(Predicate.MovingRight)
)
characterAnimations.loopFrames(
mySprite,
[img`
    . . . . . . . 5 5 . . . . . . . 
    . . . . . f 5 5 5 5 f . . . . . 
    . . . . f 6 6 6 6 6 6 f . . . . 
    . . . f 6 1 1 1 6 1 6 6 f . . . 
    . . . f 6 6 6 6 6 6 6 6 f . . . 
    . . . f 6 6 6 6 6 6 6 6 f . . . 
    . . . f 6 6 6 6 6 6 6 6 f . . . 
    . . f f 6 6 6 6 6 6 6 6 f f . . 
    . f 6 6 6 f 6 6 6 6 f 6 6 6 f . 
    . . f f f 3 f f f f 3 f f f . . 
    . . . f d 5 3 3 3 3 5 d f . . . 
    . . f d d f 3 3 3 3 f d d f . . 
    . . . f f f 5 3 3 5 f f f . . . 
    . . . . f 3 3 5 5 3 3 f . . . . 
    . . . . f 3 3 3 3 3 3 f . . . . 
    . . . . . f f f f f f . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . 5 5 . . . . . . . 
    . . . . . f 5 5 5 5 f . . . . . 
    . . . . f 6 6 6 6 6 6 f . . . . 
    . . . f 6 1 1 1 6 1 6 6 f . . . 
    . . . f 6 6 6 6 6 6 6 6 f . . . 
    . . . f 6 6 6 6 6 6 6 6 f . . . 
    . . . f 6 6 6 6 6 6 6 6 f . . . 
    . . f f 6 6 6 6 6 6 6 6 f f . . 
    . f 6 6 6 f 6 6 6 6 f 6 6 6 f . 
    . . f f f 3 f f f f 5 f f f . . 
    . . . f d f 3 3 3 3 d d f . . . 
    . . . . f 3 5 3 3 f d d f . . . 
    . . . . f 3 3 5 5 3 f f . . . . 
    . . . . f f 3 3 f f . . . . . . 
    . . . . . . f f . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . 5 5 . . . . . . . 
    . . . . . f 5 5 5 5 f . . . . . 
    . . . . f 6 6 6 6 6 6 f . . . . 
    . . . f 6 1 1 1 6 1 6 6 f . . . 
    . . . f 6 6 6 6 6 6 6 6 f . . . 
    . . . f 6 6 6 6 6 6 6 6 f . . . 
    . . . f 6 6 6 6 6 6 6 6 f . . . 
    . . f f 6 6 6 6 6 6 6 6 f f . . 
    . f 6 6 6 f 6 6 6 6 f 6 6 6 f . 
    . . f f f 5 f f f f 3 f f f . . 
    . . . f d d 3 3 3 3 f d f . . . 
    . . . f d d f 3 3 5 3 f . . . . 
    . . . . f f 3 5 5 3 3 f . . . . 
    . . . . . . f f 3 3 f f . . . . 
    . . . . . . . . f f . . . . . . 
    `],
200,
characterAnimations.rule(Predicate.MovingUp)
)
characterAnimations.loopFrames(
mySprite,
[img`
    . . . . . . 5 . 5 . . . . . . . 
    . . . . . f 5 5 5 f f . . . . . 
    . . . . f 1 5 2 5 1 6 f . . . . 
    . . . f 1 6 6 6 6 6 1 6 f . . . 
    . . . f 6 6 f f f f 6 1 f . . . 
    . . . f 6 f f d d f f 6 f . . . 
    . . f 6 f d f d d f d f 6 f . . 
    . . f 6 f d 3 d d 3 d f 6 f . . 
    . . f 6 6 f d d d d f 6 6 f . . 
    . f 6 6 f 3 f f f f 3 f 6 6 f . 
    . . f f d 3 5 3 3 5 3 d f f . . 
    . . f d d f 3 5 5 3 f d d f . . 
    . . . f f 3 3 3 3 3 3 f f . . . 
    . . . f 3 3 5 3 3 5 3 3 f . . . 
    . . . f f f f f f f f f f . . . 
    . . . . . f f . . f f . . . . . 
    `,img`
    . . . . . . 5 . 5 . . . . . . . 
    . . . . . f 5 5 5 f f . . . . . 
    . . . . f 1 5 2 5 1 6 f . . . . 
    . . . f 1 6 6 6 6 6 1 6 f . . . 
    . . . f 6 6 f f f f 6 1 f . . . 
    . . . f 6 f f d d f f 6 f . . . 
    . . f 6 f d f d d f d f 6 f . . 
    . . f 6 f d 3 d d 3 d f 6 f . . 
    . . f 6 6 f d d d d f 6 6 f . . 
    . f 6 6 f 3 f f f f 3 f 6 6 f . 
    . . f f 3 3 5 3 3 5 3 d f f . . 
    . . . f d f 3 5 5 3 f f d f . . 
    . . . f d f 3 3 3 3 3 f f . . . 
    . . . f f 3 5 3 3 5 3 3 f . . . 
    . . . . f f f f f f f f f . . . 
    . . . . . . . . . f f . . . . . 
    `,img`
    . . . . . . 5 . 5 . . . . . . . 
    . . . . . f 5 5 5 f f . . . . . 
    . . . . f 1 5 2 5 1 6 f . . . . 
    . . . f 1 6 6 6 6 6 1 6 f . . . 
    . . . f 6 6 f f f f 6 1 f . . . 
    . . . f 6 f f d d f f 6 f . . . 
    . . f 6 f d f d d f d f 6 f . . 
    . . f 6 f d 3 d d 3 d f 6 f . . 
    . . f 6 6 f d d d d f 6 6 f . . 
    . f 6 6 f 3 f f f f 3 f 6 6 f . 
    . . f f d 3 5 3 3 5 3 3 f f . . 
    . . f d f f 3 5 5 3 f d f . . . 
    . . . f f 3 3 3 3 3 f d f . . . 
    . . . f 3 3 5 3 3 5 3 f f . . . 
    . . . f f f f f f f f f . . . . 
    . . . . . f f . . . . . . . . . 
    `],
200,
characterAnimations.rule(Predicate.MovingDown)
)
game.showLongText("Welcome to the dungeons... you have 15 minutes to leave before they implode on top of you. Find numbers by going through 6 rooms and completing the challenges, then create a code in order to escape. Best of luck!", DialogLayout.Center)
pauseUntil(() => true)
info.startCountdown(600)
RoomNumber1done = false
RoomNumber2done = false
RoomNumber3done = false
RoomNumber4done = false
RoomNumber5done = false
RoomNumber6done = false
let room1 = tiles.createMap(tilemap`level6`)
let room2 = tiles.createMap(tilemap`level2`)
let room3 = tiles.createMap(tilemap`level8`)
let room4 = tiles.createMap(tilemap`level13`)
let room5 = tiles.createMap(tilemap`level15`)
let room6 = tiles.createMap(tilemap`level17`)
tiles.connectMapById(room1, room2, ConnectionKind.Door1)
tiles.connectMapById(room2, room3, ConnectionKind.Door2)
tiles.connectMapById(room3, room4, ConnectionKind.Door3)
tiles.connectMapById(room3, room4, ConnectionKind.Door4)
tiles.connectMapById(room5, room6, ConnectionKind.Door5)
let list = [
0,
1,
2,
3,
4,
5,
6,
7,
8,
9
]
_1 = list[randint(0, 10)]
_2 = list[randint(0, 10)]
_3 = list[randint(0, 10)]
_4 = list[randint(0, 10)]
_5 = list[randint(0, 10)]
_6 = list[randint(0, 10)]
if (RoomNumber1done == false) {
    R1()
}
while (characterAnimations.matchesRule(mySprite, characterAnimations.rule(Predicate.Moving, Predicate.NotMoving))) {
    music.play(music.createSong(hex`0078000408040200001c00010a006400f4016400000400000000000000000000000000050000045a0004000c0001220c001400011e14001c0001271c002400012524002800012228002c00011e2c003000011b30003400012038003c00011e3c004400012044004c0001224c005800012758006000012960006800012a68007400012509010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c80048001400150001031c001d0001032800290001073400350001063800390001013c003d0001074800490001015400550001055c005d0001066400650001076c006d000104740075000104`), music.PlaybackMode.UntilDone)
}
