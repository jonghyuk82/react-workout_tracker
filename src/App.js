import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import NavigationBar from './components/NavigationBar'
import Exercise from './pages/Exercise'

function App() {
  return (
    <>
      <Router>
        <NavigationBar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/exercise' element={<Exercise />}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
