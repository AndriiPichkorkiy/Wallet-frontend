import styled from 'styled-components'

export const Button = styled.button`
  color: var(--main-text);
  min-width: 100px;
  font-family: 'Circe';
  margin-top: 15px;
  margin-right: 15px;
  padding: 5px 15px;
  font-size: 16px;
  font-weight: 700;
  border: 1px solid var(--activeColor);
  border-radius: 20px;
  background: linear-gradient(90deg, #000, #fff, #000);
  background-repeat: no-repeat;
  background-size: 80%;
  animation: animate 15s linear infinite;
  -webkit-background-clip: text;
  -webkit-text-fill-color: #0f0f8a93;

  box-shadow: -4px 4px 6px 0 rgba(255, 255, 255, 0.5),
    -4px 4px 6px 0 rgba(116, 125, 139, 0.5),
    inset -4px -4px 6px 0 rgba(255, 255, 255, 0.5),
    inset -4px -4px 6px 0 rgba(0, 0, 0, 0.4);
  &:last-child {
    margin-right: 0;
  }
  @keyframes animate {
    0% {
      background-position: 100%;
    }
    100% {
      background-position: 500%;
    }
  }

  &:hover,
  &:focus {
    background: var(--activeColor);
    color: var(--background);
    background-image: linear-gradient(315deg, #4a56e2 0%, #ffd8d0a6 74%);
  }
`
