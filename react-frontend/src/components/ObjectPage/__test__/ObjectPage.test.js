import React from "react";
import { render, screen } from "@testing-library/react";

import ObjectPage from "../ObjectPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders object page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <ObjectPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("object-datatable")).toBeInTheDocument();
    expect(screen.getByRole("object-add-button")).toBeInTheDocument();
});
