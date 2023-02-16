const ThemeButton = ({ theme, onClick }) => {

  const colorThemeStyle = `
  linear-gradient(45deg, 
    ${theme.colors.accentPrimary} 0%, 
    ${theme.colors.accentPrimary} 20%, 
    ${theme.colors.accentSecondary} 20%, 
    ${theme.colors.accentSecondary} 40%,
    ${theme.colors.activeColor} 40%, 
    ${theme.colors.activeColor} 60%,
    ${theme.colors.background} 60%, 
    ${theme.colors.background} 80%,
    ${theme.colors.mainText} 80%, 
    ${theme.colors.mainText} 100%
    )
    `

  const functionAction = onClick ? onClick : () => { }
  return (
    <div onClick={functionAction} style={!onClick ? { pointerEvents: "none" } : {}}>
      <h3>{theme.name}</h3>
      <div style={{ background: colorThemeStyle, height: "32px", border: "black 1px solid", borderRadius: 8 }}></div>
    </div>
  );
}

export default ThemeButton;

// background: linear - gradient(45deg, rgba(131, 58, 180, 1) 0 %, rgba(131, 58, 180, 1) 32 %, rgba(253, 29, 29, 1) 32 %, rgba(253, 29, 29, 1) 83 %);