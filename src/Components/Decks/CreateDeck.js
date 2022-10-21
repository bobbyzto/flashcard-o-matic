import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { createDeck } from "../../utils/api/index";
import Breadcrumb from "./Breadcrumb/Breadcrumb";
import DeckForm from "./DeckForm";

function CreateDeck() {
  const history = useHistory();
  const initialState = {
    name: "",
    description: "",
  };
  const [newDeck, setNewDeck] = useState(initialState);

  function handleChange({ target }) {
    setNewDeck({
      ...newDeck,
      [target.name]: target.value,
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const abortController = new AbortController();
    const response = await createDeck({ ...newDeck }, abortController.signal);
    history.push("/");
    return response;
  }

  async function handleCancel() {
    history.push("/");
  }

  return (
    <div>
      <Breadcrumb newDeck={true} />
      <DeckForm
        newDeck={newDeck}
        handleSubmit={handleSubmit}
        handleCancel={handleCancel}
        handleChange={handleChange}
      />
    </div>
  );
}

export default CreateDeck;
