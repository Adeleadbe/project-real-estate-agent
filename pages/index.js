import pictureBryan from "../public/assets/pictureBryan.jpg"
import Head from "next/head";
import Header from "../components/Header/Header";
import About from "@/components/About/About";

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
            <div className="home">
                <Header image={pictureBryan} />    
                <About />            
            </div>
        </>
    );
}
