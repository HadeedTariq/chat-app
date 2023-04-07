import './App.css'
import Chat from './pages/Chat'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/Login'
import { useUser } from './context/store'
function App() {
  const [{ user }] = useUser()
  const Protection = ({ children }) => {
    if (user) {
      return children
    }
    else {
      return <Navigate to={'/login'} />
    }
  }
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={
            <Protection>
              <Chat />
            </Protection>
          } />
          <Route path='/login' element={<Login />} />
        </Routes>
      </Router>
    </>
  )
}

export default App;