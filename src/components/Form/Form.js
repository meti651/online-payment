import React, { useState } from "react";
import { formatCreditNum } from "../../utility/format";
import Card from "../CreditCard/Card";

import * as Styles from "./Form.module.scss";

export default function Form() {
    const [formData, setFormData] = useState({
        cardNum: "",
        name: "",
        expirationDate: {
            month: new Date().getMonth(),
            year: new Date().getFullYear(),
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
        setFormData((data) => ({ ...data, expirationDate: { ...data.expirationDate, [target.name]: target.value } }));
    };

    console.log(formData.expirationDate.year);
    console.log(new Date().getMonth());

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
                            <input
                                name="cardNum"
                                value={formatCreditNum(formData.cardNum)}
                                onChange={handleInputChange}
                                maxLength="20"
                                required
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="column">
                            <label htmlFor="name">Kártyabirtokos neve</label>
                            <input
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                required
                                maxLength="128"
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="column">
                            <label>Lejárati dátum</label>
                            <select name="month" onChange={handleExpirationDateChange}>
                                {[...new Array(12)].map((_, index) => (
                                    <option
                                        key={index}
                                        value={index + 1}
                                        disabled={
                                            new Date().getFullYear() == formData.expirationDate.year &&
                                            new Date().getMonth() > index + 1
                                        }
                                    >
                                        {index + 1}
                                    </option>
                                ))}
                            </select>
                            <select name="year" onChange={handleExpirationDateChange}>
                                {[...new Array(11)].map((_, index) => {
                                    const thisYear = new Date().getFullYear();
                                    return (
                                        <option key={index} value={thisYear + index}>
                                            {thisYear + index}
                                        </option>
                                    );
                                })}
                            </select>
                        </div>
                        <div className="column">
                            <label htmlFor="cvv">CVV</label>
                            <input
                                name="cvv"
                                value={formData.cvv}
                                onChange={handleInputChange}
                                required
                                type="number"
                                maxLength="3"
                                minLength="3"
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="column">
                            <label htmlFor="phoneNum">Telefonszám</label>
                            <input name="phoneNum" value={formData.phoneNum} onChange={handleInputChange} required />
                        </div>
                    </div>
                    <div className="row">
                        <button type="submit">Küldés</button>
                    </div>
                </div>
            </form>
        </div>
    );
}
