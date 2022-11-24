import { createTheme } from '@mui/material/styles';


const Theme = createTheme({
    palette: {
        primary: {
            main: '#19323c',
            contrastText:'#fff'
        },
        secondary: {
            main:'#65b889',
            // contrastText:''
        },
        error: {
            main:'#ef626c'
        },
        warning: {
            main:'#f7cb15'
        },
        info: {
            main:'#e0e4f5'
        },
        paper: {
            main:'#254a5a'
        },
        text: {
            primary: 'rgba(255, 255, 255, 0.72)',
            secondary: 'rgba(255, 255, 255, 0.60)',
            disabled: 'rgba(255, 255, 255, 0.52)'
        }
    },
    typography: {
        // fontFamily:'',
        color: '#FFF'
    },
    components: {
        MuiCard: {
            styleOverrides: {
                root: {
                    backgroundColor: '#254a5a'
                }
            }
        },
        MuiBox: {
            styleOverrides: {
                root: {
                    backgroundColor: '#254a5a'
                }
            }
        }
    }
})
// color for paper
//   #254a5a

export default Theme;