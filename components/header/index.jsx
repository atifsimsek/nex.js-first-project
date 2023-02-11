import Link from 'next/link'
import React from 'react'
import { FaPlayCircle } from "react-icons/fa"
import styles from "./header.module.css"

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerWrapper}>
        <Link className={styles.logo} href="/">
          <FaPlayCircle/>NETFILMS
        </Link>

        <nav className={styles.navgiationMenu}>
          <Link href="/deneme">Movies</Link>
          <Link href="/">Series</Link>
          <Link href="/">Kids</Link>
        </nav>
      </div>
    </header>
  )
}

export default Header