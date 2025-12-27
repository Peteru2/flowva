import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Rewards from './pages/Rewards'
import ProtectedRoute from "./routes/ProtectedRoute"

  
function App() {
 

  return (
    <>
      <AuthProvider>
      <BrowserRouter>
        <Routes >   
          <Route path="/" element={<Navigate to="/rewards" replace />} />
          <Route path="/login" element={<Login />} />  
          <Route path="/signup" element={<Signup />} />  
<Route
            path="/rewards"
            element={
              <ProtectedRoute>
                <Rewards />
              </ProtectedRoute>
            }
          />
      </Routes>
             </BrowserRouter>
    </AuthProvider>
    </>
  )
}

export default App
