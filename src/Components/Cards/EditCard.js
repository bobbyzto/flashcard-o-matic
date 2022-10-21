import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { readCard, readDeck, updateCard } from "../../utils/api/index";
import CardForm from "./CardForm";
import Breadcrumb from "./Breadcrumb/Breadcrumb";

function EditCard() {
    const { deckId, cardId } = useParams();
    const history = useHistory();
    const initialDeckState = {
        id: "",
        name: "",
        description: "",
    };
    const initialCardState = {
        id: "",
        front: "",
        back: "",
        deckId: "",
    };

    const [card, setCard] = useState(initialDeckState);
    const [deck, setDeck] = useState(initialCardState);

    useEffect(() => {
        async function fetchData() {
            const abortController = new AbortController();
            try {
                const cardResponse = await readCard(
                    cardId,
                    abortController.signal
                );
                const deckResponse = await readDeck(
                    deckId,
                    abortController.signal
                );
                setCard(cardResponse);
                setDeck(deckResponse);
            } catch (error) {
                console.error("Something went wrong", error);
            }
            return () => {
                abortController.abort();
            };
        }
        fetchData();
    }, [cardId, deckId]);

    function handleChange({ target }) {
        setCard({
            ...card,
            [target.name]: target.value,
        });
    }

    async function handleSubmit(event) {
        event.preventDefault();
        const abortController = new AbortController();
        const response = await updateCard({ ...card }, abortController.signal);
        history.push(`/decks/${deckId}`);
        return response;
    }

    async function handleCancel() {
        history.push(`/decks/${deckId}`);
    }

    return (
      <div>
        <Breadcrumb
            deck={deck}
            deckId={deckId}
            cardId={cardId}
        />
        <CardForm
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          handleCancel={handleCancel}
          cancelLabel={"Cancel"}
          cardAction={"Edit"}
          card={card}
        />
      </div>
    );
}

export default EditCard;
