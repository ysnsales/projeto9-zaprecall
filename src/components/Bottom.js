import styled from "styled-components"
import Deck from "./Deck"

export default function Bottom() {
    return (
        <>
            <BottomBar>
                <p>0/4 CONCLUIDOS</p>
            </BottomBar>
        </>
    )
}

const BottomBar = styled.div`
position: fixed;
bottom: 0;
left: 0;
width: 100%;
height: 70px;
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;

background: #FFFFFF;
box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.05);

    p {
        font-family: 'Recursive', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;

        color: #333333;
        margin: 0 auto;
    }
`