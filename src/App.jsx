import './App.css'
import Home from './components/Home'
import { ChatProvider } from './ChatContext'
import { Route, Routes } from 'react-router-dom'
import Userpage from './components/Userpage'
function App() {
  return (
  <ChatProvider>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/' element={<Userpage/>}/>
      </Routes>
    </ChatProvider>
  )
}

export default App
