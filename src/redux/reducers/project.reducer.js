const projectReducer = (state = [], action) => {
  console.log('action', action.payload)
    switch (action.type) {
        case 'SET_PROJECTS':
          return action.payload;
        default:
          return state;
      }
}

export default projectReducer;