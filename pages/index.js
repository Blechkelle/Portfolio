import * as React from 'react';
import Meta from "../src/components/meta";
import Home from "../src/components/home/home";
import Footer from "../src/components/footer/footer";
import References from "../src/components/references/references";

export default function Index() {
    return (
        <>
            <Meta/>
            <Home/>
            <References/>
            {/*<Footer/>*/}
        </>
    );
}
