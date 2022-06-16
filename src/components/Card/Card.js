import './Card.scss';

export default function Card(props) {
  return (
    <div className='card'>

      <div className="img">
        { props.card.isSoldOut ? (
          <div className="status">
            Sold Out
          </div>
        ) : "" }
        { props.card.isOnline ? (
          <div className="status">
            Online
          </div>
        ) : "" }
        <img src={`./images/${ props.card.coverImg }`} alt="Card" />
      </div>

      <div className='stats'>
        <div className="rating">
          { props.card.stats.rating }
        </div>
        <div className="reviews">
          ({ props.card.stats.review_count })
        </div>
        <div className="location">
        {'\u2022'} { props.card.location }
        </div>
      </div>

      <div className="title">
        { props.card.title }
      </div>

      <div className="price">
        <span>From ${ props.card.price }</span> / person
      </div>

    </div>
  )
}