import GameObject from './GameObject'

/**
 * Detect Collision of Game Obejcts
 * @param {Array.<GameObject>} gameObjects Game Objects to controll
 * @returns {GameObject[][]} Collisioned Objects
 */
function detectCollisions(gameObjects) {
  /** @type {GameObject[][]} */
  const collisionedObjects = []
  gameObjects.forEach((gameObjectA) => {
    gameObjects.forEach((gameObjectB) => {})
  })
  return collisionedObjects
}
export default detectCollisions
