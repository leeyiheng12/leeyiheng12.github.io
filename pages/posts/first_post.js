import Link from "next/link";
import Head from "next/head";
import Script from "next/script";

import Layout from "../../components/layout";


function FirstPost() {
    return (
        <Layout>
            <Head>
                <title>First Post</title>
            </Head>
            <Script 
                src="https://code.jquery.com/jquery-3.6.0.min.js"
                strategy="lazyOnload"
                onLoad={
                    () => {
                        console.log("jQuery loaded");
                    }
                }
            />
            <h1>First Post</h1>
            <h2>
                <Link href="/">
                    Back home
                </Link>
            </h2>
        </Layout>
    );
}

export default FirstPost;
