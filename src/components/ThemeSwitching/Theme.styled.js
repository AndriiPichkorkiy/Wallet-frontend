export const light = {
  name: 'light theme',
  id: 0,
  colors: {
    accentPrimary: '#24cca7',
    accentSecondary: '#ff6596',
    activeColor: '#4a56e2',
    paleActiveColor: '#6e78e8',
    background: '#ffffff',
    backgroundBody: '#e7eaf2',
    mainText: '#000000',
    textHeader: '#bdbdbd',
    textPlaceholder: '#bdbdbd',
    overlay: 'rgba(255, 255, 255, 0.25)',
    dashboardLineSeparationColor: '#E7E5F2',

    //mui data grid:
    muiScrollbar: 'rgba(36,204,167, 0.6)',
    muiBorderBottom: '#DCDCDF',
    muiBoxShadow: 'rgba(255, 255, 255, 0.6)',
    muiFooterBgColor: 'rgba(255, 255, 255, 0.3)',

    //chart:
    chartArchColor1: '#bdbdbd',
    chartArchColor2: '#e0e0e0',
    chartSelectBg: 'rgba(255, 255, 255, 0.7)',
    chartInputBorderColor: '#e0e0e0', // the same as inputBorderBottom

    //currency component:
    moonLoaderColor: '#ffffff',

    //modal transactions:
    addBtnShadow1: 'rgba(255, 255, 255, 0.5)',
    addBtnShadow2: 'rgba(116, 125, 139, 0.5)',
    addBtnShadow3: 'rgba(255, 255, 255, 0.5)',
    addBtnShadow4: 'rgba(0, 0, 0, 0.5)',

    inputBorderBottom: '#e0e0e0',
    addBtnFocusGradientFirstColor: '#89d891',
    addBtnFocusGradientSecondColor: '#03c8a8',
    cancelBtnFocusGradientSecondColor: '#ffd8d0a6',
    btnSwitcherShadowColor: 'rgba(0, 0, 0, 0.25)'
  }
}
/* 
${({ theme }) => theme.colors.background}
const themeContext = useContext(ThemeContext)
themeContext.colors.background
*/
export const lightInvert = {
  name: 'light invert theme',
  id: 1,
  colors: {
    accentPrimary: '#DB3358',
    accentSecondary: '#009A69',
    activeColor: '#B5A91D',
    paleActiveColor: '#918717',
    background: '#000000',
    backgroundBody: '#18150D',
    mainText: '#ffffff',
    textHeader: '#424242',
    textPlaceholder: '#424242',
    overlay: 'rgba(0, 0, 0, 0.25)',
    dashboardLineSeparationColor: '#181a0d',

    //mui data grid:
    muiScrollbar: '#DB335899',
    muiBorderBottom: '#232320',
    muiBoxShadow: 'rgba(0, 0, 0, 0.6)',
    muiFooterBgColor: 'rgba(0, 0, 0, 0.3)',

    //chart:
    chartArchColor1: '#424242',
    chartArchColor2: '#1f1f1f',
    chartSelectBg: 'rgba(0, 0, 0, 0.7)',
    chartInputBorderColor: '#1f1f1f', // the same as inputBorderBottom

    //currency component:
    moonLoaderColor: '#000000',

    //modal transactions:
    addBtnShadow1: 'rgba(0, 0, 0, 0.5)',
    addBtnShadow2: 'rgba(139, 130, 116, 0.5)',
    addBtnShadow3: 'rgba(0, 0, 0, 0.5)',
    addBtnShadow4: 'rgba(255, 255, 255, 0.4)',
    inputBorderBottom: '#1f1f1f',
    addBtnFocusGradientFirstColor: '#76276e',
    addBtnFocusGradientSecondColor: '#fc3757',
    cancelBtnFocusGradientSecondColor: '#00272fa6',
    btnSwitcherShadowColor: 'rgba(255, 255, 255, 0.25)'
  }
}

const themeList = [light, lightInvert]
export default themeList
