import React, { Component } from 'react';
import './App.css';
import Card from './Card'
import Reservation from './Reservation'

class App extends Component {
  constructor() {
    super()
    this.state = {
      cards: []
    }
  }
//{date, id, name, number, time}
  componentDidMount() {
    fetch('http://localhost:3001/api/v1/reservations')
    .then(response => response.json())
    .then(data => {
      this.setState({cards:
      data.map(reservation => {
      return(
      <Card
        date={reservation.date}
        key={reservation.id}
        id={reservation.id}
        name={reservation.name}
        number={reservation.number}
        time={reservation.time}
        deleteReservation={this.deleteReservation}
      />)
    })
  })})
}

cardsUpdater = (reservation) => {
  let card = (<Card
    date={reservation.date}
    key={reservation.id}
    id={reservation.id}
    name={reservation.name}
    number={reservation.number}
    time={reservation.time}
    deleteReservation={this.deleteReservation}
  />)

  let res = this.state.cards.concat(card)

  this.setState({cards: res})
}

deleteReservation = (id) => {
  fetch(`http://localhost:3001/api/v1/reservations/${id}`,{
    method: 'DELETE'
  })

}

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
        <Reservation newRes={this.cardsUpdater}/>
        </div>
        <div className='resy-container'>
        {this.state.cards}
        </div>
      </div>
    )
  }
}

export default App;
