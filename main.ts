sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    game.over(true)
    info.changeScoreBy(1)
})
scene.setBackgroundColor(10)
music.magicWand.play()
let Bananaman = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . 5 . . . . . . . . 
. . . . . 5 5 5 5 5 . . . . . . 
. . . . 5 5 5 5 5 5 . . . . . . 
. . . 5 5 5 f 5 f 5 5 . . . . . 
. . . 5 5 5 5 5 5 5 5 . . . . . 
. . . 5 5 5 2 5 2 5 5 . . . . . 
. . . 5 5 5 5 2 5 5 5 5 . . . . 
. . . . 5 5 5 5 5 5 5 5 . . . . 
. . . . . 5 5 5 5 5 5 5 . . . . 
. . . . . . . 5 5 5 5 . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
controller.moveSprite(Bananaman)
let doughnut = sprites.create(img`
. . . . . . b b b b a a . . . . 
. . . . b b d d d 3 3 3 a a . . 
. . . b d d d 3 3 3 3 3 3 a a . 
. . b d d 3 3 3 3 3 3 3 3 3 a . 
. b 3 d 3 3 3 3 3 b 3 3 3 3 a b 
. b 3 3 3 3 3 a a 3 3 3 3 3 a b 
b 3 3 3 3 3 a a 3 3 3 3 d a 4 b 
b 3 3 3 3 b a 3 3 3 3 3 d a 4 b 
b 3 3 3 3 3 3 3 3 3 3 d a 4 4 e 
a 3 3 3 3 3 3 3 3 3 d a 4 4 4 e 
a 3 3 3 3 3 3 3 d d a 4 4 4 e . 
a a 3 3 3 d d d a a 4 4 4 e e . 
. e a a a a a a 4 4 4 4 e e . . 
. . e e b b 4 4 4 4 b e e . . . 
. . . e e e e e e e e . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Food)
doughnut.setPosition(140, 100)
info.startCountdown(5)
