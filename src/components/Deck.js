import Card from "./Card"
import styled from "styled-components"
import { useState } from "react"
import cards from "./cards"


export default function Deck(props) {
    
    return (
        <DeckCard>
            {cards.map((card, i) => (
                <Card
                    data-test="flashcard"
                    key={i}
                    i={i}
                    card={card}
                    cards={cards}
                    contador={props.contador}
                    setContador={props.setContador}
                />
                    ))
            }
        </DeckCard>
    )
}

const DeckCard = styled.div`
margin-bottom: 97px;

`

