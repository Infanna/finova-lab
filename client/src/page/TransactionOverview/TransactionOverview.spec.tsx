import { render, screen } from "@testing-library/react";
import { test, describe, expect, beforeEach } from "vitest";
import TransactionOverview from "./TransactionOverview";

describe("Transaction overview component", () => {
  const initialData = {
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

  let data = initialData;

  beforeEach(() => {
    data = JSON.parse(JSON.stringify(initialData));
  });

  test("should calculate all transaction amount correctly", () => {
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

  test("when drawer data change, it progress bar should also change", () => {
    data.drawer = { remain: 3, total: 4 };
    const { rerender } = render(
      <TransactionOverview
        transactionWork={data.mywork}
        transactionBranch={data.branch}
        drawer={data.drawer}
      />,
    );
    const elmWidth = screen.getByTestId("overview-progress-bar").style.width;
    expect(elmWidth).toEqual("75%");

    rerender(
      <TransactionOverview
        transactionWork={data.mywork}
        transactionBranch={data.branch}
        drawer={{ total: 4, remain: 2 }}
      />,
    );

    const newElmWidth = screen.getByTestId("overview-progress-bar").style.width;
    expect(newElmWidth).toEqual("50%");
  });
});
