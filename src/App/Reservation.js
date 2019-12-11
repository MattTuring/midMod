import React from 'react';

class Reservation extends React.Component {
  constructor(props) {
    console.log(props.newRes)
    super(props)
    this.state = {
        name: '',
        date: '',
        time: '',
        number: ''
    }
  }

sendFetch = () => {
  fetch('http://localhost:3001/api/v1/reservations', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(this.state)
    })
  }


//New reservation: { id: 18939837, name: 'Leta', date: '12/3', time: '6:30', number: 2 }
  render() {
    return (
      <section>
        <input onChange={(event) => this.setState({name: event.target.value},() => {console.log(this.state)})} placeholder='Name'type='text'/>
        <input onChange={(event) => this.setState({date: event.target.value},() => {console.log(this.state)})} placeholder='Date ex. 12/3'type='text'/>
        <input onChange={(event) => this.setState({time: event.target.value},() => {console.log(this.state)})} placeholder='Time ex. 6:30'type='text'/>
        <input onChange={(event) => this.setState({number: parseInt(event.target.value)},() => {console.log(this.state)})} placeholder='Total People'type='number'/>
        <button onClick={() => {
          this.props.newRes(this.state)
          this.sendFetch()
        }}>Submit</button>
      </section>
    )
  }

}


export default Reservation
