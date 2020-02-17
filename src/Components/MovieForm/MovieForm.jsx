import React, { useState } from "react";

const MovieForm = ({ handleSubmit }) => {
  const [text, updateText] = useState("");

  return (
    <form data-testid="movie-form" onSubmit={() => handleSubmit({ text })}>
      <label htmlFor="movie-text">Movie</label>
      <input
        data-testid="movie-text-input"
        type="text"
        name="movie"
        id="movie-text"
        value={text}
        onChange={e => {
          updateText(e.target.value);
        }}
      />
      <button data-testid="movie-form-submit" type="submit">
        Submit
      </button>
    </form>
  );
};

export default MovieForm;
