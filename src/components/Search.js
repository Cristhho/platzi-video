import React from 'react';
import classnames from 'classnames';
import { connect } from 'react-redux';

import { searchVideos } from '../actions';

import '../assets/styles/components/search.scss';

const Search = (props) => {
  const { isHome } = props;
  const inputStyle = classnames('input', {
    isHome,
  });

  const handleSearch = (event) => {
    props.searchVideos(event.target.value);
  };

  return (
    <section className='main'>
      <h2 className='main__title'>¿Qué quieres ver hoy?</h2>
      <input type='text' className={inputStyle} placeholder='Buscar...' onChange={handleSearch} />
    </section>
  );
};

const mapDispatchToProps = {
  searchVideos,
};

export default connect(null, mapDispatchToProps)(Search);
