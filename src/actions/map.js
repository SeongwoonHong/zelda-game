import { tiles } from 'data/maps/1';

export const ADD_TILES = 'ADD_TILES';

export const addTiles = () => {
  return {
    type: ADD_TILES,
    payload: {
      tiles
    }
  }
}
