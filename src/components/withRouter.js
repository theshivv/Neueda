import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export const withRouter = (Component) => {
  const Wrapper = (props) => {
    const navigate = useNavigate();
    
    return (
      <Component
        navigate={navigate}
        {...props}
        params={useParams()}
        />
    );
  };
  
  return Wrapper;
};