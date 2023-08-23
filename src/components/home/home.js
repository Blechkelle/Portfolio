import * as React from 'react';
import {Box} from "@mui/material";
import styles from './home.module.css'

export default function Home() {

    return (
        <Box className={styles.homeWrapper}>
            Hallo Welt!
        </Box>
    );
}
