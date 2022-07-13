/* eslint-disable testing-library/no-unnecessary-act */
import { createRoot } from "react-dom/client";
import { act } from "react-dom/test-utils";

import App from "./App";

let container = null;
let root = null;
beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    // cleanup on exiting
    act(() => {
        root.unmount();
    });
    container.remove();
    container = null;
});

describe("App component", () => {
    test("renders dead man", () => {
        act(() => {
            root = createRoot(container);
            root.render(<App />);
        });
        expect(container.textContent).toContain("Dead Man");
    });
});
