import styles from "./references.module.css"
import {Box, Grid, Stack, Tooltip} from "@mui/material";
import Container from "@mui/material/Container";

import anyplace1 from '../../../public/images/references/anyplace_1.png'
import adlatus1 from '../../../public/images/references/adlatus_1.png'
import adlatus2 from '../../../public/images/references/adlatus_2.png'
import alexxium1 from '../../../public/images/references/alexxium_1.png'
import alexxium2 from '../../../public/images/references/alexxium_2.png'
import alexxium3 from '../../../public/images/references/alexxium_3.png'
import astcamper1 from '../../../public/images/references/ast_camper_1.png'
import astcamper2 from '../../../public/images/references/ast_camper_2.png'
import astcamper3 from '../../../public/images/references/ast_camper_3.png'
import c4f1 from '../../../public/images/references/c4f_1.png'
import c4f2 from '../../../public/images/references/c4f_2.png'
import poolwunsch1 from '../../../public/images/references/poolwunsch_1.jpg'
import poolwunsch2 from '../../../public/images/references/poolwunsch_2.jpg'
import poolwunsch3 from '../../../public/images/references/poolwunsch_3.png'
import poolwunsch4 from '../../../public/images/references/poolwunsch_4.jpg'
import Typography from "@mui/material/Typography";
import {FaNodeJs, FaReact} from "react-icons/fa";
import {SiAdobe, SiApollographql, SiNextdotjs} from "react-icons/si";
import Link from "next/link";

