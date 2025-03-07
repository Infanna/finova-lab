import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import Rating from "./Rating";

describe("Rating", () => {
  test("should set the current rating as the clicked star value", () => {
    render(<Rating />);
    expect(screen.getByTestId("star-1")).toBeDefined();
    expect(screen.getByTestId("star-2")).toBeDefined();
    expect(screen.getByTestId("star-3")).toBeDefined();
    expect(screen.getByTestId("star-4")).toBeDefined();
    expect(screen.getByTestId("star-5")).toBeDefined();
  });
});
