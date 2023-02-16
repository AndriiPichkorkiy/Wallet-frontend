import styled from 'styled-components'
import { respondTo } from '../../helpers/respondTo.js'

export const Wrapp = styled.div`
  width: 280px;
  height: 80px;
  background: ${({ theme }) => theme.colors.background};
  border-radius: var(--component-border-radius);
  margin-bottom: 32px;
  padding-top: 8px;
  padding-bottom: 11px;
  padding-left: 40px;
  display: grid;
  justify-items: start;
  align-items: center;

  ${respondTo.sm`
        width: 336px;
        margin-top: 28px;
		margin-bottom: 0px;
    `}

  ${respondTo.lg`
        width: 395px;
        margin-bottom: 32px;
    `}
`

export const Text = styled.p`
  font-family: 'Circe';
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.textHeader};
`

export const BalanceH2 = styled.h2`
  font-family: 'Poppins';
  font-weight: 700;
  font-size: 30px;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.mainText};
`
export const Currenty = styled.span`
  font-family: system-ui;
  font-weight: 400;
`
