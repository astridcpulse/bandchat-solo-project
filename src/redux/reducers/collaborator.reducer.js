const collaboratorReducer = (state = [], action) => {
    console.log('action set collaborators', action.payload)
    switch (action.type) {
      case 'SET_COLLABORATORS':
        return [
            ...state,
            ...action.payload
        ]
      default:
        return state;
    }
  };
  

  export default collaboratorReducer;