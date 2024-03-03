import React,{useState} from 'react'
import { displayCcNumber } from '../utils/displayCCNumber'

const CreditCardFront = ({name,cardNumber,isFlipped}) => {
  return (
    <div className={`bg-center bg-cover bg-[url('https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] absolute  w-[400px]  h-[200px] bg-indigo-600 p-3 rounded-xl flex flex-col justify-between transform transition-all duration-700   ${isFlipped ?  'rotateY ' :""}`}>
      <div className='flex flex-row justify-between'>
        <div className='font-bold text-3xl'>Royal Bank</div>
        <h1 className='font-bold text-3xl'>VISA</h1>
      </div>
      
      <h2 className='tracking-widest font-semibold text-left text-xl'>{displayCcNumber(cardNumber)}</h2>
    
      <div className='flex justify-between '>
        <div>
            <h1 className='text-left text-sm'>Card holder:</h1>
            <p className='font-semibold text-left'>{name === "" ? "John Doe"  : name}</p>
        </div>
        <div>
            <h1 className='text-sm'>Expiry date:</h1>
            <p className='text-left font-semibold'>11/24</p>
        </div>
      </div>
    </div>
  )
}

export default CreditCardFront
