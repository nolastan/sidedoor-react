import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import Calendar from './Calendar.js'
import moment from 'moment';

import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

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
      .then(bookings => this.setState({loading: false, bookings: bookings})
    )
  }

  isDayBlocked(date) {
    if(!this.state.bookings.length) { return false }
    for (var i = 0; i < this.state.bookings.length; i++) {
      if(moment(date).isBetween(this.state.bookings[i].begin, this.state.bookings[i].end)) {
        return true
      }
    }
    return false
  }

  render() {
    if(this.state.loading) {
      return (<div>Loading…</div>)
    } else {
      return (
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React</h2>
          </div>
          <DateRangePicker
            startDate={this.state.startDate} // momentPropTypes.momentObj or null,
            endDate={this.state.endDate} // momentPropTypes.momentObj or null,
            onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} // PropTypes.func.isRequired,
            focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
            onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
            isDayBlocked={this.isDayBlocked}
          />
        </div>
      );
    }
  }
}

export default App;
