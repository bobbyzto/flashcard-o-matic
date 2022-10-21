function CardForm({
  handleSubmit,
  handleCancel,
  handleChange,
  cancelLabel,
  cardAction,
  card,
}) {
  return (
    <form onSubmit={handleSubmit}>
      <h2>{`${cardAction} Card`}</h2>
      <div className="form-group">
        <label htmlFor="card-front">Front:</label>
        <textarea
          className="form-control"
          value={card.front}
          onChange={handleChange}
          type="text"
          name="front"
          id="card-front"
        />
      </div>
      <div className="form-group">
        <label htmlFor="card-back">Back:</label>
        <textarea
          className="form-control"
          value={card.back}
          onChange={handleChange}
          type="text"
          name="back"
          id="card-back"
        />
      </div>
      <div>
        <button
          className="btn btn-secondary mx-1"
          onClick={() => handleCancel()}
        >
          {cancelLabel}
        </button>
        <button className="btn btn-primary mx-1" type="submit">
          Save
        </button>
      </div>
    </form>
  );
}

export default CardForm;
