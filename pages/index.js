import Head from 'next/head';
import Image from 'next/image';
import Layout from '../components/layout';
import utilStyles from '../styles/utils.module.css';


const name = "Lee Yi Heng";
export const siteTitle = "Website";

// https://nextjs.org/learn/basics/create-nextjs-app
export default function Home() {
  return (
    <Layout home={true}>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd} style={{textAlign: "center"}}>
        <Image
          priority
          src="/images/pfp.jpg"
          className={utilStyles.borderCircle}
          height={512}
          width={384}
          alt=""
        />
        <h1 className={utilStyles.heading2Xl}>{name}</h1>
        <p>Welcome...</p>
        <p>This looks like the tutorial for Next.js...because it is.
        </p>
      </section>
    </Layout>
  );
}
