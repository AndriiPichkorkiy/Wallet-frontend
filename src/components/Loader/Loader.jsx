import React from 'react';
import { PropagateLoader } from "react-spinners";
import { Wrapper } from './Loader.styled';



function Loader() {
  return (
    <Wrapper>
      <PropagateLoader color="#FFFFFF" />
    </Wrapper>
  );
}

export default Loader;