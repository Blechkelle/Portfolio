import {createTheme} from '@mui/material/styles';
import {red} from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
    palette: {
        primary: {
            main: '#6d94bf',
            contrastText: '#ffffff',
        },
        secondary: {
            main: '#19857b',
            contrastText: '#ffffff',
        },
        error: {
            main: red.A400,
        },
    },
    components: {
        MuiOutlinedInput: {
            styleOverrides: {
                notchedOutline: {
                    border: 'none',
                },
                multiline: {
                    borderRadius: '5px',
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    height: '50px',
                    borderRadius: '8px',
                    textTransform: 'none',
                    fontFamily: 'Inter-Regular',
                    fontSize: '1rem',
                    lineHeight: '1.5rem',
                }
            }
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    backgroundColor: '#edf2f8',
                    borderRadius: '20px'
                }
            }
        },
        MuiTypography: {
            styleOverrides: {
                body1: {
                    fontFamily: 'Mustica',
                },
                body2: {
                    fontFamily: 'Inter-Regular',
                },
                h1: {
                    fontFamily: 'Mustica',
                    fontSize: '5rem',
                    lineHeight: '5.5rem',
                    color: '#04162c',
                },
                h2: {
                    fontFamily: 'Mustica',
                    fontSize: '3.5rem',
                    lineHeight: '4rem',
                    color: '#04162c',
                },
                h3: {
                    fontFamily: 'Mustica',
                    fontSize: '1.7rem',
                    lineHeight: '2.1rem',
                    color: '#728096',
                },
                h4: {
                    fontFamily: 'Inter-Regular',
                    fontSize: '1rem',
                    lineHeight: '1.4rem',
                    color: '#728096',
                },
                h5: {
                    fontFamily: 'Mustica',
                    fontSize: '1.5rem',
                    lineHeight: '2rem',
                    color: '#04162c',
                },
                h6: {
                    fontFamily: 'Mustica',
                    fontSize: '2rem',
                    lineHeight: '2rem',
                    color: '#04162c',
                },
            }
        }
    }
});

export default theme;
