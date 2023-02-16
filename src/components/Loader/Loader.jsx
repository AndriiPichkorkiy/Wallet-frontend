import React, { useContext } from 'react'
import { PropagateLoader } from 'react-spinners'
import { ThemeContext } from 'styled-components'
import { Wrapper, WrapperBig } from './Loader.styled'

function Loader() {
  const themeContext = useContext(ThemeContext)
  return (
    <Wrapper>
      <PropagateLoader color={themeContext.colors.activeColor} />
    </Wrapper>
  )
}

// #24cca7
function LoaderWrapper({ color }) {
  const themeContext = useContext(ThemeContext)
  const loaderColor = color ? color : (themeContext.colors.activeColor || '#24cca7');
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
