import Top from "./components/Top"
import Deck from "./components/Deck"
import Card from "./components/Card"
import Bottom from "./components/Bottom"

import styled from "styled-components"


export default function App() {
  return(
    <ContainerApp>
    <Top />
    <Deck />
    <Bottom />
    </ContainerApp>
  )

}

const ContainerApp = styled.div`
  background-color: #FB6B6B;
  width: 100%;
  height: 100%;

`;



