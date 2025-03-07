import { render, screen, cleanup } from "@testing-library/react";
import { test, describe, expect, afterEach } from "vitest";
import TransactionOverview from "./TransactionOverview";

describe("Transaction overview component", () => {
  afterEach(() => {
    cleanup();
  });

  test("should calculate all transaction amount correctly", () => {
    const data = {
      mywork: [
        { name: "A", quantity: 1, amount: 10000 },
        { name: "B", quantity: 3, amount: 4200 },
      ],
      branch: [
        { name: "A", quantity: 1, amount: 10000 },
        { name: "B", quantity: 3, amount: 4200 },
        { name: "C", quantity: 2, amount: 8000 },
      ],
      drawer: { remain: 1, total: 3 },
    };
    render(
      <TransactionOverview
        transactionWork={data.mywork}
        transactionBranch={data.branch}
        drawer={data.drawer}
      />,
    );
    expect(screen.getByTestId("MyWork-amount-2").textContent).toEqual("14,200");
    expect(screen.getByTestId("MyBranch-amount-3").textContent).toEqual(
      "22,200",
    );
  });

  test("should calculate all transaction quantity correctly", () => {
    const data = {
      mywork: [
        { name: "A", quantity: 1, amount: 10000 },
        { name: "B", quantity: 3, amount: 4200 },
      ],
      branch: [
        { name: "A", quantity: 1, amount: 10000 },
        { name: "B", quantity: 3, amount: 4200 },
        { name: "C", quantity: 2, amount: 8000 },
      ],
      drawer: { remain: 1, total: 3 },
    };
    render(
      <TransactionOverview
        transactionWork={data.mywork}
        transactionBranch={data.branch}
        drawer={data.drawer}
      />,
    );
    expect(screen.getByTestId("MyWork-quantity-2").textContent).toEqual("4");
    expect(screen.getByTestId("MyBranch-quantity-3").textContent).toEqual("6");
  });
});
