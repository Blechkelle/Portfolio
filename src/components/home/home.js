import * as React from 'react';
import {Box, Stack} from "@mui/material";
import styles from './home.module.css'
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import {AnimatePresence, LayoutGroup, motion, useInView} from "framer-motion";
import getScrollPosition from "../../scroll";
import {containerElement, itemElement} from "../../framer";
import {useEffect, useRef} from "react";

const Home = () => {

    const ref = useRef(null)
    const isInView = useInView(ref)
    useEffect(() => {

    }, [isInView])

    return (
        <motion.div
            variants={containerElement}
            initial="hidden"
            whileInView="show"
        >
            <AnimatePresence>
                <LayoutGroup id={'homeAnim'}>
                    {getScrollPosition() >= 50 &&
                    <Stack px={5} py={3} direction={'row'} sx={{ backgroundColor: { md: 'transparent', xs: isInView ? "#ffffff" : '#000000' } }} className={isInView ? styles.headerWrapperWhite : styles.headerWrapperBlack} justifyContent={'space-between'} alignItems={'center'}>
                        <motion.div className={styles.topWrapper} layoutId={'nameLogo'}
                                    transition={{type: 'spring', stiffness: 200, mass: isInView ? 0.1 : 0, damping: 15}}>
                            <Typography className={styles.nameFontSmall} color={isInView ? "#000000" : "#ffffff"}>Jeff<span
                                style={{color: isInView ? "#d5d5d5" : "#656565"}}>rey</span></Typography>
                        </motion.div>
                        <motion.div className={styles.topWrapperHeadline} layoutId={'textHeadline'}
                                    transition={{type: 'spring', stiffness: 200, mass: isInView ? 0.1 : 0, damping: 15}}>
                            <Typography color={isInView ? "#000000" : "#ffffff"} variant={'h5'}>{isInView ? "About Me" : "My Work"}</Typography>
                        </motion.div>
                    </Stack>}
                    <Container maxWidth={'sm'} ref={ref}>
                        <Box py={15} className={styles.homeWrapper} display={'flex'} alignItems={'center'}
                             justifyContent={'center'}>
                            <Stack direction={'column'} spacing={10}>
                                <motion.div key={0} variants={itemElement}>
                                    <Stack height={'216px'} textAlign={'center'} direction={'column'}>

                                        {getScrollPosition() <= 50 &&
                                            <motion.div layoutId={'textHeadline'}
                                                        transition={{
                                                            type: 'spring',
                                                            stiffness: 200,
                                                            mass: 0.1,
                                                            damping: 15
                                                        }}>
                                                <Typography variant={'h2'}>Hi! My name is</Typography>
                                            </motion.div>}
                                        {getScrollPosition() <= 50 &&
                                            <motion.div layoutId={'nameLogo'}
                                                        transition={{
                                                            type: 'spring',
                                                            stiffness: 200,
                                                            mass: 0.1,
                                                            damping: 15
                                                        }}>
                                                <Typography className={styles.nameFont}>Jeff<span
                                                    style={{color: "#d5d5d5"}}>rey</span></Typography>
                                            </motion.div>
                                        }
                                    </Stack>
                                </motion.div>
                                <Stack direction={'column'} spacing={2}>
                                    <motion.div key={1} variants={itemElement}>
                                        <Stack direction={'column'} p={1}>
                                            <Typography variant={'h6'}>What i do</Typography>
                                            <Typography variant={'body1'}>
                                                I am a passionate frontend designer with a
                                                strong
                                                background
                                                in
                                                crafting user-friendly and aesthetically appealing user interfaces. My
                                                expertise
                                                encompasses
                                                the utilization of modern web technologies such as Next.js, React.js,
                                                CSS3,
                                                and
                                                Material
                                                UI
                                                to create immersive and responsive user experiences.
                                            </Typography>
                                        </Stack>
                                    </motion.div>
                                    <motion.div key={2} variants={itemElement}>
                                        <Stack direction={'column'} p={1}>
                                            <Typography variant={'h6'}>My Skills</Typography>
                                            <Typography variant={'body1'}>ReactJs, NextJs, MaterialUI, CSS3, HTML,
                                                Javascript,
                                                GraphQL,
                                                Apollo, MongoDB, Framer Motion</Typography>
                                        </Stack>
                                    </motion.div>
                                    <motion.div key={3} variants={itemElement}>
                                        <Stack direction={'column'} p={1}>
                                            <Typography variant={'h6'}>Tools i use</Typography>
                                            <Typography variant={'body1'}>JetBrains WebStorm, GitHub, Docker, Adobe
                                                Photoshop,
                                                Adobe
                                                Illustrator</Typography>
                                        </Stack>
                                    </motion.div>
                                </Stack>
                            </Stack>

                        </Box>
                    </Container>
                </LayoutGroup>
            </AnimatePresence>
        </motion.div>
    );
}

export default Home
