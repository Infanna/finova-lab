import { describe, expect, Mock, test, vi } from "vitest";
import { NavigateToPage } from "./TransactionMenu.service";
import { useNavigate } from "react-router-dom";

describe("TransactionMenu", () => {
  vi.mock("react-router-dom", () => ({
    useNavigate: vi.fn(),
  }));

  describe("NavigateToPage", () => {
    const mockNavigate = vi.fn();
    (useNavigate as Mock).mockReturnValue(mockNavigate);
    const navigateToPage = NavigateToPage();

    test("should navigate to the correct path", () => {
      const path = "/test-path";

      navigateToPage(path);

      expect(mockNavigate).toHaveBeenCalledWith(path);
    });
  });
});
