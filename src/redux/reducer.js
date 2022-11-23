const initialState = {
    newPayPal: {},
    newMPago: {},
    newStripe: {},
};

export default function reducer(state = initialState, { type, payload }) {
    state = initialState;
    switch (type) {
        case "MPAGO":
            return {
                ...state,
                newMPago: payload,
            };
        case "PAYPAL":
            return {
                ...state,
                newPayPal: payload,
            };
        case "STRIPE":
            return {
                ...state,
                newStripe: payload,
            };
        default:
            return state;
    }
}
