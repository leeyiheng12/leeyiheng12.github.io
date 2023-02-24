import Head from "next/head";

import Layout from "../../components/layout";

import TextContent from "../../components/TextContent";


function About() {
    return (
        <Layout>
            <Head>
                <title>Facility Location</title>
            </Head>
            
            <h1>Facility Location</h1>

            <TextContent>
                Hi
            </TextContent>
            
        </Layout>
    );
}

export default About;
