import * as React from 'react';
import {Box, Stack} from "@mui/material";
import Typography from "@mui/material/Typography";
import {motion} from "framer-motion";
import {itemElement} from "../../framer";
import Container from "@mui/material/Container";

const Home = () => {

    return (
        <Box style={{backgroundColor: "#000000", color: '#ffffff'}}>
            <Container maxWidth={'sm'}>


                <Stack direction={'column'} spacing={2} pb={15}>
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
            </Container>
        </Box>
    );
}

export default Home
