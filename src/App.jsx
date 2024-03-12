import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {
  const [amount, setAmount]= useState(0)
  const[from, setFrom]= useState('usd')
  const[to, setTo]= useState('inr')
  const [convertedAmount, setConvertedAmount] = useState(0)

  const CurrencyInfo =useCurrencyInfo(from)
  const options= Object.keys(currencyInfo)

  const swap=()=>{
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const convert= () =>{
    setConvertedAmount(amount*currencyInfo)
  }

  return (
    <div className='w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat bg-center'
      style={{backgroundImage: 'url(https://cdn.pixabay.com/photo/2019/10/07/00/00/nepalese-rupee-4531416_1280.png)'}}>

      <div>

      </div>
    </div>
  )
}

export default App
