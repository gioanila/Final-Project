enum ActionKind {
    Walking,
    Idle,
    Jumping
}
namespace SpriteKind {
    export const trap = SpriteKind.create()
    export const dart = SpriteKind.create()
    export const goal = SpriteKind.create()
}
namespace ConnectionKind {
    export const Door3 = ConnectionKind.create()
    export const Door4 = ConnectionKind.create()
    export const Door5 = ConnectionKind.create()
}
function R6 () {
    tiles.loadMap(tiles.createMap(tilemap`level17`))
    tiles.placeOnRandomTile(mySprite, sprites.builtin.forestTiles8)
}
sprites.onOverlap(SpriteKind.dart, SpriteKind.goal, function (sprite, otherSprite) {
    game.splash("Goal!")
    sprites.destroy(myDart)
    pause(1000)
    game.splash("You passed this level!!")
    mySprite.sayText("YAY", 500, false)
    pause(1000)
    game.splash("Your second number is", _2)
    RoomNumber2done = true
    music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.UntilDone)
    R3()
})
function trap2 (trapsprite: Sprite) {
    trapsprite.setPosition(randint(20, 200), randint(20, 200))
    trapsprite.setVelocity(100, 0)
    trapsprite.setBounceOnWall(true)
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    myDart.throwDart()
})
info.onCountdownEnd(function () {
    scene.cameraShake(10, 5000)
    mySprite.sayText("YOU DIED")
    game.gameOver(false)
})
function R1 () {
    info.setLife(3)
    info.setScore(0)
    mySprite.sayText("Room 1... looks like I just need to collect 10 fruits while avoiding the traps.", 2000, false)
    pause(2000)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(9, 8))
    trapr1 = sprites.create(img`
        ........................
        ........................
        ........................
        ...........ccc..........
        ...........cccc.........
        .......ccc..ccccccc.....
        .......cccccc555555cc...
        ........ccb5555555555c..
        .....cc..b555555555555c.
        .....cccb55555bcc555555c
        ......cb555555555c55d55c
        ......b5555555555555555c
        ...cc.b555dd5555bb1bbbc.
        ....ccd55ddddd5bbbb335c.
        ...ccbdddddddd5bbbb335c.
        .ccccddddddddd55bbb335c.
        cdcccdddddb55bb5bb3335c.
        cddbddddddb555bb5b3335c.
        cddddddddddb5555b53335c.
        ccddddddbd55bb55c5555c..
        .ccddddbbbdd55cccbccc...
        ...ccbbbcbddddccdddc....
        .....ccccdd555dccccc....
        ........cccccccc........
        `, SpriteKind.trap)
    trap2r1 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . c c . c c . . . . . . . . 
        . . f 3 c c 3 c c c . . . . . . 
        . f c 3 b c 3 b c c c . . . . . 
        f c b b b b b b b b f f . . . . 
        c c 1 b b b 1 b b b f f . . . . 
        c b b b b b b b b c f f f . . . 
        c b 1 f f 1 c b b f f f f . . . 
        f f 1 f f 1 f b c c b b b . . . 
        f f f f f f f b f c c c c . . . 
        f f 2 2 2 2 f b f b b c c c . . 
        . f 2 2 2 2 2 b c c b b c . . . 
        . . f 2 2 2 b f f c c b b c . . 
        . . . f f f f f f f c c c c c . 
        . . . . . . . . . . . . c c c c 
        `, SpriteKind.trap)
    trap3r1 = sprites.create(img`
        ...........fffffff...ccfff..........
        ..........fbbbbbbbffcbbbbf..........
        ..........fbb111bbbbbffbf...........
        ..........fb11111ffbbbbff...........
        ..........f1cccc1ffbbbbbcff.........
        ..........ffc1c1c1bbcbcbcccf........
        ...........fcc3331bbbcbcbcccf..ccccc
        ............c333c1bbbcbcbccccfcddbbc
        ............c333c1bbbbbbbcccccddbcc.
        ............c333c11bbbbbccccccbbcc..
        ...........cc331c11bbbbccccccfbccf..
        ...........cc13c11cbbbcccccbbcfccf..
        ...........c111111cbbbfdddddc.fbbcf.
        ............cc1111fbdbbfdddc...fbbf.
        ..............cccfffbdbbfcc.....fbbf
        ....................fffff........fff
        `, SpriteKind.trap)
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
    trap2(trap2r1)
    trap2(trapr1)
    trap2(trap3r1)
}
info.onScore(10, function () {
    sprites.destroy(mySprite2)
    game.splash("You passed this level!!")
    mySprite.sayText("YAY", 500, false)
    game.splash("Your first number is ", _1)
    RoomNumber1done = true
    music.play(music.melodyPlayable(music.powerUp), music.PlaybackMode.UntilDone)
    R2()
})
function R2 () {
    sprites.destroyAllSpritesOfKind(SpriteKind.trap)
    tiles.loadMap(tiles.createMap(tilemap`level2`))
    game.splash("Shoot your dart towards the chest to open the next number!")
    myDart = darts.create(img`
        . . . . . . 3 3 . . . . . . . . 
        . . . . . . 3 1 3 . . . . . . . 
        . . 3 3 . . 3 1 3 . . 3 3 . . . 
        . . 3 1 3 . 3 1 3 2 3 1 3 . . . 
        . . . 3 1 3 3 1 3 2 1 3 . . . . 
        3 3 3 3 2 1 3 1 1 1 3 . . . . . 
        3 1 1 1 1 1 1 1 1 2 3 3 3 3 3 3 
        . 3 3 3 2 3 1 1 1 1 1 1 1 1 1 3 
        . . . . . 2 1 1 1 3 3 2 3 3 3 . 
        . . . . 3 1 3 1 3 1 2 . . . . . 
        . . . 3 1 3 2 1 3 3 1 3 . . . . 
        . . 3 1 3 . 2 1 3 . 3 1 3 . . . 
        . . 3 3 . . 3 1 3 . . 3 3 . . . 
        . . . . . . 3 1 3 . . . . . . . 
        . . . . . . 3 1 3 . . . . . . . 
        . . . . . . 3 3 . . . . . . . . 
        `, SpriteKind.dart)
    myDart.setTrace()
    myDart.controlWithArrowKeys()
    chest = sprites.create(img`
        . . b b b b b b b b b b b b . . 
        . b e 4 4 4 4 4 4 4 4 4 4 e b . 
        b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
        b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
        b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
        b e e 4 4 4 4 4 4 4 4 4 4 e e b 
        b e e e e e e e e e e e e e e b 
        b e e e e e e e e e e e e e e b 
        b b b b b b b d d b b b b b b b 
        c b b b b b b c c b b b b b b c 
        c c c c c c b c c b c c c c c c 
        b e e e e e c b b c e e e e e b 
        b e e e e e e e e e e e e e e b 
        b c e e e e e e e e e e e e c b 
        b b b b b b b b b b b b b b b b 
        . b b . . . . . . . . . . b b . 
        `, SpriteKind.goal)
    tiles.placeOnTile(myDart, tiles.getTileLocation(4, 9))
    chest.setPosition(137, 73)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.trap, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    sprites.destroy(otherSprite)
    mySprite.sayText("OW!", 200, false)
    music.play(music.melodyPlayable(music.smallCrash), music.PlaybackMode.UntilDone)
})
function R3 () {
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
    tiles.loadMap(tiles.createMap(tilemap`level8`))
    game.showLongText("Room 3... Solve all 3 math questions and a riddle right to get the key...", DialogLayout.Center)
    ofquestions = 3
    while (0 < ofquestions) {
        value1 = randint(35, 350)
        value2 = randint(-4, -46)
        value3 = randint(583, 234)
        mathanswer = value1 * value2 + value3
        userinput = game.askForNumber("What is " + value1 + "x" + value2 + "+" + value3, 6)
        if (mathanswer == userinput) {
            ofquestions += -1
            game.splash("Congrats!" + ofquestions + " questions more to go!")
            if (ofquestions == 0) {
                game.splash("You're a math genius! But now...")
                game.splash("Riddle me this...")
                riddle = game.askForString("What word is spelled wrong in the dictionary? ")
                if (riddle == "wrong") {
                    game.splash("You passed this level!!")
                    mySprite.sayText("YAY", 500, false)
                    game.splash("Your third number is ", _3)
                    RoomNumber3done = true
                    R4()
                } else {
                    game.splash("WRONG!" + "It's  " + answerChecker(mathanswer))
                    game.splash("YOU DIED! Fail to answer, fail to escape :(")
                    music.play(music.melodyPlayable(music.wawawawaa), music.PlaybackMode.UntilDone)
                    game.gameOver(false)
                }
            }
        } else {
            ofquestions = 0
            game.splash("WRONG!" + "It's  " + answerChecker(mathanswer))
            game.splash("YOU DIED! Fail to answer, fail to escape :(")
            music.play(music.melodyPlayable(music.wawawawaa), music.PlaybackMode.UntilDone)
            game.gameOver(false)
        }
    }
}
function answerChecker (correctAnswer: number) {
    return correctAnswer
}
info.onLifeZero(function () {
    scene.cameraShake(10, 5000)
    mySprite.sayText("YOU DIED")
    music.play(music.melodyPlayable(music.wawawawaa), music.PlaybackMode.UntilDone)
    game.gameOver(false)
})
function R4 () {
    tiles.loadMap(tiles.createMap(tilemap`level13`))
    game.splash("You passed this level!!")
    mySprite.sayText("YAY", 500, false)
    game.splash("Your fourth number is", _4)
    RoomNumber4done = true
    music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.UntilDone)
    R5()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    sprites.destroy(otherSprite)
    music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.UntilDone)
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
        music.play(music.melodyPlayable(music.wawawawaa), music.PlaybackMode.UntilDone)
        game.gameOver(false)
    }
})
function R5 () {
    tiles.loadMap(tiles.createMap(tilemap`level15`))
    game.splash("You passed this level!!")
    mySprite.sayText("YAY", 500, false)
    game.splash("Your fifth number is", _5)
    RoomNumber5done = true
    music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.UntilDone)
    R6()
}
let answer = 0
let riddle = ""
let userinput = 0
let mathanswer = 0
let value3 = 0
let value2 = 0
let value1 = 0
let ofquestions = 0
let chest: Sprite = null
let mySprite2: Sprite = null
let trap3r1: Sprite = null
let trap2r1: Sprite = null
let trapr1: Sprite = null
let myDart: Dart = null
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
controller.moveSprite(mySprite, 80, 80)
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
