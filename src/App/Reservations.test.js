import React from 'react';
import ReactDOM from 'react-dom';
import Reservation from './Reservation';
import App from './App'
import { shallow } from 'enzyme';

describe('Reservation', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<Reservation
    />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should call function on click', () =>{
    const newRes = jest.fn();
  const wrapperApp = shallow(<App
    />)
  const wrapper = shallow(<Reservation
    newRes={newRes}
  />)

  wrapper.find('button').simulate('click')

   expect(newRes).toHaveBeenCalledWith(wrapper.state())
 })

 it('should set state on change', () =>{
const newRes = jest.fn();
 const wrapper = shallow(<Reservation
   newRes={newRes}
 />)

 wrapper.find('input').first().simulate('onChange')

  expect(wrapper.state()).toEqual({"date": "", "name": "", "number": "", "time": ""})
})

it('should call a function on click', () => {

  window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockResponse)
      })
    })
    const newRes = jest.fn();
  const wrapper = shallow(<Reservation
    newRes={newRes}
    />)

  wrapper.find('button').simulate('click')

  wrapper.instance().sendFetch(JSON.stringify({name:"Christie",date:"12/29",time:"7:00",number:12}))

  expect(window.fetch).toHaveBeenCalledWith("http://localhost:3001/api/v1/reservations", {"body": {"date": "", "name": "", "number": "", "time": ""}, "method": "POST"})
})

});
