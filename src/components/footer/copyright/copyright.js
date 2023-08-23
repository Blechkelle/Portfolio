import * as React from 'react';
import Typography from '@mui/material/Typography';
import Link from "next/link";
import styles from './copyright.module.css'

export default function Copyright() {
    return (
        <Typography variant="body1" style={{color: '#ffffff'}} align="center">
            Copyright © Jeff {new Date().getFullYear()}<br/>
            <Link href={'/impressum'} className={styles.footerLink}>Imprint</Link>
        </Typography>
    );
}
