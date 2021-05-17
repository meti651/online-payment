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
        setFormData((data) => {
            const result = { ...data, [target.name]: target.value };
            result.cvv = result.cvv.slice(0, 3);
            return result;
        });
    };

    const handleExpirationDateChange = ({ target }) => {
        setFormData((data) => ({ ...data, expirationDate: { ...data.expirationDate, [target.name]: target.value } }));
    };

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
                                maxLength="19"
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
                            <div id={Styles.expiration_date}>
                                <select name="month" onChange={handleExpirationDateChange}>
                                    {[...new Array(12)].map((_, index) => (
                                        <option
                                            key={index}
                                            value={index + 1}
                                            disabled={
                                                new Date().getFullYear() == formData.expirationDate.year &&
                                                new Date().getMonth() >= index + 1
                                            }
                                        >
                                            {index + 1}
                                        </option>
                                    ))}
                                </select>
                                <p>/</p>
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
                        </div>
                        <div className="column">
                            <label htmlFor="cvv">CVV</label>
                            <input
                                name="cvv"
                                value={formData.cvv}
                                onChange={handleInputChange}
                                required
                                type="number"
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="column">
                            <label htmlFor="phoneNum">Telefonszám</label>
                            <input
                                name="phoneNum"
                                value={formData.phoneNum}
                                onChange={handleInputChange}
                                required
                                type="tel"
                                pattern="\+36 (?:20|30|70) \d{3} \d{4}"
                            />
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
