import Image from "next/image";

export default function About({ title, text1, text2, image }) {
    return (
        <div className="about">
            <div className="about__story">
                <h2>{title}</h2>
                <p>{text1}</p>
                <p>{text2}</p>
            </div>
            <div className="about__background">
                <div className="about__picture">
                <Image
                    src={image}
                    alt="l'agent immobilier Bryan Marlin"
                    width="400"
                    height="600"
                    style={{
                        maxWidth: "100%",
                        height: "auto"
                    }} />
                </div>
            </div>
        </div>
    );
}
