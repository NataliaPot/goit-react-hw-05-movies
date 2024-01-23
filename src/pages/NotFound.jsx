import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <>
      <button onClick={() => navigate('/')}>&#129136; Go home</button>
      <div>Page is not found</div>
    </>
  );
};

export default NotFound;
