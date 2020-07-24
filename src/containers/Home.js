import React from 'react';

import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import useInitialState from '../hooks/useInitialState';

import '../assets/styles/app.scss';

const API = 'http://localhost:3000/initialState';

export default function Home() {

  const initialState = useInitialState(API);

  return (
    <>
      <Search />

      {
        initialState.mylist.length > 0 && (
          <Categories title='Mi lista'>
            <Carousel>
              {
                initialState.mylist.map((item) => <Carousel key={item.id} {...item} />)
              }
            </Carousel>
          </Categories>
        )
      }

      <Categories title='Tendencias'>
        <Carousel>
          {
            initialState.trends.map((item) => <CarouselItem key={item.id} {...item} />)
          }
        </Carousel>
      </Categories>

      <Categories title='Originales de Platzi'>
        <Carousel>
          {
            initialState.originals.map((item) => <CarouselItem key={item.id} {...item} />)
          }
        </Carousel>
      </Categories>
    </>
  );
}
