import React from 'react'
import { useRouter } from 'next/router'

export default function News() {

  const router = useRouter()

  console.log(router.route);
  console.log(router.asPath);
  console.log(router.query);

  return (
    <div>
        <h1>Nouveaux DPE</h1>
    </div>
  )
}
