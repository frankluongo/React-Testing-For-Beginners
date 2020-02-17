import React from "react";
import { render, cleanup, waitForElement } from "react-testing-library";

import MovieDetail, { POSTER_PATH } from "./MovieDetail";

global.fetch = require("jest-fetch-mock");

const MOVIE_TITLE = "movie-title";
const MOVIE_RELEASE_DATE = "movie-release-date";
const MOVIE_OVERVIEW = "movie-overview";
const MOVIE_POSTER = "movie-poster";

afterEach(() => {
  cleanup();
  console.error.mockClear();
});

console.error = jest.fn();

const match = {
  params: {
    id: "1"
  }
};

const movie = {
  id: "1",
  title: "Level Up Rules",
  release_date: "02/01/2020",
  overview: "I like eggs",
  poster_path: "/photo.jpg"
};

test("<MovieDetail />", async () => {
  fetch.mockResponseOnce(JSON.stringify(movie));
  const { getByTestId } = render(<MovieDetail match={match} />);
  await waitForElement(() => getByTestId(MOVIE_TITLE));
  expect(getByTestId(MOVIE_TITLE).textContent).toBe(movie.title);
  expect(getByTestId(MOVIE_RELEASE_DATE).textContent).toBe(movie.release_date);
  expect(getByTestId(MOVIE_OVERVIEW).textContent).toBe(movie.overview);
  expect(getByTestId(MOVIE_POSTER).src).toBe(
    `${POSTER_PATH}${movie.poster_path}`
  );
});
