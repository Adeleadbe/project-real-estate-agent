import React from 'react'
import Link from 'next/link'


export default function Navbar() {
  return (
    <nav className="navbar">
      <Link href="/"><strong>Bryan Marlin</strong></Link>
      <div className='navbar_link'>
        <Link href="/story">Leurs histoires</Link>
        <Link href="/video">Vidéos</Link>
        <Link href="/news">Actualités</Link>
        <Link href="/offer">Mes offres</Link>
        <Link href="/partner">Mes partenaires</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  )
}
