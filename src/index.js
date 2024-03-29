import React, { Suspense } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store.js";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
    <Provider store={store}>
        <Suspense>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Suspense>
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
