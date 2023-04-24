import Link from "next/link";
import Image from "next/image";
import pictureBryan from "../public/assets/pictureBryan.jpg"
import Head from "next/head";

export default function Home() {
    return (
        <>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <title>Bryan Marlin, agent immobilier à Dijon</title>
            </Head>
            <div className="main">
                <div className="home_text">
                    <div className="home_text_presentation">
                        <h1>Faites confiance à Bryan Marlin</h1>
                        <h2>L&apos;agent immobilier qui vous accompagne dans tous vos projets</h2>
                    </div>
                    <div className="home_text_quote">
                        <blockquote>“Les raisons de vente ont des similitudes, <br />
                        chacune dispose d&apos;une histoire unique qui la différencie des autres”</blockquote>
                    </div>
                </div>
                <Image 
                    className="home_picture" 
                    src={pictureBryan} 
                    alt="l'agent immobilier Bryan Marlin" 
                    width="440"
                    height="660" />
            </div>
        </>
    );
}
