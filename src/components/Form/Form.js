import React, { useState } from "react";
import Card from "../CreditCard/Card";

import * as Styles from "./Form.module.scss";

export default function Form() {
    const [formData, setFormData] = useState({
        cardNum: "",
        name: "",
        expirationDate: {
            month: "",
            year: "",
        },
        cvv: "",
        phoneNum: "",
    });

    const handleFormSubmit = (event) => {
        event.preventDefault();
    };

    const handleInputChange = ({ target }) => {
        setFormData((data) => ({ ...data, [target.name]: target.value }));
    };

    const handleExpirationDateChange = ({ target }) => {
        setFormData((data) => ({ ...data, expirationDate: { [target.name]: target.value } }));
    };

    return (
        <div>
            <div id={Styles.credit_card_wrapper}>
                <Card cardData={formData} />
            </div>
            <form onSubmit={handleFormSubmit}>
                <div className="container">
                    <div className="row">
                        <div className="column">
                            <label htmlFor="cardNum">Kártyaszám</label>
                            <input name="cardNum" value={formData.cardNum} onChange={handleInputChange} required />
                        </div>
                    </div>
                    <div className="row">
                        <div className="column">
                            <label htmlFor="name">Kártyabirtokos neve</label>
                            <input name="name" value={formData.name} onChange={handleInputChange} required />
                        </div>
                    </div>
                    <div className="row">
                        <div className="column">
                            <label>Lejárati dátum</label>
                            <input name="month" value={formData.month} onChange={handleExpirationDateChange} required />
                            <input name="year" value={formData.year} onChange={handleExpirationDateChange} required />
                        </div>
                        <div className="column">
                            <label htmlFor="cvv">CVV</label>
                            <input name="cvv" value={formData.cvv} onChange={handleInputChange} required />
                        </div>
                    </div>
                    <div className="row">
                        <div className="column">
                            <label htmlFor="phoneNum">Telefonszám</label>
                            <input name="phoneNum" value={formData.phoneNum} onChange={handleInputChange} required />
                        </div>
                    </div>
                    <div className="row">
                        <button>Küldés</button>
                    </div>
                </div>
            </form>
        </div>
    );
}
