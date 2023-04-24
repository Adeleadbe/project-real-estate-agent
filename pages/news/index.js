import React from 'react'
import Link from 'next/link'

export default function index() {
  return (
    <div>
      <h1>Les actualités</h1>
      <Link href={`/news/les nouvelles lois immobillières`}>
        Les nouvelles lois
      </Link>
    </div>
  )
}
