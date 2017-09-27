import React, { Component } from 'react'
import styled from 'styled-components'

import Carousel from './components/Carousel'
import Map from './components/Map'
import ListingDetail from './components/ListingDetail'
import RequestForm from './components/RequestForm'

const Main = styled.main`
  line-height: 1.5;
  overflow: hidden;
`

class App extends Component {

  render() {
    return(
      <Main>
        <Carousel />
        <ListingDetail />
        <RequestForm />
        <Map />
      </Main>
    )
  }
}

export default App
