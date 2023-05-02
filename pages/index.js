import pictureBryan from "@/public/assets/pictureBryan.png"
import Head from "next/head";
import Header from "@/components/Header/Header";
import About from "@/components/About/About";
import Statistics from "@/components/Statistics/Statistics";

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
                <About title={"Mon histoire"} image={pictureBryan} text1={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et arcu ut magna aliquet lacinia. Sed non varius neque. Curabitur nunc elit, laoreet sed fringilla Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et arcu ut magnaquis, aliquam eu lacus. Quisque quis turpis nec odio tincidunt aliquam sed id nunc. Aliquam sagittis ligula ut tincidunt fringilla. Integer commodo ac justo vitae rutrum. Fusce sodales congue augue, at fringilla lacus commodo at."} text2={"Vestibulum posuere sem sem, et pulvinar nunc varius sed. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et arcu ut magna Aliquam mollis diam ac blandit sollicitudin. Nam fringilla sem id eros volutpat, sit amet iaculis velit fermentum. Duis egestas risus felis, nec ultrices ipsum lacinia id. Etiam pharetra, ligula interdum feugiat fermentum, sem risus sagittis ante. Sed ultricies nibh ut lacus pharetra tincidunt. In hac habitasse platea dictumst."}/>            
                <Statistics />
            </div>
        </>
    );
}
