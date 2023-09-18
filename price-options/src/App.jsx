import './App.css'
import PriceOptions from './Components/PriceOptions/PriceOptions'
import DaisyNav from './Components/dasiyNav/DaisyNav'
import Navbar from './Components/dasiyNav/Navbar'
import LineChart from './PriceOption/LineChart/LineChart'
import Phones from './PriceOption/Phones/Phones'

function App() {


  return (
    <>
      <Navbar></Navbar>
      {/* <DaisyNav></DaisyNav> */}
      <h1 className='text-7xl bg-rose-600 text-white'>Vite + React</h1>
      <PriceOptions></PriceOptions>
      <LineChart></LineChart>
      <Phones></Phones>
      
    </>
  )
}

export default App
