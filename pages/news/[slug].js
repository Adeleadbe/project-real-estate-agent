import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

export default function News() {
  const router = useRouter();

  return (
    <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>{router.query.slug}</title>
    </Head>
    <div>
        <h1>Les nouvelles lois immobilières</h1>
    </div>
    </>
  )
}
