import * as React from 'react';
import {Box, Stack} from "@mui/material";
import Typography from "@mui/material/Typography";
import styles from "./hello.module.css";
import {motion, useScroll, useTransform} from "framer-motion";
import {useRef} from "react";

const Hello = () => {

    const scrollRef = useRef(null)
    const {scrollYProgress} = useScroll({ target: scrollRef });
    const scale = useTransform(scrollYProgress, [0, 15], [1, 2500]);
    const y = useTransform(scrollYProgress, [0, 15], [0, 355000]);
    const x = useTransform(scrollYProgress, [0, 15], [0, -51000]);
    const backgroundColor = useTransform(scrollYProgress, [0.5, 1], ['#ffffff', '#000000']);

    return (
        <motion.div ref={scrollRef} style={{height: '300vh', backgroundColor}}>
            <Box className={styles.zoomContainer}>
                <Box className={styles.zoomContent}>
                    <motion.div style={{scale, y, x}}>
                        <Stack direction={'column'} alignItems={'center'}>
                            <Typography variant={'h1'}>Hi!</Typography>
                            <Typography variant={'h5'}>My name is</Typography>
                            <Typography className={styles.nameFont}>Jeff</Typography>
                        </Stack>
                    </motion.div>
                </Box>
            </Box>
        </motion.div>
    );
}

export default Hello
