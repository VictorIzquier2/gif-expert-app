import React from 'react';
import '@testing-library/jest-dom'
import {shallow} from 'enzyme';
import {GifGrid} from '../../components/GifGrid';
import {useFetchGifs} from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');


describe('Pruebas en el <GifGrid />', () => {

  const category = 'One Punch';
  
  test('Debe de mostrarse correctamente', () => {
    
    useFetchGifs.mockReturnValue({
      data: [],
      loading: true
    });

    const wrapper = shallow(<GifGrid category={category} />);
    expect(wrapper).toMatchSnapshot();

  });

  test('debe de mostrar items cuando se cargan imágenes useFetchGifs', () => {

    const gifs = [
      {
        id: 'Dragon Ball',
        url: 'https://media3.giphy.com/media/DzeKll1HYxiYo/giphy.gif?cid=f18a8f9bn8frrg5r778mjk79cowvlr8ixxmqp121maxk18bz&rid=giphy.gif',
        title: 'Dragon Ball'
      },
      {
        id: 'Dragon Ball',
        url: 'https://media3.giphy.com/media/DzeKll1HYxiYo/giphy.gif?cid=f18a8f9bn8frrg5r778mjk79cowvlr8ixxmqp121maxk18bz&rid=giphy.gif',
        title: 'Dragon Ball'
      },
    ];

    useFetchGifs.mockReturnValue({
      data: gifs,
      loading: false
    });

    const wrapper = shallow(<GifGrid category={category} />);

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('p').exists()).toBe(false);
    expect(wrapper.find('GifGridItem').length).toBe(gifs.length);

  });

});