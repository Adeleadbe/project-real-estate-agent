import Image from "next/image"

export default function Header({ image }) {
  return (
    <>
    <div className="header">
        <div className="header__text">
            <div className="header__text__presentation">
                <h1>Faites confiance à <em>Bryan Marlin</em></h1>
                <h2>L&apos;agent immobilier qui vous accompagne dans tous vos projets</h2>
            </div>
            <div className="header__text__quote">
                <blockquote>“Les raisons de vente ont des similitudes, <br />
                chacune dispose d&apos;une histoire unique qui la différencie des autres”</blockquote>
            </div>
        </div>
    
    <Image 
        className="header__picture" 
        src={image} 
        alt="l'agent immobilier Bryan Marlin" 
        width="533"
        height="800" />
        </div>
    </>
  )
}
