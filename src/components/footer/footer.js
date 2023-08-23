import * as React from 'react';
import Container from "@mui/material/Container";
import styles from "./footer.module.css"
import {Box, Grid, Stack} from "@mui/material";
import Copyright from "./copyright";

export default function Footer() {
    return (
        <Box className={styles.footerContainer}>
            <Container maxWidth="lg">
                <Box py={10}>
                    <Stack direction={'column'} spacing={3}>
                        <Grid container spacing={5}>
                            <Grid item xs={12}>
                                <Copyright/>
                            </Grid>
                        </Grid>
                    </Stack>
                </Box>
            </Container>
        </Box>
    );
}
