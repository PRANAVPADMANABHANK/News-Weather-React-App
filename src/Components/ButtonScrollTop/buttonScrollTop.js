import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import './buttonScrollTop.css';

const ButtonScrollTop = () => {
  const goToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="scroll-top" onClick={goToTop}>
      <FontAwesomeIcon icon={faArrowUp} className="arrow-icon" />
    </div>
  );
};

export default ButtonScrollTop;
