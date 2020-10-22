import detectCollisions from './CollisionDetector'
import GameObject from './GameObject'

class GameContext {
  /**
   * Controlls entire Game
   * @param {CanvasRenderingContext2D} ctx Rendering Context of Game
   * @param {number} width Width of Game Screen
   * @param {number} height Height of Game Screen
   */
  constructor(ctx, width, height) {
    this.ctx = ctx
    this.width = width
    this.height = height
    /** @type {Array.<GameObject>} */
    this.gameObjects = []
  }

  /**
   * Draws all listed Game Objects
   */
  draw() {
    this.gameObjects.forEach((gameObject) => gameObject.draw(this.ctx))
  }

  /**
   * Updates all listed Game Objects
   */
  update() {
    this.gameObjects.forEach((gameObject) => gameObject.update(this))
    // console.log(detectCollisions(this.gameObjects))
  }

  /**
   * Clears entire screen
   */
  clearScreen() {
    this.ctx.clearRect(0, 0, this.width, this.height)
  }
}

export default GameContext
