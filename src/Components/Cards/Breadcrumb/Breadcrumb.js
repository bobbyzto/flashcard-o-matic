import { Link } from "react-router-dom";

const Breadcrumb = ({
    deck,
    deckId,
    newCard,
    cardId
}) => {
    return (
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <Link to="/">Home</Link>
        </li>
        <li className="breadcrumb-item">
          <Link to={`/decks/${deckId}`}>{deck.name}</Link>
        </li>
        <li className="breadcrumb-item active">{
            newCard ?
            "Add Card"
            : `Edit Card: ${cardId}`}
        </li>
      </ol>
    );
}

export default Breadcrumb;
