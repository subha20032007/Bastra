
import './App.css'
import { AllRoutes } from './page/AllRoutes'
import { Navbar } from './components/Navbar'
import { useSelector } from 'react-redux'

function App() {
  const store=useSelector((store)=>store.productReducer)
  console.log(store)
  return (
    <>
<Navbar/>
<AllRoutes/>
    </>
  )
}

export default App
