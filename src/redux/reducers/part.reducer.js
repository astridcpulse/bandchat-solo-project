
// every time one of them is updated, it posts to server adn then GETS the whole part again and SETS it in the store
// those parts are passed up to the components for the tools by props

//in future, if multiple tool (notes, chords, audio) elements are to be implimented in a single part, then they will need their own Database tables
// as well as their own reducers

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
      } else{
          return part;
        }
    })
  } else if (action.type === 'EDIT_PART_CHORD_VALUE'){
    return state.map((part) => {
      if(action.payload.partId === part.id){
        return{
          ...part,
          chord_value: action.payload.chord_value,
        }
      } else{
          return part;
        }
    })
  } else if (action.type === 'EDIT_PART_CHORD_MODE'){
    return state.map((part) => {
      if(action.payload.partId === part.id){
        return{
          ...part,
          chord_mode: action.payload.chord_mode,
        }
      } else{
          return part;
        }
    })
  } else if (action.type === 'EDIT_PART_CHORD_TEXT'){
    return state.map((part) => {
      if(action.payload.partId === part.id){
        return{
          ...part,
          chord_text: action.payload.chord_text,
        }
      } else{
          return part;
        }
    })
  } else if (action.type === 'EDIT_PART_AUDIO'){
    console.log('edit part audio reducer', action.payload);
    return state.map((part) => {
      if(action.payload.partId === part.id){
        return{
          ...part,
          sound: action.payload,
        }
      } else{
          return part;
        }
    })
  } else {
      return state;
    }
}

export default partReducer;
