import React from "react";
import { MemoryRouter } from "react-router-dom";
import { render, cleanup, waitForElement } from "react-testing-library";

global.fetch = require("jest-fetch-mock");

import MoviesList from "./MoviesList";

afterEach(() => {
  cleanup();
  console.error.mockClear();
});

console.error = jest.fn();

const movies = {
  results: [
    {
      id: "1",
      title: "Level Up Rules",
      release_date: "02/01/2020",
      overview: "I like eggs",
      poster_path: "/photo.jpg"
    },
    {
      id: "2",
      title: "Level Up Rules 2",
      release_date: "02/01/2020",
      overview: "I like eggs",
      poster_path: "/photo.jpg"
    },
    {
      id: "3",
      title: "Level Up Rules 3",
      release_date: "02/01/2020",
      overview: "I like eggs",
      poster_path: "/photo.jpg"
    }
  ],
  success: true
};

const movie = movies.results[0];

test("<MoviesList />", async () => {
  fetch.mockResponseOnce(JSON.stringify(movies));
  const { getByTestId, queryByTestId, getAllByTestId } = render(
    <MemoryRouter>
      <MoviesList />
    </MemoryRouter>
  );
  expect(queryByTestId("loading")).toBeTruthy();
  await waitForElement(() => getByTestId("movie-link"));
  expect(queryByTestId("loading")).toBeFalsy();
  expect(getByTestId("movie-link").getAttribute("href")).toBe(`/${movie.id}`);
  expect(getAllByTestId("movie-link").length).toBe(movies.results.length);
});

test("<MoviesList /> api fail", async () => {
  movies.success = false;
  fetch.mockResponseOnce(JSON.stringify(movies));
  const { queryByTestId } = render(
    <MemoryRouter>
      <MoviesList />
    </MemoryRouter>
  );
  expect(queryByTestId("loading")).toBeTruthy();
});
