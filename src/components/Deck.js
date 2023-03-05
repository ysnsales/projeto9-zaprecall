import Card from "./Card"
import styled from "styled-components"
import { useState } from "react"



export default function Deck() {

    const cards = [
        { question: "O que é JSX?", answer: "Uma extensão da linguagem JavaScript" },
        { question: "O React é __", answer: "Uma biblioteca JavaScript para construção de interfaces" },
        { question: "Componentes devem iniciar com __", answer: "Letra maiúscula" },
        { question: "Podemos colocar __ dentro do JSX", answer: "expressões" },
        { question: "O ReactDOM nos ajuda __", answer: "Interagindo com a DOM para colocar componentes React na mesma" },
        { question: "Usamos o npm para __", answer: "Gerenciar os pacotes necessários e suas dependências" },
        { question: "Usamos props para __", answer: "Passar diferentes informações para componentes" },
        { question: "Usamos estado (state) para __", answer: "Dizer para o React quais informações quando atualizadas devem renderizar a tela novamente" }
    ]

    return (
        <DeckCard>
            {cards.map((card, i) => (
                <Card
                    key={i}
                    i={i}
                    card={card}
                    cards={cards}
                />
                    ))
            }
        </DeckCard>
    )
}

const DeckCard = styled.div`
margin-bottom: 97px;

`

