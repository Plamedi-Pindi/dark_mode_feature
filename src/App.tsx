// Import Component
import Mainpage from './pages/Main';

// import Thene Context
import { ThemeProvider } from "./contexts/ThemeContext";

function App() {
  return (
    <>
      <ThemeProvider>
        <Mainpage />
      </ThemeProvider>
    </>
  )
}

export default App
