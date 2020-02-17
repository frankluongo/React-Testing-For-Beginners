import React from "react";
import { render, cleanup, fireEvent } from "react-testing-library";

import MovieForm from "./MovieForm";

afterEach(cleanup);

const handleSubmit = jest.fn(({ text }) => {
  return text;
});

test("<MovieForm />", () => {
  const { getByTestId, queryByTestId } = render(
    <MovieForm handleSubmit={handleSubmit} />
  );
  expect(queryByTestId("movie-form")).toBeTruthy();
  const input = getByTestId("movie-text-input");
  // input.value = "Frank";
  // fireEvent.change(input);
  fireEvent.change(input, {
    target: { value: "Frank" }
  });
  const button = getByTestId("movie-form-submit");
  fireEvent.click(button);
  expect(handleSubmit).toHaveBeenCalledTimes(1);
  expect(handleSubmit).toHaveBeenCalledWith({
    text: "Frank"
  });
});
