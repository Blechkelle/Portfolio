import * as React from 'react';
import Link from "next/link";
import {Stack} from "@mui/material";
import Typography from "@mui/material/Typography";

export default function Copyright() {
    return (
        <Stack direction={'row'} spacing={2}>
            <Typography variant={'body1'} color={'#ffffff'}>Get in Touch with me via</Typography>
            <Link href={'https://www.linkedin.com/in/jeffrey-sch%C3%BCtt-645b90219/'}>LinkedIn</Link>
            <Link href={'https://www.linkedin.com/in/jeffrey-sch%C3%BCtt-645b90219/'}>Email</Link>
        </Stack>
    );
}
