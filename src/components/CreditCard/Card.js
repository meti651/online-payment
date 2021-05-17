import React from "react";

import * as Styles from "./Card.module.scss";

import Chip from "../../media/Chip.png";

export default function Card({ cardData, isFlipped }) {
    return (
        <div id={Styles.card_container}>
            <div id={Styles.card_inner} className={isFlipped ? Styles.flip : ""}>
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
                    <div id={Styles.closing_text}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis imperdiet malesuada libero non
                        elementum. Cras quis euismod risus, in viverra massa. Suspendisse maximus mattis magna, eu
                        facilisis felis suscipit et. Maecenas dictum est quis erat egestas scelerisque. Aliquam erat
                        volutpat. Nam a bibendum nulla. Suspendisse potenti. Proin id ultrices velit. Pellentesque id
                        convallis diam, sed sagittis orci. Etiam pulvinar, purus eu suscipit semper, orci nunc
                        consectetur nunc, vitae blandit velit urna vel nulla. Nulla nec velit et massa maximus
                        dignissim. Nullam quis rutrum ante. Nulla sed eleifend ante, eu tempor sapien. Suspendisse
                        semper auctor eros at placerat. Donec aliquet purus eu scelerisque vestibulum.
                    </div>
                </div>
            </div>
        </div>
    );
}
