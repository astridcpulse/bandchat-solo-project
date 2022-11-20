import { 
    TextField
} from '@mui/material';




function Notes({part}){

    return(
        <>
            <TextField
                label='notes'
                variant="outlined"
                multiline
            />
        </>
    );
}

export default Notes;