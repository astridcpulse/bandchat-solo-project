import { useDispatch, useSelector} from 'react-redux';
import {useEffect, useState } from 'react';

import {
    TextField,
    InputLabel,
    MenuItem,
    ListSubheader,
    FormControl,
    Select
} from '@mui/material';

function Chords ({part}){
    const [note, setNote] = useState();
    const [mode, setMode] = useState('');


    const allNotes = [
        "C", "C#", "D", "Eb", "E", "F", "F#", "G", "Ab", "A", "Bb", "B"
        ]

        //Major steps: whole whole half whole whole whole half
      const majorKey = [
        "I", "ii", "iii", "IV", "V", "vi", "vii°" 
        ]

        //minor steps: whole half whole whole half whole whole
      const minorKey = [
        "i", "ii°", "III", "iv", "v", "VI", "VII" 
        ]

        console.log('values from inputs', note, mode )

    return(

    <div>
        <h5>KEY: </h5>
      <FormControl sx={{ m: 1, minWidth: 130 }}>
        <InputLabel> Root Chord </InputLabel>
        <Select defaultValue="" id="grouped-native-select" label="Grouping" onChange={(evt) => setNote(evt.target.value)}>
            <MenuItem value="" >
                <em> none </em>
            </MenuItem>
            { allNotes.map((note) => 
                <MenuItem value={note}> {note}</MenuItem>
            )}
        </Select>
      </FormControl>
      
      <FormControl sx={{ m: 1, minWidth: 140 }}>
        <InputLabel> Major/Minor </InputLabel>
        <Select defaultValue="" id="grouped-select" label="Grouping" onChange={(evt) => setMode(evt.target.value)}>
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={'major'}> Major </MenuItem>
          <MenuItem value={'minor'}> Minor </MenuItem>
        </Select>
      </FormControl>
    </div>
  );


    
}

export default Chords;