import React,{useState} from 'react'
import { hideCVC } from '../utils/hideCVC'


const CreditCardBack = ({cvc,isFlipped}) => {

  return (
    <div  className={`bg-center bg-cover bg-[url('https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] absolute mx-auto w-[400px] h-[200px] bg-indigo-600 p-3 rounded-xl flex flex-col justify-between transform transition-all duration-[700ms] ${isFlipped ? " z-50 " : 'rotateY'}`}>
          <h1 className='text-left text-xs font-bold'>24-hours customer service: 1-3000-22-9922</h1>
          <div className='flex flex-col gap-2'>
            <div className='bg-black h-10'></div>
            <div className='flex gap-3'>
              <div className='flex-grow bg-white'>
                <p className='text-black text-right mr-3'>cvc: {hideCVC(cvc)}</p>
              </div>
              <h1 className='w-40 text-xs break-words'>Authorised signature not valid unless signed</h1>
            </div>

          </div>
          <div className='flex justify-end gap-3 place-items-end'>
            <h1 className='text-red-600 font-bold text-xl text-right'>AmBank</h1>
            <h1 className='font-bold text-3xl text-right'>VISA</h1>
          </div>
    </div>
  )
}

export default CreditCardBack
