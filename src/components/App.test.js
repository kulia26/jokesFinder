import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders Let’s try to find a joke for you", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Let’s try to find a joke for you/i);
  expect(linkElement).toBeInTheDocument();
});
