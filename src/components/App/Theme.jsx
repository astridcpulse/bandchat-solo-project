import { createTheme, experimental_sx as sx } from '@mui/material/styles';


const Theme = createTheme({
    palette: {
        primary: {
            main: '#19323c',
            contrastText:'#fff'
        },
        secondary: {
            main:'#92cbaa',
            contrastText:'#fff'
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
        action: {
            // active: '#001E3C'
        },
        text: {
            primary: 'rgba(255, 255, 255, 0.72)',
            secondary: 'rgba(255, 255, 255, 0.62)',
            disabled: 'rgba(255, 255, 255, 0.52)',
            black: '#000000',
            bandchat: 'rgba(255, 255, 255, .9)',
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
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    margin: 12
                }
            }
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    color: '#000000',
                    backgroundColor: '#D8D8D8',
                    
                }
            }
        },
        MuiInputBase: {
            styleOverrides: {
                root: {
                    color: '#000000',
                }
            }
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    backgroundColor: '#D8D8D8',
                    // color: '#000000'
                }
            }
        },
        MuiAutocomplete: {
            styleOverrides: {
                root: {
                    backgroundColor: '#000000',
                    
                }
            }
        },
        MuiInputLabel: {
            styleOverrides: {
                root: {
                    color: '#000000',
                    
                }
            }
        },
        MuiMenuItem: {
            styleOverrides: {
                root: {
                    color: '#000000',
                    
                }
            }
        },
        
    }
})
// color for paper
//   #254a5a

export default Theme;