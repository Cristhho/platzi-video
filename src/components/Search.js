import React from 'react';
import classnames from 'classnames';

import '../assets/styles/components/search.scss';

export default function Search({ isHome }) {
  const inputStyle = classnames('input', {
    isHome,
  });
  return (
    <section className='main'>
      <h2 className='main__title'>¿Qué quieres ver hoy?</h2>
      <input type='text' className={inputStyle} placeholder='Buscar...' />
    </section>
  );
}
