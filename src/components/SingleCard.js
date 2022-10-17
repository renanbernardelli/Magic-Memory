import "./SingleCard.css";

export default function Singlecard({ card, handleChoice }) {

  const handleClick = () => {
    
    handleChoice(card);
  }

  return (
    <div className="card">
      <div>
        <img src={card.src} alt="card front" className="front" />
        <img 
          src="/img/cover.png" 
          alt="card back" 
          className="back"
          onClick={handleClick}
        />
      </div>
    </div>
  )
}
