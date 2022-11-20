import { 
    TextField
} from '@mui/material';

function Notes({part}){

    return(
        <>
            <TextField
                variant="outlined"
                multiline
            />
        </>
    );
}

export default Notes;