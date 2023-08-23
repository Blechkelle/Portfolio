import Head from "next/head";

const Meta = ({title, keywords, description, ogSiteName, ogType, ogUrl, ogImage}) => {
    return (<Head>
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        <meta name="keywords" content={keywords}></meta>
        <meta name="description" content={description}></meta>

        {/* Open Graph Meta Tags START */}
        <meta property="og:title" content={`${title}`}/>
        <meta property="og:site_name" content={ogSiteName}/>
        <meta property="og:type" content={ogType}/>
        <meta property="og:description" content={description}/>
        <meta property="og:url" content={ogUrl}/>
        <meta property="og:image" content={ogImage}/>
        {/* Open Graph Meta Tags END */}

        {/* Twitter Meta Tags START */}
        <meta name="twitter:card" content="summary_large_image"/>
        {/*
            <meta name="twitter:site" content="<Hier kommt der @Twitteraccount hin>"/>
            <meta name="twitter:creator" content="<Hier kann ein separater Autorenaccount angegeben werden>"/>
            */}
        <meta name="twitter:url" content={ogUrl}/>
        <meta name="twitter:title" content={title}/>
        <meta name="twitter:description" content={description}/>
        <meta name="twitter:image" content={ogImage}/>
        {/* Twitter Meta Tags END */}

        <meta charSet="utf-8"></meta>
        <link rel="icon" href="../../favicon.ico"></link>
        <title>{`${title}`}</title>
    </Head>);
}
Meta.defaultProps = {
    title: "Hi, im Jeff!",
    keywords: "Berufliche Werke, Leistungen, Projekte, Fähigkeiten, Kreatives Schaffen, Arbeiten, Design, Karriereentwicklung, Fortschritt, Wachstum, Vielseitigkeit, Breites Spektrum, Fachgebiete, Referenzen, Empfehlungen, Bewertungen, Selbstpräsentation, Selbstdarstellung, Image, Arbeitsproben, Beispielarbeiten, Demonstration, Innovationsgeist, Neuartigkeit, Originalität, Projekthistorie, Erfahrungsschatz, Hintergrund, Technische Fertigkeiten, Kompetenzen, Expertise, Kollaborationen, Teamarbeit, Partnerprojekte, Präsentationsfertigkeiten, Kommunikation, Rhetorik, Zielsetzungen, Meilensteine, Erfolge, Zeitmanagement, Effizienz, Organisationstalent, Branchenkenntnisse, Marktverständnis, Trends",
    description: "Ich bin sehr erfahren im Umgang mit React, NextJS, CSS3 und HTML und kann Ihnen durch meine Erfahrung und meine Stärken in diesen Bereichen einen großen Mehrwert bieten. Ich bin in der Lage, komplexe Frontend-Projekte zu entwickeln und umzusetzen, die hohe Anforderungen an die Nutzererfahrung und Benutzerfreundlichkeit erfüllen.",
    ogSiteName: "Hi, im Jeff!",
    ogType: "Website",
    ogUrl: "https://thejeff.dev/",
}
export default Meta;
