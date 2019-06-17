const initialState = {
  position: [400, 240],
  spritePosition: '0px 0px',
  walkIndex: 0,
}

const playerReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'MOVE_PLAYER':
      return {
        ...state,
        ...action.payload,
      }
    default:
      return state;
  }
}

export default playerReducer;
