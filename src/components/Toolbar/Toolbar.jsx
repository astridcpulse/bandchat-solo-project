import { ThemeProvider, createMuiTheme, ButtonGroup, Button, Typography } from '@mui/material';


function Toolbar(){

    return(
        <>
            <ButtonGroup size='small' color='secondary'>
                <Button> Notes </Button>
                <Button> Chords </Button>
                <Button> Record </Button>
            </ButtonGroup>
        </>
    )
}

export default Toolbar;