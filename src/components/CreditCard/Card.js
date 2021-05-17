import React from "react";

import * as Styles from "./Card.module.scss";

import Chip from "../../media/Chip.png";

export default function Card({ cardData }) {
    return (
        <div id={Styles.card_container}>
            <div id={Styles.card_inner}>
                <div id={Styles.card_front}>
                    <div id={Styles.placeholder}></div>
                    <div id={Styles.icon}>
                        <img src={Chip} alt="Chip" />
                    </div>
                    <div id={Styles.card_num}>{cardData.cardNum}</div>
                    <div id={Styles.card_bottom}>
                        <div id={Styles.name}>{cardData.name}</div>
                        <div id={Styles.expiration}>
                            {cardData.expirationDate.month}/{cardData.expirationDate.year.slice(2)}
                        </div>
                    </div>
                </div>
                <div id={Styles.card_back}>
                    <div id={Styles.black_line}></div>
                    <div id={Styles.cvv}>{cardData.cvv}</div>
                </div>
            </div>
        </div>
    );
}
