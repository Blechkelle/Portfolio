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
                    fontFamily: 'Plein-Regular',
                },
                body2: {
                    fontFamily: 'Inter-Regular',
                },
                h1: {
                    fontFamily: 'Plein-Bold',
                    lineHeight: '6rem',
                },
                h2: {
                    fontFamily: 'Plein-Bold',
                },
                h3: {
                    fontFamily: 'Plein-Bold',
                },
                h4: {
                    fontFamily: 'Plein-Bold',
                },
                h5: {
                    fontFamily: 'Plein-Bold',
                },
                h6: {
                    fontFamily: 'Plein-Bold',
                },
            }
        }
    }
});

export default theme;
