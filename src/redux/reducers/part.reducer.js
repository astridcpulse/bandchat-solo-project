const partReducer = (state = [], action) => {
    console.log('part reducer payload', action.payload)
    switch (action.type) {
        case 'SET_PARTS':
          return action.payload;
        default:
          return state;
      }
}

export default partReducer;