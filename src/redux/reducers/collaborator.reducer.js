const collaboratorReducer = (state = [], action) => {
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