import React from 'react';
import {shallow} from 'enzyme';
import {GifGridItem} from '../../components/GifGridItem';

describe('Pruebas en <GifGridItem />', () => {
  
  const title = 'Goku comiendo';
  const url = 'https://media3.giphy.com/media/DzeKll1HYxiYo/giphy.gif?cid=f18a8f9bn8frrg5r778mjk79cowvlr8ixxmqp121maxk18bz&rid=giphy.gif'
  const wrapper = shallow(<GifGridItem title={title} url={url} />)

  test('Debe de mostrar el componente correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  })

  test('Debe de tener un párrafo con el título', () => {
    
    const p = wrapper.find('p');
    expect(p.text().trim()).toBe(title);
  });

  test('Debe de tener la imagen igual al url y alt de los props', () => {
    const img = wrapper.find('img');
    expect(img.prop('src')).toBe(url);
    expect(img.prop('alt')).toBe(title);
  })

});