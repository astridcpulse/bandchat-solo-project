const partReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_PARTS':
          return action.payload;
        default:
          return state;
      }
}

export default partReducer;