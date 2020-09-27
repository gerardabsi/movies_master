import React from 'react';
import Spinner from 'react-bootstrap/Spinner';

import './loader.scss';

export const Loader: React.FC = () => {
  return (
    <div className="loader">
      <Spinner animation="border" />
    </div>
  );
};
