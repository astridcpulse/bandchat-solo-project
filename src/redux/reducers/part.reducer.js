// no reducers needed for individual tools (notes, chords, audio)
// every time one of them is updated, it posts to server adn then GETS the whole part again and SETS it in the store
// those parts are passed up to the components for the tools by props

//  in future, if multiple tool (notes, chords, audio) elements are to be implimented in a single part, then they will need their own Database tables
// as well as their own reducers

const partReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_PARTS':
          return action.payload;

 

        default:
          return state;
      }
}

export default partReducer;