import Card from "./Card"
import styled from "styled-components"


export default function Deck() {
    return(
        <DeckCard>
        <Card />
        </DeckCard>
    )
}

const DeckCard = styled.div`
margin-bottom: 97px;

`