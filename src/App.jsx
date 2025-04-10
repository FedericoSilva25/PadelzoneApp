import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import PlanillaSemanal from './pages/PlanillaSemanal'
import TareasPorSector from './pages/TareasPorSector'
import ManualesDelClub from './pages/ManualesDelClub'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase'
import { Login, Register, AuthPanel } from './components/AuthViews'

function App() {
  const [current, setCurrent] = useState('Inicio')
  const [user, setUser] = useState(null)

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
    })
    return () => unsub()
  }, [])

  if (!user) {
    return (
      <div className="p-4 flex flex-col gap-6 justify-center items-center min-h-screen bg-gray-100">
        <Login setUser={setUser} />
        <Register setUser={setUser} />
      </div>
    )
  }

  const renderContent = () => {
    switch (current) {
      case 'Inicio':
        return <Home setCurrent={setCurrent} />
      case 'Planilla':
        return <PlanillaSemanal />
      case 'Tareas':
        return <TareasPorSector />
      case 'Manuales':
        return <ManualesDelClub />
      default:
        return <Home setCurrent={setCurrent} />
    }
  }

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar current={current} setCurrent={setCurrent} />
      <AuthPanel user={user} setUser={setUser} />
      {renderContent()}
    </div>
  )
}

export default App
