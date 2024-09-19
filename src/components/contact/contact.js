import * as React from 'react';
import {Button, Stack} from "@mui/material";
import Typography from "@mui/material/Typography";

const Contact = () => {


    return (
        <Stack direction={'column'} textAlign={'center'} width={'100%'}>
            <Typography variant={'h5'}>Get in touch with me!</Typography>
            <Button variant={'contained'}><Typography variant={'body1'}>Contact</Typography></Button>
        </Stack>
    );
}

export default Contact
