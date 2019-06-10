import store from 'config/store';
import {
  SPRITE_SIZE,
  MAP_WIDTH,
  MAP_HEIGHT,
  WEST,
  EAST,
  NORTH,
  SOUTH,
} from 'config/constants'

export const MOVE_PLAYER = 'MOVE_PLAYER';

const observeBoundaries = (oldPos, newPos) => {
  return (newPos[0] >= 0 && newPos[0] <= MAP_WIDTH - SPRITE_SIZE) &&
         (newPos[1] >= 0 && newPos[1] <= MAP_HEIGHT - SPRITE_SIZE)
}

const observeImpassable = (oldPos, newPos) => {
  const { tiles } = store.getState().map;
  const x = newPos[0] / SPRITE_SIZE;
  const y = newPos[1] / SPRITE_SIZE;
  const nextTile = tiles[y][x];

  return nextTile < 5;
}

export const attemptMove = (direction) => {
  const oldPos = store.getState().player.position;
  const newPos = getNewPosition(oldPos, direction);

  if (observeBoundaries(oldPos, newPos) && observeImpassable(oldPos, newPos)) {
    return movePlayer(newPos, direction);
  }

  // Todo below..
  return {
    type: null
  }
}

const getWalkIndex = () => {
  const { walkIndex } = store.getState().player;

  return walkIndex > 7 ? 0 : walkIndex + 1;
}

const getSpritePosition = (direction) => {
  const walkIndex = getWalkIndex();

  switch(direction) {
    case SOUTH:
      return `${walkIndex * SPRITE_SIZE}px ${SPRITE_SIZE * 0}px`;
    case EAST:
      return `${walkIndex * SPRITE_SIZE}px ${SPRITE_SIZE * 1}px`;
    case WEST:
      return `${walkIndex * SPRITE_SIZE}px ${SPRITE_SIZE * 2}px`;
    case NORTH:
      return `${walkIndex * SPRITE_SIZE}px ${SPRITE_SIZE * 3}px`;
    default:
      return;
  }
}

const getNewPosition = (oldPos, direction) => {
  switch(direction) {
    case WEST:
      return [ oldPos[0] - SPRITE_SIZE, oldPos[1] ]
    case EAST:
      return [ oldPos[0] + SPRITE_SIZE, oldPos[1] ]
    case NORTH:
      return [ oldPos[0], oldPos[1] - SPRITE_SIZE ]
    case SOUTH:
      return [ oldPos[0], oldPos[1] + SPRITE_SIZE ]
    default:
      return;
  }
}

export const movePlayer = (newPos, direction) => {
  const spritePosition = getSpritePosition(direction);

  return {
    type: MOVE_PLAYER,
    payload: {
      position: newPos,
      spritePosition,
      walkIndex: getWalkIndex(),
    }
  }
}
