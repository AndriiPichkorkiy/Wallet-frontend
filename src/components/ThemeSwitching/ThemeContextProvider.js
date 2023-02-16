import { useState } from 'react'
import { createContext } from 'react'
import { light } from './Theme.styled'

const ThemeContext = createContext()

export default function ThemeContextProvider({ children }) {
  const [currentTheme, setCurrentTheme] = useState(light)

  const changeTheme = theme => {
    setCurrentTheme(theme)
  }
  return (
    <ThemeContext.Provider value={{ currentTheme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export { ThemeContext }