const References = () => {

    const references = [
        {
            title: "ALEXXIUM Personal GmbH",
            website: "https://alexxium-personal.de",
            images: [
                alexxium1.src,
                alexxium2.src,
                alexxium3.src
            ],
            tools: [
                <Tooltip key={1} title="ReactJS" placement="top">
                    <Typography variant={'h6'} color={'#ffffff'}>
                        <FaReact/>
                    </Typography>
                </Tooltip>,
                <Tooltip key={2} title="NextJS" placement="top">
                    <Typography variant={'h6'} color={'#ffffff'}>
                        <SiNextdotjs/>
                    </Typography>
                </Tooltip>,
                <Tooltip key={3} title="NodeJS" placement="top">
                    <Typography variant={'h6'} color={'#ffffff'}>
                        <FaNodeJs/>
                    </Typography>
                </Tooltip>,
                <Tooltip key={4} title="Apollo GraphQL" placement="top">
                    <Typography variant={'h6'} color={'#ffffff'}>
                        <SiApollographql/>
                    </Typography>
                </Tooltip>,
                <Tooltip key={5} title="Adobe" placement="top">
                    <Typography variant={'h6'} color={'#ffffff'}>
                        <SiAdobe/>
                    </Typography>
                </Tooltip>
            ],
            description: (
                <Stack px={2} direction={'column'} spacing={1}>
                    <Typography color={'#ffffff'} variant={'body1'}>
                        Multipage Website, Logo, Advertisements, Contact API, Full Stack CMS
                    </Typography>
                </Stack>
            )
        },
        {
            title: "ADLATUS Dienstleistung GmbH",
            website: "https://adlatus-dienstleistung.de",
            images: [
                adlatus1.src,
                adlatus2.src
            ],
            tools: [
                <Tooltip key={6} title="NextJS" placement="top">
                    <Typography variant={'h6'} color={'#ffffff'}>
                        <SiNextdotjs/>
                    </Typography>
                </Tooltip>,
                <Tooltip key={7} title="NodeJS" placement="top">
                    <Typography variant={'h6'} color={'#ffffff'}>
                        <FaNodeJs/>
                    </Typography>
                </Tooltip>,
                <Tooltip key={8} title="Adobe" placement="top">
                    <Typography variant={'h6'} color={'#ffffff'}>
                        <SiAdobe/>
                    </Typography>
                </Tooltip>
            ],
            description: (
                <Stack px={2} direction={'column'} spacing={1}>
                    <Typography color={'#ffffff'} variant={'body1'}>
                        Onepage Website, Logo Remake, Contact API
                    </Typography>
                </Stack>
            )
        },
        {
            title: "AnyPlace 360 Grad Touren",
            website: "https://any-place.de",
            images: [
                anyplace1.src
            ],
            tools: [
                <Tooltip key={9} title="NextJS" placement="top">
                    <Typography variant={'h6'} color={'#ffffff'}>
                        <SiNextdotjs/>
                    </Typography>
                </Tooltip>,
                <Tooltip key={10} title="NodeJS" placement="top">
                    <Typography variant={'h6'} color={'#ffffff'}>
                        <FaNodeJs/>
                    </Typography>
                </Tooltip>,
                <Tooltip key={11} title="Adobe" placement="top">
                    <Typography variant={'h6'} color={'#ffffff'}>
                        <SiAdobe/>
                    </Typography>
                </Tooltip>
            ],
            description: (
                <Stack px={2} direction={'column'} spacing={1}>
                    <Typography color={'#ffffff'} variant={'body1'}>
                        Multipage Website, Logo, Advertisements, Print Media, Contact API
                    </Typography>
                </Stack>
            )
        },
        {
            title: "PBR Poolwunsch GmbH",
            website: "https://poolwunsch.any-place.de",
            images: [
                poolwunsch1.src,
                poolwunsch2.src,
                poolwunsch3.src,
                poolwunsch4.src
            ],
            tools: [
                <Tooltip key={12} title="ReactJS" placement="top">
                    <Typography variant={'h6'} color={'#ffffff'}>
                        <FaReact/>
                    </Typography>
                </Tooltip>,
                <Tooltip key={13} title="NextJS" placement="top">
                    <Typography variant={'h6'} color={'#ffffff'}>
                        <SiNextdotjs/>
                    </Typography>
                </Tooltip>,
                <Tooltip key={14} title="NodeJS" placement="top">
                    <Typography variant={'h6'} color={'#ffffff'}>
                        <FaNodeJs/>
                    </Typography>
                </Tooltip>,
                <Tooltip key={15} title="Apollo GraphQL" placement="top">
                    <Typography variant={'h6'} color={'#ffffff'}>
                        <SiApollographql/>
                    </Typography>
                </Tooltip>,
                <Tooltip key={16} title="Adobe" placement="top">
                    <Typography variant={'h6'} color={'#ffffff'}>
                        <SiAdobe/>
                    </Typography>
                </Tooltip>
            ],
            description: (
                <Stack px={2} direction={'column'} spacing={1}>
                    <Typography color={'#ffffff'} variant={'body1'}>
                        Multipage Website, Logo, Advertisements, Print Media, Contact API, Full Stack CMS
                    </Typography>
                </Stack>
            )
        },
        {
            title: "AST Camper GmbH",
            website: "https://ast-camper.de",
            images: [
                astcamper1.src,
                astcamper2.src,
                astcamper3.src
            ],
            tools: [
                <Tooltip key={17} title="NextJS" placement="top">
                    <Typography variant={'h6'} color={'#ffffff'}>
                        <SiNextdotjs/>
                    </Typography>
                </Tooltip>,
                <Tooltip key={18} title="NodeJS" placement="top">
                    <Typography variant={'h6'} color={'#ffffff'}>
                        <FaNodeJs/>
                    </Typography>
                </Tooltip>,
                <Tooltip key={19} title="Adobe" placement="top">
                    <Typography variant={'h6'} color={'#ffffff'}>
                        <SiAdobe/>
                    </Typography>
                </Tooltip>
            ],
            description: (
                <Stack px={2} direction={'column'} spacing={1}>
                    <Typography color={'#ffffff'} variant={'body1'}>
                        Onepage Website, Logo Remake, Advertisements, Social Media Posts, Contact API
                    </Typography>
                </Stack>
            )
        },
        {
            title: "Car4Fun Autovermietung Konzept",
            images: [
                c4f1.src,
                c4f2.src
            ],
            tools: [
                <Tooltip key={20} title="ReactJS" placement="top">
                    <Typography variant={'h6'} color={'#ffffff'}>
                        <FaReact/>
                    </Typography>
                </Tooltip>,
                <Tooltip key={21} title="NextJS" placement="top">
                    <Typography variant={'h6'} color={'#ffffff'}>
                        <SiNextdotjs/>
                    </Typography>
                </Tooltip>,
                <Tooltip key={22} title="NodeJS" placement="top">
                    <Typography variant={'h6'} color={'#ffffff'}>
                        <FaNodeJs/>
                    </Typography>
                </Tooltip>,
                <Tooltip key={23} title="Apollo GraphQL" placement="top">
                    <Typography variant={'h6'} color={'#ffffff'}>
                        <SiApollographql/>
                    </Typography>
                </Tooltip>,
                <Tooltip key={24} title="Adobe" placement="top">
                    <Typography variant={'h6'} color={'#ffffff'}>
                        <SiAdobe/>
                    </Typography>
                </Tooltip>
            ],
            description: (
                <Stack px={2} direction={'column'} spacing={1}>
                    <Typography color={'#ffffff'} variant={'body1'}>
                        Multipage Website, Logo, Contact API, Custom CMS
                    </Typography>
                </Stack>
            )
        }
    ]

    const renderReferenceImages = () => {
        function shuffle(a) {
            for (let i = a.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [a[i], a[j]] = [a[j], a[i]];
            }
            return a;
        }

        return (
            <Grid container spacing={0}>
                {shuffle(references).map(reference => (
                    reference.images.map((image, index) => (
                        <Grid item xs={4} md={4} key={index}>
                            <Box
                                className={styles.referenceCard}
                                style={{
                                    backgroundImage: 'url(' + image + ')',
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    backgroundRepeat: 'no-repeat',
                                    filter: 'saturate(1)'
                                }}>
                            </Box>
                        </Grid>
                    ))
                ))}
            </Grid>
        )
    }

    const renderReferences = () => {
        return references.map((reference, index) => (
            <Stack direction={'column'} spacing={1} key={index}>
                <Stack px={2} direction={'row'} spacing={1} justifyContent={'space-between'}
                       alignItems={'center'}>
                    <Typography variant={'h5'} color={'#ffffff'}>{reference.title}</Typography>
                    <Stack direction={'row'} spacing={1}>
                        {reference.tools.map((tool) => (
                            tool
                        ))}
                    </Stack>
                </Stack>
                {reference.description}
                {reference.website &&
                    <Box px={2}>
                        <Stack direction={'row'} spacing={1}>
                            <Typography variant={'body1'} color={'#ffffff'}>Website:</Typography>
                            <Typography variant={'body1'} color={'#57c7ea'}>
                                <Link href={reference.website}>{reference.website}</Link>
                            </Typography>
                        </Stack>
                    </Box>}
            </Stack>
        ))
    }

    return (
        <Box className={styles.referencesWrapper}>
            <Box py={15} className={styles.referenceListWrapper} display={'flex'} alignItems={'center'}
                 justifyContent={'center'}>
                <Container maxWidth={'md'}>
                    <Stack direction={'column'} spacing={5} divider={<Box className={styles.divider}/>}>
                        {renderReferences()}
                    </Stack>
                </Container>
            </Box>
            <Box className={styles.referencesOverlay}>
                {renderReferenceImages()}
            </Box>
        </Box>
    )
}

export default References