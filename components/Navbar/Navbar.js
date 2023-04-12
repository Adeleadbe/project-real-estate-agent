import React from 'react'
import Link from 'next/link'
import styles from './Navbar.module.css'

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <strong>Bryan Marlin</strong>
      <div className='navbar_link'>
        <Link href="/about">A propos de moi</Link>
        <Link href="/story">Leurs histoires</Link>
        <Link href="/video">Vidéos</Link>
        <Link href="/news/article">Actualités</Link>
        <Link href="/offer">Mes offres</Link>
        <Link href="/partner">Mes partenaires</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  )
}
