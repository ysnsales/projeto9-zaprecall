import Top from "./components/Top"
import Deck from "./components/Deck"
import Bottom from "./components/Bottom"

import styled from "styled-components"
import { useState } from "react"


export default function App() {

  const [contador, setContador] = useState(0);

  return(
    <ContainerApp>
    <Top />
    <Deck contador={contador} setContador={setContador}/>
    <Bottom contador={contador} setContador={setContador}/>
    </ContainerApp>
  )

}

const ContainerApp = styled.div`
  background-color: #FB6B6B;
  width: 100%;
  height: 100%;

`;



