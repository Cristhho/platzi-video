import React, { useLayoutEffect } from 'react';
import { connect } from 'react-redux';

import { getVideoSource } from '../actions';
import NotFound from '../containers/NotFound';

import '../assets/styles/components/player.scss';

const Player = (props) => {
  const { playing, match: { params: { id } } } = props;

  const hasPlaying = Object.keys(playing).length > 0;

  useLayoutEffect(() => {
    props.getVideoSource(id);
  }, []);

  return hasPlaying ? (
    <div className='Player'>
      <video controls autoPlay>
        <source src={props.playing.source} type='video/mp4' />
      </video>
      <div className='Player-back'>
        <button type='button' onClick={() => props.history.goBack()}>Regresar</button>
      </div>
    </div>
  ) : <NotFound />;
};

const mapStateToProps = (state) => {
  return {
    playing: state.playing,
  };
};

const mapDispatchToProps = {
  getVideoSource,
};

export default connect(mapStateToProps, mapDispatchToProps)(Player);
