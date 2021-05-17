import React from "react";

import * as Styles from "./Card.module.scss";

export default function Card({ cardData }) {
    return (
        <div id={Styles.card_container}>
            <div id={Styles.card_inner}>
                <div id={Styles.card_front}>
                    <div id={Styles.icon}></div>
                    <div id={Styles.cardNum}></div>
                    <div id={Styles.cardBottom}>
                        <div id={Styles.name}></div>
                        <div id={Styles.expiration}></div>
                    </div>
                </div>
                <div id={Styles.card_back}>
                    <div id={Styles.black_line}></div>
                    <div id={Styles.cvv}></div>
                </div>
            </div>
        </div>
    );
}
