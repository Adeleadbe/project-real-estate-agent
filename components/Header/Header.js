import Image from "next/image"

export default function Header({ image }) {
  return <>
  <div className="header">
      <div className="header__text">
          <div className="header__text__presentation">
              <h1>Faites confiance à <em>Bryan Marlin</em></h1>
              <h2>L&apos;agent immobilier qui vous accompagne dans tous vos projets</h2>
          </div>
          <div className="header__text__quote">
              <blockquote>“Les raisons de vente ont des similitudes, <br />
              mais chacune dispose d&apos;une histoire unique qui la différencie des autres”</blockquote>
          </div>
      </div>
  
      <div className="header__picture">
          <Image
              src={image}
              alt="l'agent immobilier Bryan Marlin"
              width={433}
              height={650}
              style={{
                  maxWidth: "100%",
                  height: "auto"
              }} />
      </div>
  </div>
  </>;
}
