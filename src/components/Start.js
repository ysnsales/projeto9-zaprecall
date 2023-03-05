import styled from "styled-components"

export default function Start(props){
    return(
        <StartRecall>
            <img src="./assets/logo.png" />
            <p>ZapRecall</p>
            <button data-test="start-btn" onClick={() => props.setIniciar(false)}>Iniciar Recall</button>
        </StartRecall>
    )
}

const StartRecall = styled.div`
text-align: center;
margin-top: 15%;

    img {
        width: 136px;
        height: 161px;

    }
    p{
        font-family: 'Righteous', cursive;
        font-style: normal;
        font-weight: 400;
        font-size: 36px;
        line-height: 45px;
        letter-spacing: -0.012em;
        color: #FFFFFF;
}
    button{
        width: 246px;
        height: 54px;
        color: #D70900;
        font-family: 'Recursive', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        background-color: #FFFFFF;
        border: 1px solid #D70900;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
        border-radius: 5px;
        margin-top: 30px;
    }
`