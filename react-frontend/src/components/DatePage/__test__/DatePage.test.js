import React from "react";
import { render, screen } from "@testing-library/react";

import DatePage from "../DatePage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders date page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <DatePage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("date-datatable")).toBeInTheDocument();
    expect(screen.getByRole("date-add-button")).toBeInTheDocument();
});
