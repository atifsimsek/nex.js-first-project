import Link from 'next/link'
import React from 'react'
import styles from "./footer.module.css"
const Footer = () => {
  return (
    <footer className={styles.footer}>
      Made with 111 by&nbsp;
      <Link href="/">
      Atıf Şimşek
      </Link>

    </footer>
  )
}

export default Footer