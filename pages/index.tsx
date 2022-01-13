import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import BG from "../src/assets/images/BG1.jpeg"

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
        <div className={styles.hero}>
        <h1 className={styles.title} style={{ color: 'white' }}>Mint a Chef Mabel Profile Picture</h1>

        <div>
        <p className={styles.description} style={{ color: 'white' }}>
          The Chef Mabel profile pic is a generative art collection by
          <a href="https://www.twitter.com/pinkcatdaily">@PINKCATDAILY</a> with
          a total of 8,888 NFTs. By minting a Chef Mabel NFT, the owner is
          entitled to The Recepedia co-op. 2% of all Recepedia sales are
          redistributed to holders relative to their NFT count. The Recepedia
          NFT marketplace is currently under develop and will be available in
          beta before the end of Q1.

      </p>
        </div>
        <button className={styles.button}>Mint Coming Soon</button>

        </div>

        <p className={styles.description}>
          <h2>Round 1</h2>
          <h3>Mint 2,222</h3>
          <p>
            Owners wiill gain beta access and direct input into MVP
            fucntionality of the Recepedia marketplace/services, kitchen banner
            NFT airdrop, and ingredients NFT airdrop.
          </p>
        </p>

        <div className={styles.grid}>
          <a
            href="https://medium.com/geekculture/a-beginners-guide-to-understanding-pfp-nfts-8714e9d30d0b"
            className={styles.card}
          >
            <h2>Importance of PFPs &rarr;</h2>
            <p>
              The pseudo-anonymity provided by our pfp’s will allow them to
              share great food-related content, generate revenue from sharing
              recipes, and participate in metaverse cooking competitions without
              having to plaster their image all over the web.
            </p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Marketplace Integration &rarr;</h2>
            <p>
              The primary use case for Chef Mabel NFT’s is for creating a brand
              identity in the Recepedia Marketplace. Here, creators will mint,
              sell & generate income from the recipes and cooking related
              content that they share.
            </p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>White Paper &rarr;</h2>
            <p>
              Interested in learning more about Recepedia and the team? Check out our white paper and technical solutions.
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
