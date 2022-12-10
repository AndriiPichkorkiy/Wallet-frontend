import React from 'react';
import { PropagateLoader } from "react-spinners";
import { Wrapper, WrapperBig } from './Loader.styled';



function Loader() {
  return (
    <Wrapper>
      <PropagateLoader color="#FFFFFF" />
    </Wrapper>
  );
}
function LoaderWrapper() {
  return (
    <WrapperBig>
      <Wrapper>
        <PropagateLoader color="#24cca7" />
      </Wrapper>
    </WrapperBig>
  );
}

export default Loader;
export { LoaderWrapper };