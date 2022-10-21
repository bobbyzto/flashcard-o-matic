const DeckForm = ({
    newDeck,
    handleSubmit,
    handleCancel,
    handleChange,
    deck,
}) => {
    return (
      <>
        <form onSubmit={newDeck ? (e) => handleSubmit(e) : handleSubmit}>
          <h1>{newDeck ? "Create Deck" : "Edit Deck"}</h1>
          <div className="form-group">
            <label>Name</label>
            <input
              id="name"
              name="name"
              className="form-control"
              onChange={handleChange}
              type="text"
              value={newDeck ? newDeck.name : deck.name}
            />
          </div>
          <div className="form-group">
            <label>Description</label>
            <textarea
              id="description"
              name="description"
              className="form-control"
              onChange={handleChange}
              type="text"
              value={newDeck ? newDeck.description : deck.description}
            />
          </div>
          <button
            className="btn btn-secondary mx-1"
            onClick={() => handleCancel()}
          >
            Cancel
          </button>
          <button className="btn btn-primary mx-1" type="submit">
            Submit
          </button>
        </form>
      </>
    );
}

export default DeckForm;
