import React, { Component } from 'react'
import { DateRangePicker } from 'react-dates'
import 'react-dates/lib/css/_datepicker.css'

import moment from 'moment'

class Calendar extends Component {

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
      this.state.startDate.format('YYYY-MM-DD')

    const endDateString = this.state.endDate &&
      this.state.endDate.format('YYYY-MM-DD')

    if(this.state.loading) {
      return(<p>Loading availability…</p>)
    } else {
      return (
        <div>
          <DateRangePicker
            startDate={this.state.startDate}
            endDate={this.state.endDate}
            onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })}
            focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
            onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
            isDayBlocked={this.isDayBlocked}
            numberOfMonths={1} />
          <input type="hidden" value={startDateString || ""} name="entry.1804760333" />
          <input type="hidden" value={endDateString || ""} name="entry.1918302671" />
        </div>
      )
    }
  }
}

export default Calendar
