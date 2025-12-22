import Rewards from './pages/Rewards'
import { BrowserRouter as Router  } from "react-router-dom";
import { Routes, Route } from 'react-router-dom'
  
function App() {
 

  return (
    <>
      <Router>
        <Routes >
          <Route path="/" element={<Rewards />} />       
      </Routes>
              </Router>
    </>
  )
}

export default App
