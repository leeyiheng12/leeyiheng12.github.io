import Link from "next/link";
import Head from "next/head";

import Layout from "../components/layout";
import utilStyles from '../styles/utils.module.css';


function About() {
    return (
        <Layout home={false}>
            <Head>
                <title>About</title>
            </Head>
            
            <h1 className={utilStyles.heading2Xl}>What is this?</h1>

            <p>
                Decided to create a website so that I can do whatever I want with it.
            </p>

            <p>
                For the most part, I'm going to post random stuff that I've read/learnt/seen before,
                to act as a record for myself, and to share with whoever is reading, which is probably nobody.
            </p>
            
        </Layout>
    );
}

export default About;
