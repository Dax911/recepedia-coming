import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import BG from "../src/assets/images/BG1.jpeg";
import Navbar from "../src/components/header";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Recepedia</title>
        <meta
          name="description"
          content="Cooking up the next generation of web3 culinary technology."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Navbar />
        <div className={styles.hero}>
          <h1 className={styles.title} style={{ color: "white" }}>
            Recepedia
          </h1>

          <div>
            <p className={styles.description} style={{ color: "white" }}>
              The Chef Mabel profile pic is a generative art collection by
              <a href="https://www.twitter.com/pinkcatdaily">
                {" "}
                @PINKCATDAILY{" "}
              </a>{" "}
              with a total of 8,888 NFTs. By minting a Chef Mabel NFT, the owner
              is entitled to The Recepedia co-op. 2% of all Recepedia sales are
              redistributed to holders relative to their NFT count. The
              Recepedia NFT marketplace is currently under develop and will be
              available in beta before the end of Q1.
            </p>
          </div>
          <button className={styles.button} style={{ alignSelf: "right" }}>
            Mint Coming Soon
          </button>
        </div>

        <p className={styles.description}>
          <h2>Meet the Team</h2>
          <p>
            We are a doxxed team of developers, cooking enthusiasts, pet lovers
            and web3 pros who are committed to making this the most innovative
            and streamlined user experience for creators and end users in the
            online cooking industry.
          </p>
        </p>

        <div className={styles.grid}>
          <a
            href="https://twitter.com/cryptonia_d69"
            className={styles.card}
          >
            <h2>Chef Mabel &rarr;</h2>
            <p>
              Chef Drue is a battle-hardened, Bay Area, tech queen with a
              passion for cooking and bringing lean startup principles into the
              Web3 eco-system. Emily is a builder first, with 8 years experience
              bringing new products to life. Including some, eh.. Spicy 🌶 NFTs.
            </p>
          </a>

          <a
            href="https://www.twitter.com/haydenaylor"
            className={styles.card}
          >
            <h2>Chef Dax &rarr;</h2>
            <p>
              Dax, our resident Engineer and co-founder, was also forged in the
              fires of Silicon Valley. Three core values drive him: Delivering
              value, writing high quality, well documented code, and finding
              unique use cases for web3 technology. He’s an experienced full
              stack developer who dabbles in open source and indie game
              development.
            </p>
          </a>

          <a
            href="https://www.twitter.com/pinkcatdaily"
            className={styles.card}
          >
            <h2>Pastry Chef Saba&rarr;</h2>
            <p>
              Saba is an artist that has been featured in the LA Times and comes
              with a huge instagram following. Playfulness is an artform, and it
              is vibrantly expressed in her unique and whimsical caricatures
              that make up the Mabel NFT collection.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Home;
