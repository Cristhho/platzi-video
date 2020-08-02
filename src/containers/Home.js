import React from 'react';
import { connect } from 'react-redux';

import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';

import '../assets/styles/app.scss';

const Home = ({ mylist, trends, originals, searchResults }) => {

  let output = null;
  if (searchResults.length > 0) {
    output = (
      <Categories title='Resultados de la busqueda'>
        <Carousel>
          {searchResults.map((item) => <CarouselItem key={item.id} {...item} />)}
        </Carousel>
      </Categories>
    );
  } else {
    output = (
      <>
        {
          mylist.length > 0 && (
            <Categories title='Mi lista'>
              <Carousel>
                {mylist.map((item) => <CarouselItem key={item.id} {...item} isList />)}
              </Carousel>
            </Categories>
          )
        }
        <Categories title='Tendencias'>
          <Carousel>
            {
              trends.map((item) => <CarouselItem key={item.id} {...item} />)
            }
          </Carousel>
        </Categories>

        <Categories title='Originales de Platzi'>
          <Carousel>
            {
              originals.map((item) => <CarouselItem key={item.id} {...item} />)
            }
          </Carousel>
        </Categories>
      </>
    );
  }

  return (
    <>
      <Header />
      <Search isHome />

      {output}

    </>
  );
};

const mapStateToProps = (state) => {
  return {
    mylist: state.mylist,
    trends: state.trends,
    originals: state.originals,
    searchResults: state.searchResults,
  };
};

export default connect(mapStateToProps, null)(Home);
