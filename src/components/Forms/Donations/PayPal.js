import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { PayPalButton } from "react-paypal-button-v2";

import swal from "sweetalert";

import { paywPayPal } from "../../../redux/actions";

export default function PayWPayPal() {
  const dispatch = useDispatch();

  const [donationAmountPayPal, setDonationAmountPayPal] = useState(1);
  const [render, setRender] = useState("hidden");
  const [formpp, setForm] = useState({
    amount: "",
    email: "",
  });

  const validateForm = (formpp) => {
    const email = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]+$/;
    const amount = /^[0-9]+$/;

    const errors = {
      email: false,
      amount: false,
    };

    if (!email.test(formpp.email.toLowerCase().trim())) {
      errors.email = true;
    } else {
      errors.email = false;
    }
    if (!amount.test(formpp.amount.trim())) {
      errors.amount = true;
    } else {
      errors.amount = false;
    }

    return errors;
  };
  useEffect(() => {
    setTimeout(() => setRender("visible"), 1000);
  });
  //   useEffect(
  //     () => {
  //       let timer1 = setTimeout(() => setRender("visible"), delay * 1000);

  //       // this will clear Timeout
  //       // when component unmount like in willComponentUnmount
  //       // and show will not change to true
  //       return () => {
  //         clearTimeout(timer1);
  //       };
  //     },
  //     // useEffect will run only one time with empty []
  //     // if you pass a value to array,
  //     // like this - [data]
  //     // than clearTimeout will run every time
  //     // this value changes (useEffect re-run)
  //     []
  //   );
  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = validateForm(formpp);

    if (!formpp.amount || !formpp.email) {
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
      // algo@algo.com
      dispatch(paywPayPal(formpp));
    }
  };

  const handleInput = (e) => {
    e.preventDefault();

    setForm({
      ...formpp,
      [e.target.name]: e.target.value,
    });

    if (e.target.name === "amount") setDonationAmountPayPal(e.target.value);
  };

  try {
    return (
      <div
        style={{
          marginTop: 20,
        }}
      >
        <h2> PayPal </h2>
        <form
          className="create-div-container"
          onSubmit={(e) => handleSubmit(e)}
        >
          <input
            className="from-title"
            name="amount"
            type="number"
            value={formpp.amount}
            placeholder=" Amount..."
            onChange={(e) => handleInput(e)}
          />
          {/* <hr /> */}
          <input
            name="email"
            type="email"
            value={formpp.email}
            placeholder=" user@mail.com"
            onChange={(e) => handleInput(e)}
          />

          {/* <hr /> */}
          {render === "hidden" ? (
            <span></span>
          ) : (
            <span
              style={{
                maxHeight: 120,
                maxWidth: 250,

                // maxWidth: 100,
                // overflow: "hidden",
                paddingTop: -30,
                padding: 0,
                float: "right",
                marginTop: -30,
                // marginLeft: -70,
              }}
            >
              <PayPalButton
                style={{ padding: 0 }}
                amount={donationAmountPayPal}
                // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
                onSuccess={(details, data) => {
                  console.log(formpp);
                  // OPTIONAL: Call your server to save the transaction

                  dispatch(paywPayPal(formpp));
                  setTimeout(() => {
                    window.location.href = "http://localhost:3000/success";
                  }, 1000);
                }}
                options={{
                  clientId:
                    "AcsldefjQXoml-Leg34FhsFvCMYZ-_eseJP0-UBaZ3iPIfo-FxfM4nQ6MAwJKJ5iMylMHnsVDcIZQp2r",
                  // disableFunding: "credit,card",
                }}
              />
            </span>
          )}
        </form>
      </div>
    );
  } catch (error) {
    console.log(error);
  }
}
