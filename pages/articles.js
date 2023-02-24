import Link from "next/link";
import Head from "next/head";

import Layout from "../components/layout";


function Articles() {
    return (
        <Layout>
            <Head>
                <title>Articles</title>
            </Head>
            
            <h1>Articles</h1>

            <br />
            <br />
            <br />

            <Link href="/articles/facility_location">Facility Location</Link>
            
        </Layout>
    );
}

export default Articles;
