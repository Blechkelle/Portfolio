import * as React from 'react';
import Meta from "../src/components/meta";
import Header from "../src/components/header";
import Footer from "../src/components/footer";
import {Box} from "@mui/material";
import Imprint from "../src/components/imprint/imprint";
import Layout from "../src/components/layout";

export default function Features() {
    return (
        <>
            <Meta
                title={'Impressum'}
                keywords={'impressum, rechtliches, verantwortlich für Inhalte'}
                description={'Verantwortlich für den Inhalt (gem. § 55 Abs. 2 RStV)'}
                ogSiteName={'Impressum'}
                ogUrl={'https://thejeff.dev/impressum'}
            />
            <Layout>
                <Box>
                    <Imprint/>
                </Box>
            </Layout>
            <Footer/>
        </>
    );
}
