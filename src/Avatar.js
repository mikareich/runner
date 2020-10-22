import GameObject from './GameObject'
import Game from './Game'
import { GRID_SIZE, TICKS_PER_SECOND } from './Constants'

class Avatar extends GameObject {
  /**
   * Avatar in Game
   * @param {GameConfig} config
   * @param {Game} gameCtx
   */
  constructor(config, gameCtx) {
    super(config)
    this.speed.x = GRID_SIZE
    this.position.y = gameCtx.height - this.height
    window.addEventListener('keydown', ({ key }) => {
      switch (key) {
        case 'ArrowRight':
          this.speed.x = GRID_SIZE
          break
        case 'ArrowLeft':
          this.speed.x = -GRID_SIZE
          break
        case 'ArrowUp':
          this.position.y = gameCtx.height - 2 * this.height
          window.setTimeout(() => {
            this.position.y = gameCtx.height - this.height
          }, (1000 / TICKS_PER_SECOND) * 5)
          break
        default:
          break
      }
    })
  }

  /** @param {Game} gameCtx */
  update(gameCtx) {
    // update position if new position is in game screen
    const newPosition = {
      x: this.position.x + this.speed.x,
      y: this.position.y + this.speed.y
    }
    if (newPosition.x >= 0 && newPosition.x + this.width <= gameCtx.width)
      this.position.x = newPosition.x

    if (newPosition.y >= 0 && newPosition.y + this.height <= gameCtx.height)
      this.position.y = newPosition.y
  }
}
export default Avatar
