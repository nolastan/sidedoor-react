import React, { Component } from 'react'
import styled from 'styled-components'
import Color from '../styles/colors'

import Calendar from './Calendar'

const Form = styled.form`
  padding: 1rem;
  margin: 0 auto;
  max-width: 600px;
`

const Input = styled.input`
  padding: 1ex 0.5em;
  font-size: 125%;
  width: 100%;
  border: 1px solid gray;
  margin: 0.5ex 0;

  &:focus {
    background: ${Color.offwhite}
  }
`

const ParagraphInput = Input.withComponent('textarea').extend`
  height: 9ex;
`
const Submit = Input.extend`
  background: ${Color.orange};
  color: white;
  border: none;
  border-radius: 50px;
  box-shadow: 0 2px 4px 0 rgba(0,0,0,0.10);
  cursor: pointer;
  -webkit-appearance: none;
  transition: box-shadow 1px ease-in;

  &:hover {
    box-shadow: 0 3px 6px 0 rgba(0,0,0,0.15);
    background: ${Color.accentFocus};
  }
`

class ListingDetail extends Component {

  render() {
    return (
      <Form method="get" action="https://docs.google.com/forms/d/e/1FAIpQLSfyDWa14McgQjDDi2LYwAaG_K3krHnqg_wqnYdbJMw3mpVfiw/formResponse">
        <Calendar />
        <Input type="text" name="entry.92760851" placeholder="Your name" />
        <Input type="tel" name="entry.1552314638" placeholder="Your phone number" />
        <ParagraphInput name="entry.373211989" placeholder="Message"></ParagraphInput>
        <Submit type="submit" value="Request dates" />
      </Form>
    )
  }
}

export default ListingDetail
