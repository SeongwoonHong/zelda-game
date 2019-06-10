const initialState = {
  tiles: [],
}

const mapReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'ADD_TILES':
      return {
        ...state,
        tiles: action.payload.tiles,
      }
    default:
      return state;
  }
}

export default mapReducer;
