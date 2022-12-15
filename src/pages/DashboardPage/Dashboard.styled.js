import styled from 'styled-components'
import { respondTo } from '../../helpers/respondTo'

export const Wrapper = styled.div`
  background: rgba(255, 255, 255, 0.4);
  height: 100%;
  min-height: 100vh;
  ${respondTo.sm`
  backdrop-filter: blur(25px);
  `}
`
export const MainContainer = styled.main`
  padding: 12px 20px;
  margin-left: auto;
  margin-right: auto;

  width: 100%;
  /* height: 100vh; */
  min-height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-top: 85px;
  padding-bottom: 32px;

  ${respondTo.sm`
   	align-items: normal;
   	min-width: 768px;
   	padding: 32px 32px;
    padding-top: 85px;
    height: 100vh;
    `}

  ${respondTo.lg`
  	flex-direction: row;
  	align-items:flex-start;
  	min-width: 1200px;

    padding-top: 85px;
    padding-bottom: 60px;
	`}
`
export const ContainerLeft = styled.div`
  display: flex;
  flex-direction: column;

  ${respondTo.lg`
  height: 100%;
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
  align-items: center;
  margin-top:25px`}
`
