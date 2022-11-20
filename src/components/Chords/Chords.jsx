import { useDispatch, useSelector} from 'react-redux';
import {useEffect, useState } from 'react';

import {
    TextField,
    Button,
    InputLabel,
    MenuItem,
    ListSubheader,
    FormControl,
    Select,
    Stack,
    Box
} from '@mui/material';

function Chords ({part}){
    const [noteVal, setNoteVal] = useState();
    const [mode, setMode] = useState('');
    const [currentKey, setCurrentKey] = useState([])
    //couldnt figure out a better way to do this 🤪🫠
    // start looping from first item that matches the chord input

    // OR take array index of the KeyConvert variables, add the note value (1-12) to each num of the KeyConvert variable,
    //and then use that new array to select the notes at those given spots
    const allNotes = [
        "C", "C#", "D", "Eb", "E", "F", "F#", "G", "Ab", "A", "Bb", "B"  
        ]
        
    const allNotesArray = [
        "C", "C#", "D", "Eb", "E", "F", "F#", "G", "Ab", "A", "Bb", "B", 
        "C", "C#", "D", "Eb", "E", "F", "F#", "G", "Ab", "A", "Bb", "B" 
        ]

    //Major steps: whole whole half whole whole whole half
    const majorKey = [
        "I", "ii", "iii", "IV", "V", "vi", "vii°" 
        ]
    //major intervals in integer form (final half step from 11 - 0)
    const majorKeyConvert = [0, 2, 4, 5, 7, 9, 11]

     //minor steps: whole half whole whole half whole whole
    const minorKey = [
        "i", "ii°", "III", "iv", "v", "VI", "VII" 
        ]

    //minor intervals in integer form (final whole step from 10 - 0)
    const minorKeyConvert = [0, 2, 3, 5, 7, 8, 10]
    

    function keyFinder(noteVal, mode){
        let newArray = [];
        let indexArray =[];
        let finalArray = [];
        for(let value of allNotes ){
            newArray.push(allNotes.indexOf(value) + noteVal);
        }
        console.log('newarray', newArray)
        if(mode === 'major'){
            for(let num of majorKeyConvert){
                indexArray.push(newArray[num]);
            }
        } else if(mode ==='minor'){
            for( let num of minorKeyConvert){
                indexArray.push(newArray[num]);
            }
        }
        console.log('final array', indexArray);
        for(let notes of indexArray){
            finalArray.push(allNotesArray[notes]);
        }
        //final Array now has all notes in the scale
        console.log('final array', finalArray);
        if(mode === 'major'){
            finalArray[1] += 'm';
            finalArray[2] += 'm';
            finalArray[5] += 'm';
            finalArray[6] += 'dim';

        } else if(mode ==='minor'){
            finalArray[0] += 'm';
            finalArray[1] += 'dim';
            finalArray[3] += 'm';
            finalArray[4] += 'm';
        }
        //final array now as all chords for a given key signature
        setCurrentKey(finalArray);
        console.log('final array ck', currentKey);

    }

    return(

    <div>
        <h5>KEY: </h5>
        <FormControl sx={{ m: 1, minWidth: 130 }}>
            <InputLabel> Root Chord </InputLabel>
            <Select 
                defaultValue="" 
                id="note select" 
                onChange={(evt) => setNoteVal(evt.target.value)}
            >
                <MenuItem value="" >
                    <em> none </em>
                </MenuItem>
                {allNotes.map((note) => 
                    <MenuItem key={note} value={allNotes.indexOf(note)}> {note}</MenuItem>
                )}
            </Select>
        </FormControl>
      
        <FormControl sx={{ m: 1, minWidth: 140 }}>
            <InputLabel> Major/Minor </InputLabel>
            <Select 
                defaultValue="" 
                id="mode select" 
                onChange={(evt) => setMode(evt.target.value)}
            >
            <MenuItem value="">
                <em>None</em>
            </MenuItem>
            <MenuItem value={'major'}> Major </MenuItem>
            <MenuItem value={'minor'}> Minor </MenuItem>
            </Select>
        </FormControl>
        <Stack
            direction="column"
            sx={{bgcolor: "whitesmoke", m:2 }}
        >
        <Button 
            variant='contained'
            onClick={() => keyFinder(noteVal, mode)}
        > 
            display chords in key
        </Button>
        
        { currentKey 
            &&
        <Box
            sx={{m:2}}
        >
            {currentKey.map((chord, index) =>
               <h4>{majorKey[index]} :  {chord}</h4>
            )}
            
        </Box>

        }
        <TextField
                sx={{m: 2}}
                label='chords/notation'
                variant="outlined"
                multiline
            />
        </Stack>
    </div>
  );


    
}

export default Chords;