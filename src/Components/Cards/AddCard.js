import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { createCard, readDeck } from "../../utils/api/index";
import Breadcrumb from "./Breadcrumb/Breadcrumb";
import CardForm from "./CardForm";

function AddCard() {
    const { deckId } = useParams();
    const history = useHistory();
    const initialState = {
        front: "",
        back: "",
    };

    const [newCard, setNewCard] = useState(initialState);
    const [deck, setDeck] = useState({});

    useEffect(() => {
        async function fetchData() {
            const abortController = new AbortController();
            try {
                const response = await readDeck(deckId, abortController.signal);
                setDeck(response);
            } catch (error) {
                console.error("Something went wrong", error);
            }
            return () => {
                abortController.abort();
            };
        }
        fetchData();
    }, [deckId]);

    function handleChange({ target }) {
        setNewCard({
            ...newCard,
            [target.name]: target.value,
        });
    }

    async function handleSubmit(event) {
        event.preventDefault();
        const abortController = new AbortController();
        const response = await createCard(
            deckId,
            { ...newCard },
            abortController.signal
        );
        history.go(0);
        setNewCard(initialState);
        return response;
    }

    async function handleDone() {
        history.push(`/decks/${deckId}`);
    }

    return (
      <div>
        <Breadcrumb
            newCard={newCard}
            deck={deck}
            deckId={deckId}
        />
        <CardForm
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          handleCancel={handleDone}
          cancelLabel={"Done"}
          cardAction={"Add"}
          card={newCard}
        />
      </div>
    );
}

export default AddCard;
