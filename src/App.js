import React, { Component } from 'react'
import Calendar from './components/Calendar'

class App extends Component {

  render() {
    return(
      <main>
        <form method="get" action="https://docs.google.com/forms/d/e/1FAIpQLSfyDWa14McgQjDDi2LYwAaG_K3krHnqg_wqnYdbJMw3mpVfiw/formResponse">
          <Calendar />
          <input type="text" name="entry.92760851" placeholder="Your name" />
          <input type="text" name="entry.1552314638" placeholder="Your phone number" />
          <textarea name="entry.373211989" placeholder="Message"></textarea>
          <input type="submit" />
        </form>
      </main>
    )
  }
}

export default App
