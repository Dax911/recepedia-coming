import React from "react";
import { Nav, Button } from "react-bootstrap";
import Link from "next/link";

export default function Navbar() {
  return (
      <div className="container-xl">
        <div className="collapse navbar-collapse" id="navbarsExample07XL">
          <ul className="mr-auto navbar-nav">
            <li className="nav-item active">
              <Link href="/">
                <a className="nav-link ">
                  Home <span className="sr-only"></span>
                </a>
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
  );
}
