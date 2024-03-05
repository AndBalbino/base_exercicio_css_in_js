import Header from './components/Cabecalho'
import Hero from './components/Hero'
import ListaVagas from './containers/ListaVagas'

// import './global.css'
import { GlobalStyled } from './GlobalStyled'

import styled from 'styled-components'

const DivContainer = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
`

function App() {
  return (
    <>
      <GlobalStyled />
      <Header />
      <Hero />
      <DivContainer>
        <ListaVagas />
      </DivContainer>
    </>
  )
}

export default App
