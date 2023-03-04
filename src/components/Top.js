import styled from "styled-components"

export default function Top() {
    return (
        <ContainerTop>
            <img src="./assets/logo.png" alt="" />
            <p>ZapRecall</p>
        </ContainerTop>
    )
}

const ContainerTop = styled.div`
display: flex;
justify-content: center;
margin: 50px auto;
  img {
    width: 52px;
    height: 60px;
    margin-right: 15px;
  }

  p{
    width: 203px;
    font-family: 'Righteous', cursive;
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 45px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: -0.012em;
    color: #FFFFFF;

  }

`;