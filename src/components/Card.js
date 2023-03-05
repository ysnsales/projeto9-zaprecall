import styled from "styled-components"
import { useState } from "react"

export default function Card(props) {

    const [pergunta, setPergunta] = useState(false);
    const [resposta, setResposta] = useState(false)

    return (
        <>
            {resposta ?
                <RespostaCard>
                    <p>{props.card.answer}</p>
                    <div>
                        <button style={{background: "#FF3030"} }>Não lembrei</button>
                        <button style={{background: "#FF922E"}}>Quase não lembrei</button>
                        <button style={{background: "#2FBE34"}}>Zap!</button>
                    </div>
                </RespostaCard>

                :
                (pergunta ?
                    <PerguntaCard>
                        <p>{props.card.question}</p>
                        <div><img src="./assets/seta_virar.png" alt="seta" onClick={() => setResposta(true)} /> </div>
                    </PerguntaCard>
                    :
                    <FlashCard>
                        <p>Pergunta {props.i + 1}</p>
                        <ion-icon name="play-outline" onClick={() => setPergunta(true)} ></ion-icon>
                    </FlashCard>)

            }
        </>
    )


}

const RespostaCard = styled.div`
height: 100px;
width: 80%;
margin: 17px auto;
display: flex;
flex-direction: column;
justify-content: space-between;
padding: 15px;

box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
border-radius: 5px;
background-color: #FFFFD4;

    p {
        font-family: 'Recursive', sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
        color: #333333;

    }
    div {
        margin: 0 auto;
    }
    button {
        width: 85px;
        height: 37px;
        border-radius: 5px;
        border: 0;
        margin: 0 4px;

        font-family: 'Recursive', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 14px;
        color: #FFFFFF;
    }
`
const PerguntaCard = styled.div`
height: 101px;
width: 80%;
margin: 17px auto;
display: flex;
flex-direction: column;
justify-content: space-between;
padding: 15px;

box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
border-radius: 5px;
background-color: #FFFFD4;
;

    p {
        font-family: 'Recursive', sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
        color: #333333;
    }

    div {
        width: 100%;
        display: flex;
        justify-content: flex-end;
    }

    img {
        align-self: flex-end;
    }

`
const FlashCard = styled.div`
height: 35px;
width: 80%;
margin: 17px auto;
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
padding: 15px;

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
    }

    ion-icon {
        width: 20px;
        height: 23px;
    }

`
