import React, { useState } from "react";
import Card from "../CreditCard/Card";

import * as Styles from "./Form.module.scss";

export default function Form() {
    const [formData, setFormData] = useState({
        cardNum: "",
        name: "",
        expirationDate: {
            month: "",
            year: ""
        },
        cvv: "",
        phoneNum: ""
    })

    const handleFormSubmit = (event) => {
        event.preventDefault();
    }

    const handleInputChange = ({target}) => {
        setFormData(data => ({ ...data, [target.name]: target.value}));
    }

    return <div>
        <div id={Styles.credit_card_wrapper}>
            <Card cardData={formData} />
        </div>
        <form onSubmit={handleFormSubmit}>
            
        </form>
    </div>;
}
