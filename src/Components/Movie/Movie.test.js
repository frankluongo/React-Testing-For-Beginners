import React from "react";
import { render, cleanup } from "react-testing-library";
import { MemoryRouter } from "react-router-dom";

import Movie, { POSTER_PATH } from "./Movie";

console.error = jest.fn();

afterEach(() => {
  cleanup();
  console.error.mockClear();
});

const movie = {
  id: "1",
  title: "Up",
  poster_path: "/photo.jpg"
};

test("<Movie /> should fail without props", () => {
  render(<Movie />);
  expect(console.error).toHaveBeenCalled();
});

test("<Movie /> should succeed with props", () => {
  const { getByTestId } = render(
    <MemoryRouter>
      <Movie movie={movie} />
    </MemoryRouter>
  );
  expect(console.error).not.toHaveBeenCalled();
  expect(getByTestId("movie-link").getAttribute("href")).toBe(`/${movie.id}`);
  expect(getByTestId("movie-poster").src).toBe(
    `${POSTER_PATH}${movie.poster_path}`
  );
});
