import { useState } from 'react'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [Principle, setPrinciple] = useState(0);
  const [Year, setYear] = useState(0);
  const [Rate, setRate] = useState(0);
  const [Interest, setInterest] = useState(0);

  return (
    <>
    <div className='d-flex justify-content-center align-items-center' style={{width:'100%',height:'100vh'}}>
      <div className='bg-light p-4 border rounded-4' style={{width:'450px'}} >
        <h2 className=''>Simple Interest Application</h2>
        <p className='card-text'>Calculate your simple interest easily</p>
        <div className='mt-5 flex-column rounded-5 shadow bg-success d-flex justify-content-center align-items-center p-4'>
          <h2>₹ 0</h2>
          <h5>Total Simple Interest</h5>
        </div>
          <form action="" className='mt-5'>
            <div className='mb-3'>
            <TextField id="outlined-basic" label="Principle Amount" variant="outlined" className='w-100' />
            </div>
            <div className='mb-3'>
            <TextField id="outlined-basic" label="Rate of Interest" variant="outlined" className='w-100' />
            </div>
            <div className='mb-3'>
            <TextField id="outlined-basic" label="Year" variant="outlined" className='w-100' />
            </div>
            <div className='d-flex justify-content-between mt-4'>
            <Button variant="contained" className='' color='success' style={{width:'190px',height:'60px'}}>CALCULATE</Button>
             <Button variant="outlined" className='' style={{width:'190px',height:'60px'}}>RESET</Button>
            </div>
          </form>
          </div>
       
        
        
   </div>
    </>
  )
}

export default App
