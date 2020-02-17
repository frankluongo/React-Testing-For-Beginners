import React from "react";
import { render, cleanup, fireEvent } from "react-testing-library";

import NewMovie from "./NewMovie";

afterEach(cleanup);

test("<NewMovie />", () => {
  const { getByTestId, container } = render(<NewMovie />);
  expect(getByTestId("page-title").textContent).toBe("New Movie");
  expect(container.firstChild).toMatchSnapshot();
});
