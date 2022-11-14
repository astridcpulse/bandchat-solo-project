const audioReducer = (state = [], action) => {
    switch (action.type) {
        case 'SAVE_AUDIO':
          return action.payload;
        default:
          return state;
      }
}

export default audioReducer;