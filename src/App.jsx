import { useState } from 'react'
import './App.css'
import CreditCardFront from './components/CreditCardFront'
import CreditCardBack from './components/CreditCardBack'



const initialState = {
  name : "",
  cardNumber : "",
  cvc: ""
}


function App() {
  const [details, setDetails] = useState(initialState)
  const [isFlipped, setIsFlipped] = useState(false);
  const [date, setDate] = useState(new Date());


  const handleSetDetails = (e) => {
    const {name, value} = e.target
    setDetails(prev => ({...prev,[name]:value}))
  }

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className=' w-full h-full'>
      
      <div className='relative flex flex-col h-[500px] w-3/4 mx-auto justify-end p-4 bg-[#e4e9e9] shadow-lg  rounded-md '>
        <div className='absolute top-9 left-1/4'>
          <CreditCardBack cvc={details.cvc} isFlipped={isFlipped}/>
          <CreditCardFront name={details.name} cardNumber={details.cardNumber} isFlipped={isFlipped}/>
          
        </div>
        <div className='flex flex-col place-items-start'>

          <label htmlFor="name" className='text-sm text-black font-semibold ' >Card Holder Name:</label>
          <input type="text" id="name"  name="name" value={details.name}  onChange={handleSetDetails} className='bg-slate-300 p-2 w-full rounded-md mb-3' />

          <label htmlFor='cardNumber' className='text-sm  text-black font-semibold '>Card Number:</label>
          <input type="text" id="cardNumber"  pattern="[0-9]{16}" maxLength="16" name="cardNumber" value={details.cardNumber}  onChange={handleSetDetails} className='bg-slate-300 p-2 w-full rounded-md mb-3' />
          
          <label htmlFor='cvc' className='text-sm  text-black font-semibold '>CVC:</label>
          <input onFocus={handleFlip} onBlur={handleFlip} type="password" id="cvc"  pattern="[0-9]{3}" maxLength="3"  name="cvc" value={details.cvc}  onChange={handleSetDetails} className='bg-slate-300 p-2  rounded-md mb-3' />
        </div>
      </div>
      {/* <h1 onClick={handleFlip} className='bg-indigo-400  p-4'>click me</h1> */}
    </div>
    
  )
}

export default App
