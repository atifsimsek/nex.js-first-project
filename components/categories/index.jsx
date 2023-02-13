import Link from 'next/link'
import React from 'react'
import styles from "./categories.module.css"

const Categories = ({ categories }) => {
    return (
        <div className={styles.categories}>
            {
                categories.map((category) => {
                    return (
                        <Link
                            key={category.id}
                            className={styles.category}
                            href={`/${category.id}`}>
                            <div className={styles.name}>{category.name}</div>
                        </Link>
                    )
                })
            }

        </div>
    )
}

export default Categories