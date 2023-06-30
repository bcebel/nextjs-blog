import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}


export default function Home({ allPostsData}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>

        <h4>
          Click on the title for a description of the project or click on the
          image to go directly to the project.
        </h4>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title, url, photoID }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title} - More Info</Link>
              <br />

              <a className="things" href={url}>
                <img
                  src={`https://drive.google.com/uc?id=${photoID}`}
                  width={400}
                />
              </a>

              <br />
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}