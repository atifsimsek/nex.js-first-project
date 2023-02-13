import React from 'react'
import styles from "./featuredMovie.module.css"
import { FaPlus } from "react-icons/fa"
import Link from 'next/link'
import Image from 'next/image'

const FeaturedMovie = ({ movie = {}, isCompact = true }) => {

  const { poster_path, title, overview } = movie
  return (
    <div className={styles.movieWrapper}>
      <h1 className={styles.movieTitle}>{title}</h1>
      <p className={`${styles.overview} ${isCompact ? styles.shortOverview : ""} `}>
        {overview}
      </p>
      <div className={styles.actionButtons}>
        <Link className={styles.playButton} href={`/movie/${movie.id}`}>Play</Link>
        <button className={styles.addButton}><FaPlus /></button>
      </div>
      <div className={styles.moviePoster}>
        <div className={styles.moviePosterOverlay}></div>
        <Image
          unoptimized
          src={`https://image.tmdb.org/t/p/original${poster_path}`}
          alt={title}
          fill
        ></Image>
      </div>
    </div>
  )
}

export default FeaturedMovie