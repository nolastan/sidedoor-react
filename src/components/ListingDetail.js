import React, { Component } from 'react'
import styled from 'styled-components'

const Detail = styled.div`
  padding: 1rem;
  margin: 0 auto;
  max-width: 600px;
`

class ListingDetail extends Component {

  render() {
    return (
      <Detail>
        <img src="/avatars/stan.jpg" height="50" alt="Stan" />
        <img src="/avatars/tommy.jpg" height="50" alt="Tommy" />
        <p>Come stay with us in New Orleans! We live in a traditional New
        Orleans shotgun duplex just a 15 minute walk from Frenchmen Street
        (full of Jazz venues such as The Spotted Cat) and 20 minute walk from
        the French Quarter. There’s also lots of bars, restaurants, and cafes
        nearby.</p>
        <p>You'll be staying next door where there are two beds, a sofa bed, and
        an air mattress – all queen size.</p>
      </Detail>
    )
  }
}

export default ListingDetail
