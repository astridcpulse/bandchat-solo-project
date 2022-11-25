const collaboratorReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_COLLABORATORS':
        return action.payload;
        // [
        //     // ...state,
        //     action.payload
        // ]
      case 'SET_NEW_COLLABORATOR':
        console.log('action.payload', action.payload)
        return action.payload;
          
        // The Return for when <Collaborators> was in the <AllProjects> component
        // replaces the saved collaborator array with the newly updated one

        // return state.map((projectArr) => {
        //   console.log('projArray', projectArr[0].project_id)
        //   if (projectArr[0].project_id === action.payload[0].project_id){
        //     return projectArr = action.payload
        //   } else {
        //     return projectArr;
        //   }
        // })
        
      default:
        return state;
    }
  };
  

  export default collaboratorReducer;