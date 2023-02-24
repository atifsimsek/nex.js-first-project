"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { FaPlayCircle } from "react-icons/fa"
import styles from "./header.module.css"



const Header = () => {
  const pathname = usePathname()

  console.log(pathname)


  return (
    <header className={styles.header}>
      <div className={styles.headerWrapper}>
        <Link className={styles.logo} href="/">
          <FaPlayCircle />NETFILMS
        </Link>

        <nav className={styles.navigationMenu} >

          <Link className={`${styles.link}${pathname === "/" ? ` ${styles.active}` : ""}`} href="/">Movies</Link>
          <Link  className={`${styles.link}${pathname === "/series" ? ` ${styles.active}` : ""}`}   href="/series">Series</Link>
          <Link  className={`${styles.link}${pathname === "/profile" ? ` ${styles.active}` : ""}`} href="/profile">Profile</Link>

        </nav>
      </div>
    </header >
  )
}

export default Header