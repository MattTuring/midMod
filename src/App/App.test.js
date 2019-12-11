import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Card from './Card'
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});


describe('App', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<App/>);
    expect(wrapper).toMatchSnapshot();
  });

  it('should update state', () => {
    const mockDelete = jest.fn()
    const wrapper = shallow(<App/>)
    expect(wrapper.state().cards).toEqual([])

    wrapper.instance().cardsUpdater({name:"Christie",date:"12/29",time:"7:00",number:12, mockDelete})

    expect(wrapper.state().cards).toEqual([
        <Card
          date="12/29"
          deleteReservation={mockDelete}
          name="Christie"
          number={12}
          time="7:00"
        />,
      ])
  })


});
