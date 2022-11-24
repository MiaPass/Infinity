import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useMercadopago } from "react-sdk-mercadopago";

import swal from "sweetalert";

import { paywMPago } from "../../redux/actions";

import "../../css/donations.css";

export default function PayWMPago() {
    const dispatch = useDispatch();

    const { newMPago } = useSelector((state) => state);

    const [formmp, setForm] = useState({
        amount: "",
        email: "",
        description: "Donation",
    });

    const mercadopago = useMercadopago.v2(
        "TEST-54acdf0e-0c9e-4099-8ce5-2c689f113567",
        {
            locale: "es-AR",
        }
    );

    const [render, setRender] = useState("hidden");

    useEffect(() => {
        // console.log(newMPago);
        const button = document.getElementsByClassName("mercadopago-button");
        if (mercadopago && newMPago.id && button.length === 0) {
            mercadopago.checkout({
                preference: {
                    id: newMPago.id,
                },
                render: {
                    container: "#button-checkout",
                    label: "Pay",
                },
            });
        }

        setTimeout(() => setRender("visible"), 250);
    }, [mercadopago, newMPago]);

    const [checkButton, setcheckButton] = useState(false);

    const validateForm = (formmp) => {
        const email = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]+$/;
        const amount = /^[0-9]+$/;

        const errors = {
            email: false,
            amount: false,
        };

        if (!email.test(formmp.email.toLowerCase().trim())) {
            errors.email = true;
        } else {
            errors.email = false;
        }
        if (!amount.test(formmp.amount.trim())) {
            errors.amount = true;
        } else {
            errors.amount = false;
        }

        return errors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const errors = validateForm(formmp);

        if (!formmp.amount || !formmp.email) {
            swal({
                title: "Faltan datos",
                icon: "error",
                button: "Aceptar",
                timer: "10000",
            });
        } else if (errors.email === true) {
            swal({
                title: "Debe ser un correo/email valido",
                text: "Solo puede contener letras, numeros, puntos, guiones y guion bajo",
                icon: "error",
                button: "Aceptar",
                timer: "10000",
            });
        } else if (errors.amount === true) {
            swal({
                // title: "Debe ser un correo valida",
                text: "La cantidad a donar debe ser solo en numeros",
                icon: "error",
                button: "Aceptar",
                timer: "10000",
            });
        } else {
            dispatch(paywMPago(formmp));
            setcheckButton(true);
        }
    };

    const handleInput = (e) => {
        e.preventDefault();

        setForm({
            ...formmp,
            [e.target.name]: e.target.value,
        });
    };

    try {
        return (
            <center className="centerCenter">
                {render === "hidden" ? (
                    <span></span>
                ) : (
                    <form
                        className="create-div-container"
                        onSubmit={(e) => handleSubmit(e)}
                    >
                        <input
                            className="form-title"
                            name="amount"
                            type="number"
                            value={formmp.amount}
                            placeholder=" Amount..."
                            onChange={(e) => handleInput(e)}
                        />

                        <input
                            name="email"
                            type="email"
                            value={formmp.email}
                            placeholder=" user@mail.com"
                            onChange={(e) => handleInput(e)}
                        />

                        {checkButton === true ? (
                            <div
                                className="button-checkout"
                                id="button-checkout"
                            ></div>
                        ) : (
                            <button
                                id="form-submit"
                                type="submit"
                                onSubmit={(e) => handleSubmit(e)}
                            >
                                Checkout
                            </button>
                        )}
                    </form>
                )}
            </center>
        );
    } catch (error) {
        console.log(error);
    }
}
