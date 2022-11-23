// no reducers needed for individual tools (notes, chords, audio)
// every time one of them is updated, it posts to server adn then GETS the whole part again and SETS it in the store
// those parts are passed up to the components for the tools by props

//in future, if multiple tool (notes, chords, audio) elements are to be implimented in a single part, then they will need their own Database tables
// as well as their own reducers

// const partReducer = (state = [], action) => {
//     switch (action.type) {
//         case 'SET_PARTS':
//           return action.payload;
//         default:
//           return state;
//       }
// }

// export default partReducer;




const partReducer = (state = [], action) => {
  if (action.type === 'SET_PARTS'){
    return action.payload
  }

  else if (action.type === 'EDIT_PART_NOTE'){
    return state.map((part) => {
      if(action.payload.partId === part.id){
        return {
          ...part,
          notes: action.payload.notes
        }
      }
      else{
        return part;
      }
    })
  }
  
  else if (action.type === 'EDIT_PART_CHORD'){
    return state.map((part) => {
      if(action.payload.partId === part.id){
        return{
          ...part,
          chord_value: action.payload.notes,
          chord_mode: action.payload.chord_mode,
          chord_text: action.payload.chord_text
        }
        // part.chord_value = action.payload.notes;
        // part.chord_mode = action.payload.chord_mode;
        // part.chord_text = action.payload.chord_text;
      }
      else{
        return part;
      }
    })
    // return state;
  }

  else if (action.type === 'EDIT_PART_CHORD'){
    return (
      {
        ...state,
        chord_value: action.payload.chord_value,
        chord_mode: action.payload.chord_mode,
        chord_text: action.payload.chord_text
      }
    )
  } else if (action.type === 'EDIT_PART_SOUND'){
    return (
      {
        ...state,
        sound: action.payload
      }
    )
  } else {
    return state;
  }
}

export default partReducer;
