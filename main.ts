controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . 8 8 8 8 . . . . . . 
        . . . . 8 8 8 8 8 8 8 8 . . . . 
        . . . 8 8 8 8 8 8 8 8 8 8 . . . 
        . . 8 8 8 8 8 8 8 8 8 8 8 8 . . 
        . . 8 8 8 8 8 8 8 8 8 8 8 8 . . 
        . . 8 8 8 9 8 8 8 8 8 9 8 8 . . 
        . . 8 8 8 8 9 8 8 8 9 8 8 8 . . 
        . 8 8 8 8 8 8 8 9 8 8 8 8 8 8 . 
        . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . 
        . . 8 8 8 8 8 8 8 8 8 8 8 8 . . 
        . . . 8 8 8 8 8 8 8 8 8 8 . . . 
        . . f f f 8 8 8 8 8 8 f f f . . 
        . . f f f 8 8 8 8 8 8 f f f . . 
        . . f f f 8 8 8 8 8 8 f f f . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 8 8 8 8 . . . . . . 
        . . . . 8 8 8 8 8 8 8 8 . . . . 
        . . . 8 8 8 8 8 8 8 8 8 8 . . . 
        . . . 8 8 8 8 8 8 8 8 8 8 . . . 
        . . 8 8 8 8 8 8 8 8 8 8 8 8 . . 
        . . 8 8 8 9 8 8 8 8 8 9 8 8 . . 
        . . 8 8 8 8 9 8 8 8 9 8 8 8 . . 
        . . 8 8 8 8 8 8 9 8 8 8 8 8 . . 
        . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . 
        . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . 
        . . . 8 8 8 8 8 8 8 8 8 8 . . . 
        . . . f 8 8 8 8 8 8 8 8 f f . . 
        . . . f 8 8 8 8 8 8 f f f f . . 
        . . . f 8 8 8 8 8 8 f f f . . . 
        . . . . f f f . . . . . . . . . 
        `,img`
        . . . . . . 8 8 8 8 . . . . . . 
        . . . . 8 8 8 8 8 8 8 8 . . . . 
        . . . 8 8 8 8 8 8 8 8 8 8 . . . 
        . . 8 8 8 8 8 8 8 8 8 8 8 8 . . 
        . . 8 8 8 8 8 8 8 8 8 8 8 8 . . 
        . . 8 8 9 8 8 8 8 8 9 8 8 8 . . 
        . . 8 8 8 9 8 8 8 9 8 8 8 8 . . 
        . 8 8 8 8 8 8 9 8 8 8 8 8 8 8 . 
        . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . 
        . . 8 8 8 8 8 8 8 8 8 8 8 8 . . 
        . . . 8 8 8 8 8 8 8 8 8 8 . . . 
        . . f f 8 8 8 8 8 8 8 8 f f . . 
        . . f f 8 8 8 8 8 8 8 8 f f . . 
        . . f f 8 8 8 8 8 8 8 8 f f . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 8 8 8 8 . . . . . . 
        . . . . 8 8 8 8 8 8 8 8 . . . . 
        . . . 8 8 8 8 8 8 8 8 8 8 . . . 
        . . . 8 8 8 8 8 8 8 8 8 8 . . . 
        . . 8 8 8 8 8 8 8 8 8 8 8 8 . . 
        . . 8 9 8 8 8 8 8 9 8 8 8 8 . . 
        . . 8 8 9 8 8 8 9 8 8 8 8 8 . . 
        . . 8 8 8 9 8 8 8 8 8 8 8 8 . . 
        . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . 
        . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . 
        . . . 8 8 8 8 8 8 8 8 8 8 . . . 
        . . f f 8 8 8 8 8 8 8 8 f . . . 
        . . f f f f 8 8 8 8 8 8 f . . . 
        . . . f f f 8 8 8 8 8 8 f . . . 
        . . . . . . . . . f f f . . . . 
        `],
    100,
    true
    )
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . 8 8 8 8 8 8 . . . . . . 
        . . . 8 8 8 8 8 8 8 8 8 . . . . 
        . . 8 8 8 8 8 8 8 8 8 8 8 . . . 
        . . 8 8 8 8 8 8 8 8 8 8 8 . . . 
        . 8 8 8 8 8 8 8 8 8 8 8 8 . . . 
        . 8 8 8 8 8 8 8 8 8 8 8 8 . . . 
        . 8 8 8 f f f 8 8 8 8 8 8 8 . . 
        . f f f f f f b f f f f 8 8 . . 
        . . f f f f f 1 f f f f f 8 . . 
        . . . f f f f f f f f f 8 . . . 
        . . . f 8 1 8 8 8 8 8 8 . . . . 
        . . . f 8 1 8 f d d f . . . . . 
        . . . f 8 8 8 f d d f . . . . . 
        . . . f 9 9 8 f f f f . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . . . . f f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . 8 8 8 8 8 8 . . . . . . 
        . . . 8 8 8 8 8 8 8 8 8 . . . . 
        . . 8 8 8 8 8 8 8 8 8 8 8 . . . 
        . . 8 8 8 8 8 8 8 8 8 8 8 . . . 
        . 8 8 8 8 8 8 8 8 8 8 8 8 . . . 
        . 8 8 8 8 8 8 8 8 8 8 8 8 . . . 
        . 8 8 8 f f f 8 8 8 8 8 8 8 . . 
        . 8 f f f f f b f f f f 8 8 . . 
        . . 8 f f f f 1 f f f f f 8 . . 
        . . . f f f f f f f f f 8 . . . 
        . . . f 8 8 f d d f 8 . . . . . 
        . . . f 8 8 f d d f 8 . . . . . 
        . . f f 9 9 f e e f f f . . . . 
        . . f f f f f f f f f f . . . . 
        . . . f f f . . . f f . . . . . 
        `,img`
        . . . . 8 8 8 8 8 8 . . . . . . 
        . . . 8 8 8 8 8 8 8 8 8 . . . . 
        . . 8 8 8 8 8 8 8 8 8 8 8 . . . 
        . . 8 8 8 8 8 8 8 8 8 8 8 . . . 
        . 8 8 8 8 8 8 8 8 8 8 8 8 . . . 
        . 8 8 8 8 8 8 8 8 8 8 8 8 . . . 
        . 8 8 8 f f f 8 8 8 8 8 8 8 . . 
        . 8 f f f f f b f f f f 8 8 . . 
        . . f f f f f 1 f f f f f 8 . . 
        . . . f f f f f f f f f 8 . . . 
        . . . f 8 1 8 8 8 8 8 8 . . . . 
        . . . f 8 8 1 f d d f . . . . . 
        . . . f 8 8 8 f d d f . . . . . 
        . . . f 9 9 8 f f f f . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . . . . f f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . 8 8 8 8 8 8 . . . . . . 
        . . . 8 8 8 8 8 8 8 8 8 . . . . 
        . . 8 8 8 8 8 8 8 8 8 8 8 . . . 
        . . 8 8 8 8 8 8 8 8 8 8 8 . . . 
        . 8 8 8 8 8 8 8 8 8 8 8 8 . . . 
        . 8 8 8 8 8 8 8 8 8 8 8 8 . . . 
        . 8 8 8 f f f 8 8 8 8 8 8 8 . . 
        . 8 f f f f f b f f f f 8 8 . . 
        . . 8 f f f f 1 f f f f f 8 . . 
        . . . 8 f f f f 8 8 8 8 8 . . . 
        . . . 8 8 1 8 8 f d d f . . . . 
        . . . 8 8 1 8 8 f d d f . . . . 
        . . f f 9 9 8 8 f e e f . . . . 
        . . f f f f f f f f f f . . . . 
        . . . f f f . . . f f . . . . . 
        `],
    100,
    true
    )
})
function change_level (level_number: number) {
    if (level_number == 1) {
        tiles.setCurrentTilemap(tilemap`level 1`)
    } else if (level_number == 2) {
        tiles.setCurrentTilemap(tilemap`level 2`)
    } else if (level_number == 3) {
    	
    }
    tiles.placeOnRandomTile(mySprite, assets.tile`swpan 1`)
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . 8 8 8 8 8 8 . . . . 
        . . . . 8 8 8 8 8 8 8 8 8 . . . 
        . . . 8 8 8 8 8 8 8 8 8 8 8 . . 
        . . . 8 8 8 8 8 8 8 8 8 8 8 . . 
        . . . 8 8 8 8 8 8 8 8 8 8 8 8 . 
        . . . 8 8 8 8 8 8 8 8 8 8 8 8 . 
        . . 8 8 8 8 8 8 8 f f f 8 8 8 . 
        . . 8 8 f f f f b f f f f f 8 . 
        . . 8 f f f f f 1 f f f f f . . 
        . . . 8 f f f f f f f f f . . . 
        . . . . 8 8 8 f f f f f f . . . 
        . . . . . f d d f 8 1 8 f . . . 
        . . . . . f d d f 8 1 8 f . . . 
        . . . . . f e e f 8 9 9 f . . . 
        . . . . . . f f f f f f . . . . 
        . . . . . . . f f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 8 8 8 8 8 8 . . . . 
        . . . . 8 8 8 8 8 8 8 8 8 . . . 
        . . . 8 8 8 8 8 8 8 8 8 8 8 . . 
        . . . 8 8 8 8 8 8 8 8 8 8 8 . . 
        . . . 8 8 8 8 8 8 8 8 8 8 8 8 . 
        . . . 8 8 8 8 8 8 8 8 8 8 8 8 . 
        . . 8 8 8 8 8 8 8 f f f 8 8 8 . 
        . . 8 8 f f f f b f f f f f 8 . 
        . . 8 f f f f f 1 f f f f f . . 
        . . . 8 8 8 f f f f f f f . . . 
        . . . . . f 4 d d f 8 8 f . . . 
        . . . . . f e d d f 8 8 f . . . 
        . . . . f f f e e f 9 9 f f . . 
        . . . . f f f f f f f f f f . . 
        . . . . . f f . . . f f f . . . 
        `,img`
        . . . . . . 8 8 8 8 8 8 . . . . 
        . . . . 8 8 8 8 8 8 8 8 8 . . . 
        . . . 8 8 8 8 8 8 8 8 8 8 8 . . 
        . . . 8 8 8 8 8 8 8 8 8 8 8 . . 
        . . . 8 8 8 8 8 8 8 8 8 8 8 8 . 
        . . . 8 8 8 8 8 8 8 8 8 8 8 8 . 
        . . 8 8 8 8 8 8 8 f f f 8 8 8 . 
        . . 8 8 f f f f b f f f f f f . 
        . . 8 f f f f f 1 f f f f f . . 
        . . . 8 f f f f f f f f f . . . 
        . . . . 8 8 f f f f f f f . . . 
        . . . . . f d d e 8 1 8 f . . . 
        . . . . . f d d f 8 1 8 f . . . 
        . . . . . f e e f 8 9 9 f . . . 
        . . . . . . f f f f f f . . . . 
        . . . . . . . f f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 8 8 8 8 8 8 . . . . 
        . . . . 8 8 8 8 8 8 8 8 8 . . . 
        . . . 8 8 8 8 8 8 8 8 8 8 8 . . 
        . . . 8 8 8 8 8 8 8 8 8 8 8 . . 
        . . . 8 8 8 8 8 8 8 8 8 8 8 8 . 
        . . . 8 8 8 8 8 8 8 8 8 8 8 8 . 
        . . 8 8 8 8 8 8 8 f f f 8 8 8 . 
        . . 8 8 f f f f b f f f f f 8 . 
        . . 8 f f f f f 1 f f f f f . . 
        . . . 8 8 f f f f f f f f . . . 
        . . . . f d d f 8 1 8 8 f . . . 
        . . . . f d d f 1 8 8 8 f . . . 
        . . . . f e e f 8 8 9 9 f f . . 
        . . . . f f f f f f f f f f . . 
        . . . . . f f . . . f f f . . . 
        `],
    100,
    true
    )
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`next level block`, function (sprite, location) {
    current_level += 1
    change_level(current_level)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . 8 8 8 8 . . . . . . 
        . . . . 8 8 8 8 8 8 8 8 . . . . 
        . . . 8 8 8 8 8 8 8 8 8 8 . . . 
        . . 8 8 8 8 8 8 8 8 8 8 8 8 . . 
        . . 8 8 8 8 8 8 8 8 8 8 8 8 . . 
        . . 8 8 8 8 8 8 8 8 8 8 8 8 . . 
        . . 8 8 8 8 f f f f 8 8 8 8 . . 
        . 8 8 f f b f f f f b f f 8 8 . 
        . 8 f f f 1 f f f f 1 f f f 8 . 
        . . 8 f f f f f f f f f f 8 . . 
        . . . 8 f f f f f f f f 8 . . . 
        . . f f f 8 1 8 8 1 8 f f f . . 
        . . f f f 8 1 8 8 1 8 f f f . . 
        . . f f f 8 8 9 9 8 8 f f f . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 8 8 8 8 . . . . . . 
        . . . . 8 8 8 8 8 8 8 8 . . . . 
        . . . 8 8 8 8 8 8 8 8 8 8 . . . 
        . . 8 8 8 8 8 8 8 8 8 8 8 8 . . 
        . . 8 8 8 8 8 8 8 8 8 8 8 8 . . 
        . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . 
        . 8 8 8 8 8 e e e e 8 8 8 8 8 . 
        . . 8 e f b f 4 4 f b f e 8 . . 
        . . 8 e 4 1 f d d f 1 4 e 8 . . 
        . . . 8 e 4 d d d d 4 e 8 e . . 
        . . f e 8 8 1 8 8 e d d 4 e . . 
        . . e 4 8 8 1 8 8 e d d e . . . 
        . . . . 8 8 8 9 9 f e e . . . . 
        . . . . f f f f f f f . . . . . 
        . . . . f f f . . . . . . . . . 
        `,img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 2 2 2 2 2 2 f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f e e 2 2 2 2 2 2 e f f . . 
        . f f e 2 f f f f f f 2 e f f . 
        . f f f f f e e e e f f f f f . 
        . . f e f b f 4 4 f b f e f . . 
        . . f e 4 1 f d d f 1 4 e f . . 
        . . e f e 4 d d d d 4 e f . . . 
        . . e 4 d d e 2 2 2 2 f e f . . 
        . . . e d d e 2 2 2 2 f 4 e . . 
        . . . . e e f 5 5 4 4 f . . . . 
        . . . . . f f f f f f f . . . . 
        . . . . . . . . . f f f . . . . 
        `],
    100,
    false
    )
})
let current_level = 0
let mySprite: Sprite = null
mySprite = sprites.create(assets.image`main character     standing still`, SpriteKind.Player)
controller.moveSprite(mySprite)
scene.cameraFollowSprite(mySprite)
current_level = 1
change_level(1)
