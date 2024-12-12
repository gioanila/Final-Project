namespace ConnectionKind {
    export const Door3 = ConnectionKind.create()
    export const Door4 = ConnectionKind.create()
    export const Door5 = ConnectionKind.create()
}
function R6 () {
    tiles.loadMap(tiles.createMap(tilemap`level17`))
    mySprite.setPosition(20, 20)
    game.splash("You passed this level!!")
    mySprite.sayText("YAY", 500, false)
    game.splash("Your sixth number is", _6)
    RoomNumber6done = true
    answer = game.askForNumber("What is the code?", 6)
    if (answer == _1 * 100000 + (_2 * 10000 + (_3 * 1000 + (_4 * 100 + (_5 * 10 + _6 * 1))))) {
        game.splash("You escaped!")
    } else {
        game.splash("Start over :(")
    }
}
function R1 () {
    info.setScore(0)
    mySprite.sayText("Room 1... looks like I just need to collect 10 fruits.", 3000, false)
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
})
function R2 () {
    tiles.loadMap(tiles.createMap(tilemap`level2`))
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
        `, SpriteKind.Player)
    villain.follow(mySprite, 30)
    game.splash("You passed this level!!")
    mySprite.sayText("YAY", 500, false)
    game.splash("Your second number is", _2)
    RoomNumber2done = true
}
function R3 () {
    tiles.loadMap(tiles.createMap(tilemap`level8`))
    game.splash("You passed this level!!")
    mySprite.sayText("YAY", 500, false)
    game.splash("Your third number is ", _3)
    RoomNumber3done = true
}
function R4 () {
    tiles.loadMap(tiles.createMap(tilemap`level13`))
    game.splash("You passed this level!!")
    mySprite.sayText("YAY", 500, false)
    game.splash("Your fourth number is", _4)
    RoomNumber4done = true
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    sprites.destroy(otherSprite)
})
function R5 () {
    tiles.loadMap(tiles.createMap(tilemap`level15`))
    game.splash("You passed this level!!")
    mySprite.sayText("YAY", 500, false)
    game.splash("Your fifth number is", _5)
    RoomNumber5done = true
}
let villain: Sprite = null
let mySprite2: Sprite = null
let answer = 0
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
while (false) {
    music.play(music.createSong(hex`0078000408020107001c00020a006400f401640000040000000000000000000000000000000003260000000400011e0c001000031d24291400180001241c002000012730003400012538003c000124`), music.PlaybackMode.UntilDone)
}
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
game.splash("Welcome to the dungeons... you have 15 minutes to leave before they implode on top of you. Find numbers by going through 6 rooms and completing the challenges, then create a code in order to escape. Best of luck!")
pauseUntil(() => true)
info.startCountdown(900)
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
    if (RoomNumber2done == false) {
        R2()
        if (RoomNumber3done == false) {
            R3()
            if (RoomNumber4done == false) {
                R4()
                if (RoomNumber5done == false) {
                    R5()
                    if (RoomNumber6done == false) {
                        R6()
                    }
                }
            }
        }
    }
}
