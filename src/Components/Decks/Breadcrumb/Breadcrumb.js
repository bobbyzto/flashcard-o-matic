import { Link } from "react-router-dom";

const Breadcrumb = ({
    newDeck,
    deck,
    deckId,
}) => {
    return (
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <Link to="/">Home</Link>
        </li>
        {deck ? (
        <li className="breadcrumb-item">
          <Link to={`/decks/${deckId}`}>{deck.name}</Link>
        </li>
        ) : ""}
        <li className="breadcrumb-item active">{!newDeck ? "Edit Deck" : "Create Deck"}</li>
      </ol>
    );
}

export default Breadcrumb;
