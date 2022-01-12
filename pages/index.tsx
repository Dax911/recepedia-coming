import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div>
    <header id="nav" className="sticky-nav">
      <nav className="w-container">
        <ul role="list" className="nav-grid w-list-unstyled">
          <li id="w-node-_9a19fec4-b2d7-9f81-c396-58df35576d69-17e343fd" />
          <li>
            <a href="#" className="nav-link">Home</a>
          </li>
          <li>
            <a href="#" className="nav-link">Mint</a>
          </li>
          <li>
            <a href="#" className="button-2 w-button">Connect Wallet</a>
          </li>
        </ul>
      </nav>
    </header>
    <header id="hero-overlay" className="hero-overlay wf-section">
      <div className="centered-container w-container">
        <h1 className="heading">Mint a Chef Mabel Profile Pic</h1>
        <p className="paragraph">The Chef Mabel profile pic is a generative art collection by @PINKCATDAILY with a total of 8,888 NFTs. By minting a Chef Mabel NFT, the owner is entitled to The Recepedia co-op. 2% of all Recepedia sales are redistributed to holders relative to their NFT count. The Recepedia NFT&nbsp;marketplace is currently under develop and will be available in beta before the end of Q1.</p>
        <div>
          <div className="rich-text-block w-richtext">
            <h2>Round 1: 2,222</h2>
            <p>Pre-reveal. Owners will gain beta access and direct input into the MVP&nbsp;functionality</p>
            <p>of The Recepedia,kitchen banner NFT airdrop, and ingredients NFT airdrop.</p>
            <p>‍<br /></p>
            <p>‍<br /></p>
            <p>‍</p>
          </div>
        </div>
        <div className="w-form">
          <form id="email-form" name="email-form" data-name="Email Form" method="get" className="form"><label htmlFor="field">0.05 ETH <br /></label><input type="text" className="text-field w-input" maxLength={256} name="field" data-name placeholder="qty" id="field" /><input type="submit" defaultValue="Submit" data-wait="Please wait..." className="button-2 w-button" /></form>
          <div className="w-form-done">
            <div>Thank you! Your submission has been received!</div>
          </div>
          <div className="w-form-fail">
            <div>Oops! Something went wrong while submitting the form.</div>
          </div>
        </div>
      </div>
    </header>
    <footer id="footer" className="footer wf-section">
      <div className="w-container">
        <div className="footer-flex-container">
          <div className="div-block">
            <h2 className="footer-heading">The Pantry</h2>
            <ul role="list" className="w-list-unstyled">
              <li>
                <a href="#" className="footer-link">White Pepper</a>
              </li>
              <li>
                <a href="#" className="footer-link">About Us</a>
              </li>
              <li>
                <a href="#" className="footer-link">Mint</a>
              </li>
            </ul>
          </div>
        </div>
        <div>Copyright © 2020 My Company. All rights reserved.</div>
      </div>
    </footer>
  </div>
  )
}

export default Home
