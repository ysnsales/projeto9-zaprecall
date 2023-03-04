import styled from "styled-components"


export default function Card() {
    return (
        <>
            <BoxCard>
                <p>Pergunta 1</p>
                <ion-icon name="play-outline"></ion-icon>
            </BoxCard>

            <BoxCard>
                <p>Pergunta 2</p>
                <ion-icon name="play-outline"></ion-icon>
            </BoxCard>

            <BoxCard>
                <p>Pergunta 3</p>
                <ion-icon name="play-outline"></ion-icon>
            </BoxCard>

            <BoxCard>
                <p>Pergunta 4</p>
                <ion-icon name="play-outline"></ion-icon>
            </BoxCard>

            <BoxCard>
                <p>Pergunta 5</p>
                <ion-icon name="play-outline"></ion-icon>
            </BoxCard>

            
        </>

    )
}

const BoxCard = styled.div`
min-height: 65px;
width: 80%;
margin: 17px auto;
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;

box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
border-radius: 5px;
background-color: white;

    p {
        font-family: 'Recursive', sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
        color: #333333;

        margin-left: 15px;
    }

    ion-icon {
        width: 20px;
        height: 23px;
        margin-right: 15px;
    }

`