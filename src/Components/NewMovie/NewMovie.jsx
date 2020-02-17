import React from "react";
import MovieForm from "../MovieForm";

const NewMovie = () => {
  return (
    <section>
      <h2 data-testid="page-title">New Movie</h2>
      <MovieForm />
    </section>
  );
};

export default NewMovie;
