// Import Component
import Mainpage from './pages/Main';

// import Thene Context
import { ThemeProvider } from "./contexts/ThemeContext";

// Import CSS
import './App.css'

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
