import React from 'react';
import { PropagateLoader } from "react-spinners";
import { Wrapper } from './Loader.styled';



function Loader() {
  return (
    <Wrapper>
      <PropagateLoader color="#4a56e2"/>
    </Wrapper>
  );
}

export default Loader;