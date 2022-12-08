import React from 'react';
import { PropagateLoader } from "react-spinners";
import { Wrapper, WrapperBig } from './Loader.styled';



function Loader() {
  return (
    <Wrapper>
      <PropagateLoader color="#4a56e2" />
    </Wrapper>
  );
}
function LoaderWrapper() {
  return (
    <WrapperBig>
      <Loader />
    </WrapperBig>
  );
}

export default Loader;
export { LoaderWrapper };