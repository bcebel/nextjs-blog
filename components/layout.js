import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

const name = "Brian Ebel";
export const siteTitle = "Brian Ebel's Portfolio";

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon2.ico" />
        <meta
          name="Brian Ebel"
          content="Web Developer, Software Engineer, and Solutions Architect"
        />
        <meta
          property="og:image"
          content={`https://nextjs-blog-beige-phi-95.vercel.app/favicon.ico?theme=light&md=0&fontSize=75px&images=https://nextjs-blog-beige-phi-95.vercel.app/favicon.ico`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              src="/images/profile.jpg"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt=""
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
            <h3>Web Developer, Software Engineer, and Solutions Architect</h3>
            <h3 className="things">
              <a href="mailto:bcebel@gmail.com">bcebel@gmail.com</a>
            </h3>
            <a href="tel:4056500063">(405)650-0063</a>
          </>
        ) : (
          <>
            <Link href="/">
              <Image
                priority
                src="/images/profile.jpg"
                className={utilStyles.borderCircle}
                height={108}
                width={108}
                alt=""
              />
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/" className={utilStyles.colorInherit}>
                {name}
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">← Back to home</Link>
        </div>
      )}
    </div>
  );
}
