import { useContext } from "react"
import { GlobalStyles } from "./globalStyles/styles"
import { AppRoute } from "./routes"
import { ThemeContext } from "./contexts/theme-contexts"

function App() {
  
    const { theme } = useContext(ThemeContext)
  return (

   <>
      <GlobalStyles theme={theme} />
      <AppRoute />
   </>
  )
}

export default App
