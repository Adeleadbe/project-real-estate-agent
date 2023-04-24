import '@/styles/main.scss'
import Container from '@/components/Container/Container'
import { Kaisei_HarunoUmi } from "next/font/google"

const KaiseiHarunoUmi = Kaisei_HarunoUmi({
  subsets: ['latin'],
  weight: ['400', '500', '700']
})

export default function App({ Component, pageProps }) {
  return (
    <main className={KaiseiHarunoUmi.className}>
      <Container>
          <Component {...pageProps} />
      </Container>
    </main>
  )
}


