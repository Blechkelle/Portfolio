import * as React from 'react';
import {Box, Stack} from "@mui/material";
import Typography from "@mui/material/Typography";
import styles from "./hello.module.css";
import {motion, useScroll, useTransform} from "framer-motion";
import {useRef} from "react";
import Home from "../home/home";

const Hello = () => {

    const scrollRef = useRef(null)
    const {scrollYProgress} = useScroll({ target: scrollRef });
    const scale = useTransform(scrollYProgress, [0, 15], [1, 2000]);
    const y = useTransform(scrollYProgress, [0, 15], [0, 285000]);
    const x = useTransform(scrollYProgress, [0, 15], [0, -41000]);
    const backgroundColor = useTransform(scrollYProgress, [0.5, 0.8], ['#ffffff', '#000000']);
    const opacity = useTransform(scrollYProgress, [0.4, 0.8], [0, 1]);

    return (
        <motion.div ref={scrollRef} style={{height: '350vh', backgroundColor}}>
            <Box className={styles.zoomContainer}>
                <Box className={styles.zoomContent}>
                    <motion.div style={{scale, y, x}}>
                        <Stack direction={'column'} alignItems={'center'}>
                            <Typography color={'#000000'} variant={'h1'}>Hi!</Typography>
                            <Typography color={'#000000'} variant={'h5'}>My name is</Typography>
                            <Typography className={styles.nameFont}>Jeff</Typography>
                        </Stack>
                    </motion.div>
                </Box>
            </Box>
            <motion.div style={{opacity}}>
                <Home/>
            </motion.div>
        </motion.div>
    );
}

export default Hello
