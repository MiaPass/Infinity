import React, { useState, useEffect } from "react";

const ProductDisplay = () => {
    const [formstripe, setForm] = useState({
        amount: "",
        email: "",
        description: "Donation",
    });

    const handleInput = (e) => {
        e.preventDefault();

        setForm({
            ...formstripe,
            [e.target.name]: e.target.value,
        });
    };
    return (
        <div>
            <h2> Stripe </h2>
            <form
                className="create-div-container"
                action="http://localhost:8080/stripe/createDonation"
                method="POST"
            >
                <input
                    className="form-title"
                    name="amount"
                    type="text"
                    value="price_1M46PsEgwlDrF1eoEuJsRxM4"
                    placeholder=" Amount..."
                    onChange={(e) => handleInput(e)}
                />
                {/* <hr /> */}
                <input
                    name="email"
                    type="email"
                    value={formstripe.email}
                    placeholder=" user@mail.com"
                    onChange={(e) => handleInput(e)}
                />

                {/* <hr /> */}
                <button type="submit">Checkout</button>
            </form>
        </div>
    );
};

const Message = ({ message }) => (
    <section>
        <p>{message}</p>
    </section>
);

export default function PayWStripe() {
    const [message, setMessage] = useState("");

    useEffect(() => {
        // Check to see if this is a redirect back from Checkout
        const query = new URLSearchParams(window.location.search);

        if (query.get("success")) {
            setMessage("Order placed! You will receive an email confirmation.");
        }

        if (query.get("canceled")) {
            setMessage(
                "Order canceled -- continue to shop around and checkout when you're ready."
            );
        }
    }, []);

    return message ? <Message message={message} /> : <ProductDisplay />;
}
