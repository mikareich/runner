import Avatar from './Avatar'
import { GRID_SIZE, OBJECT_ZOOM, TICKS_PER_SECOND } from './Constants'
import GameContext from './Game'
import GameObject from './GameObject'
import './style.scss'

const gameScreenCanvas = document.getElementById('gameScreen')
const GAME_WIDTH = 800
const GAME_HEIGHT = 600
/** @type {CanvasRenderingContext2D} */
const renderingContext = gameScreenCanvas.getContext('2d')

const game = new GameContext(renderingContext, GAME_WIDTH, GAME_HEIGHT)
const AVATAR_ASPECT_RATIO = [1, 2]
const avatar = new Avatar(
  {
    width: GRID_SIZE * OBJECT_ZOOM * AVATAR_ASPECT_RATIO[0],
    height: GRID_SIZE * OBJECT_ZOOM * AVATAR_ASPECT_RATIO[1]
  },
  game
)
const obstacle1 = new GameObject({
  width: GRID_SIZE * OBJECT_ZOOM,
  height: GRID_SIZE * OBJECT_ZOOM * 0.5,
  position: {
    x: GAME_WIDTH - GRID_SIZE * OBJECT_ZOOM,
    y: GAME_HEIGHT / 2 - GRID_SIZE * OBJECT_ZOOM * 0.25
  },
  speed: {
    x: -GRID_SIZE,
    y: 0
  }
})
game.gameObjects.push(avatar)
game.gameObjects.push(obstacle1)

let lastTimestamp = 0
function gameLoop(timestamp = 0) {
  const passedTime = timestamp - lastTimestamp
  if (passedTime >= 1000 / TICKS_PER_SECOND) {
    lastTimestamp = timestamp
    game.clearScreen()
    game.draw()
    game.update()
  }
  window.requestAnimationFrame(gameLoop)
}
gameLoop()
