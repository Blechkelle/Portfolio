import * as React from 'react';
import Meta from "../src/components/meta";
import Home from "../src/components/home/home";
import Footer from "../src/components/footer/footer";
import References from "../src/components/references/references";
import Hello from "../src/components/hello/hello";

export default function Index() {
    return (
        <>
            <Meta/>
            <Hello/>
            <References/>
            {/*
            <Home/>
            <References/>
            */}

            {/*<Footer/>*/}
        </>
    );
}
