import axios from "axios";

export function paywMPago(form) {
    return async function (dispatch) {
        try {
            const res = await axios.post(
                `http://localhost:8080/mercadoPago/createDonation`,
                form
            );
            console.log(res.data);
            dispatch({ type: "MPAGO", payload: res.data });
        } catch (err) {
            console.log(err);
        }
    };
}

export function paywPayPal(form) {
    return async function (dispatch) {
        try {
            const res = await axios.post(
                `http://localhost:8080/paypal/createDonation`,
                form
            );
            dispatch({ type: "PAYPAL", payload: res.data.data });
        } catch (err) {
            console.log(err);
        }
    };
}

export function paywStripe(form) {
    return async function (dispatch) {
        try {
            const res = await axios.post(
                `http://localhost:8080/stripe/createDonation`,
                form
            );
            dispatch({ type: "STRIPE", payload: res.data.data });
        } catch (err) {
            console.log(err);
        }
    };
}
