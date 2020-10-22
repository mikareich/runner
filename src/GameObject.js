import './types'

class GameObject {
  /**
   * Renderable Object in Game
   * @param {GameConfig} config
   */
  constructor(config) {
    this.width = config.width
    this.height = config.height
    this.position = config.position || { x: 0, y: 0 }
    this.speed = config.speed || { x: 0, y: 0 }
  }

  /**
   *  Draws Object
   * @param {CanvasRenderingContext2D} ctx Game Rendering Context
   */
  draw(ctx) {
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height)
  }

  /**
   *  Updates Object by his speed
   */
  update() {
    this.position.x += this.speed.x
    this.position.y += this.speed.y
  }
}
export default GameObject
