import React from 'react'
import { PropagateLoader } from 'react-spinners'
import { Wrapper, WrapperBig } from './Loader.styled'

function Loader() {
  return (
    <Wrapper>
      <PropagateLoader color='#4a56e2' />
    </Wrapper>
  )
}

// #24cca7
function LoaderWrapper({ color }) {
  const loaderColor = color ? color : '#4a56e2';
  return (
    <WrapperBig>
      <Wrapper>
        <PropagateLoader color={loaderColor} />
      </Wrapper>
    </WrapperBig>
  )
}

export default Loader
export { LoaderWrapper }
