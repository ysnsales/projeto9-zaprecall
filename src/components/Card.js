import styled from "styled-components"
import { useState } from "react"

export default function Card(props) {

    const [pergunta, setPergunta] = useState(false);
    const [resposta, setResposta] = useState(false);
    const [cor, setCor] = useState(" #333333");
    const [display, setDisplay] = useState("inline")
    const [displayImg, setDisplayImg] = useState("none")
    const [imagemFim, setImagemFim] = useState("")
    const [respondeu, setRespondeu] = useState(false)
    
    function Fim(cor, imagem) {
        setCor(cor);
        setDisplay("none");
        setDisplayImg("inline");
        setImagemFim(imagem)
        setPergunta(false);
        setResposta(false)
        setRespondeu(true)
    }
    return (
        <>
            {resposta ?
                <RespostaCard>
                    <p>{props.card.answer}</p>
                    <div>
                        <button
                            style={{ background: "#FF3030" }} 
                            onClick={() => Fim("#FF3030", "./assets/icone_erro.png")}>Não lembrei
                        </button>
                        <button
                            style={{ background: "#FF922E" }} 
                            onClick={() => Fim("#FF922E", "./assets/icone_quase.png")}>Quase não lembrei
                        </button>
                        <button
                            style={{ background: "#2FBE34" }} 
                            onClick={() => Fim("#2FBE34", "./assets/icone_certo.png")}>Zap!
                        </button>
                    </div>
                </RespostaCard>

                :
                (pergunta ?
                    <PerguntaCard>
                        <p>{props.card.question}</p>
                        <div><img src="./assets/seta_virar.png" alt="seta" onClick={() => setResposta(true)} /> </div>
                    </PerguntaCard>
                    :
                    <FlashCard respondeu={respondeu}>
                        <p style={{ color: cor }}>Pergunta {props.i + 1}</p>
                        <ion-icon style={{ display: display }} name="play-outline" onClick={() => setPergunta(true)} ></ion-icon>
                        <img style={{ display: displayImg }} src={imagemFim} />
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
        display: flex;
        justify-content: center;
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

    text-decoration: ${props => props.respondeu ? "line-through" : "none"};
    }

    ion-icon {
        width: 20px;
        height: 23px;
    }

`
