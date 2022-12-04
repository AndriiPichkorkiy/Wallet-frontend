import icons from '../../assets/images/icons/iconsd.svg';


function Icons({ name, width, height }) {
  return(
    <svg width={width} height={height}>
        <use href={`${icons}#icon-${name}`} />
    </svg>
  )
}



export default Icons;