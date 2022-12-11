import styled from 'styled-components'
import { respondTo } from '../../helpers/respondTo'
// import mediumPinkImg from '../../assets/images/ellipsesBg/EllipsePinkTablet.png'
// import mediumVioletImg from '../../assets/images/ellipsesBg/EllipseVioletTablet.png'

export const MainContainer = styled.div`
  padding: 12px 20px;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  ${respondTo.sm`
   	align-items: normal;
   	min-width: 768px;
   	padding: 32px 32px;`}

  ${respondTo.lg`
  	flex-direction: row;
  	align-items:flex-start;
  	min-width: 1200px;
  	padding: 0 16px;

	`}
`
export const ContainerLeft = styled.div`
  display: flex;
  flex-direction: column;

  ${respondTo.lg`
  height: 100vh;
  padding-top:40px;
  padding-right:70px;
    border-right: 1px solid #E7E5F2;
    box-shadow: inset -1px 0px 0px rgba(0, 0, 0, 0.05), 1px 0px 0px rgba(255, 255, 255, 0.6);
    `};
`
export const ContainerTop = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  ${respondTo.sm`
  align-items: center`}
`

// export const BG = styled.div`
//   background: rgba(255, 255, 255, 0.4);
//   ${respondTo.sm`
//     // content: '';
//     // position: absolute;
//     // z-index: -1;
//     // right: 0;
//     // left: 0;

// 	height: 100%;
//     background-image: url(${p => p.mediumPinkImg}),
//       url(${p => p.violetImg});
//     background-repeat: no-repeat;
//     background-position: right top, left bottom;
//     //backdrop-filter: blur(25px)
// 	`}

//   ${respondTo.lg`
//    background-image: url(${p => p.largePinkImg}),
//       url(${p => p.violetImg})`}
// `
