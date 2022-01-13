import React from 'react'
import { Nav, Button } from 'react-bootstrap';
import Link from 'next/link'

export default function Navbar() {
  return (
    <Nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-xl">

    <button className="btn btn-primary" type="button" data-toggle="collapse" data-target="#navbarsExample07XL" aria-controls="navbarsExample07XL" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarsExample07XL">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <Link href="/">
            <a className="nav-link ">Home <span className="sr-only"></span></a>
          </Link>
        </li>

<li className="nav-item">
          <Link href="/main">
            <a className="nav-link">Mint</a>
          </Link>
        </li>

        <li className="nav-item">
          <Link href="https://discord.gg/SaGzuzPMzt">
            <a className="nav-link">Discord</a>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="https://docs.google.com/document/d/14T3dpynJfg6QI7wMOLs7fIS5LfhYPEZbhNyJksgd4zU/edit?usp=sharing">
            <a className="nav-link">White Paper</a>
          </Link>
        </li>
      </ul>
    </div>
  </div>
</Nav>
  )
}
