import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import App from "./App";

it("renders without crashing", () => {
  render(<App />);
  expect(screen.getByText("Vite")).toBeInTheDocument();
});
