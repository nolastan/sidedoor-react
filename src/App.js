import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

import moment from 'moment';

class App extends Component {

  constructor(){
    super()
    this.isDayBlocked = this.isDayBlocked.bind(this)
  }

  state = {
    loading: true
  }

  componentWillMount() {
    var icalUrl = 'https://www.airbnb.com/calendar/ical/18123650.ics?s=fba76265b1bf3df892d6b38186762fea'
    fetch(`http://sidedoor-rails.herokuapp.com/calendar.json?url=${icalUrl}`)
      .then(res => res.json())
      .then(blockedRanges => this.setState({loading: false, blockedRanges: blockedRanges})
    )
  }

  isDayBlocked(date) {
    return this.state.blockedRanges.some(element => {
      return moment(date).isBetween(
        element.begin,
        element.end,
        true // inclusive
      )
    })
  }

  render() {
    const startDateString = this.state.startDate &&
      this.state.startDate.format('YYYY-MM-DD');

    const endDateString = this.state.endDate &&
      this.state.endDate.format('YYYY-MM-DD');

    if(this.state.loading) {
      var calendar = <p>Loading availability…</p>
    } else {
      var calendar = <DateRangePicker
                startDate={this.state.startDate}
                endDate={this.state.endDate}
                onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })}
                focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
                isDayBlocked={this.isDayBlocked}
              />
    }


    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>

        {calendar}

        <form method="get" action="https://docs.google.com/forms/d/e/1FAIpQLSfyDWa14McgQjDDi2LYwAaG_K3krHnqg_wqnYdbJMw3mpVfiw/formResponse">
          <input type="hidden" value={startDateString || ""} name="entry.1804760333" />
          <input type="hidden" value={endDateString || ""} name="entry.1918302671" />
          <input type="text" name="entry.92760851" placeholder="Your name" />
          <input type="text" name="entry.1552314638" placeholder="Your phone number" />
          <textarea name="entry.373211989" placeholder="Message"></textarea>
          <input type="submit" />
        </form>

      </div>
    );
  }
}

export default App;
