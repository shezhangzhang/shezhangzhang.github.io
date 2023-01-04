import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

const name = "Shezhangzhang";
export const siteTitle = "Shezhangzhang";

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              src="/images/shezhang.jpeg"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt={name}
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
            <article>
              <p>
                Hi, Shezhangzhang is my little cat. She is a British Shorthair
                Cat. In order to communicate with her, I started to learn
                English.
              </p>
              <p>
                I'm a front-end software engineer based in China. And I'd like
                to share some Chinese culture, songs, learning Chinese, etc...
              </p>
              <p>
                You can correct me and communicate on{" "}
                <a
                  href="https://github.com/shezhangzhang/shezhangzhang.github.io/issues"
                  target="_blank"
                >
                  Github.
                </a>{" "}
                And this is my{" "}
                <a href="https://twitter.com/chenkankk" target="_blank">
                  Twitter.
                </a>
              </p>
            </article>
          </>
        ) : (
          <>
            <Link href="/">
              <Image
                priority
                src="/images/shezhang.jpeg"
                className={utilStyles.borderCircle}
                height={108}
                width={108}
                alt={name}
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
          <Link href="/">Communicate on Github →</Link>
        </div>
      )}
    </div>
  );
}
