import { BrowserRouter as Router  } from "react-router-dom";
import { Routes, Route } from 'react-router-dom'
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Rewards from './pages/Rewards'

  
function App() {
 

  return (
    <>
      <Router>
        <Routes >
          <Route path="/" element={<Rewards />} />     
          <Route path="/login" element={<Login />} />  
          <Route path="/signup" element={<Signup />} />  

      </Routes>
              </Router>
    </>
  )
}

export default App
