import React,{useState} from 'react';
import video from './video.mp4';
import './App.css';

function App() {
  const [netincome, setNetincome] = useState('');
  const [deductions, setDeductions] = useState('');
  const [income, setIncome] = useState('');
  const [result, setResult] = useState('');

  let calcTax = (e) => {
    e.preventDefault();
    if (netincome === '' || deductions === ''){
      alert('Please enter valid data')
    }else{
       let income = (netincome - deductions)
       setIncome(income.toFixed(1))
       
       if(income > 250000 && income <= 500000){
        setResult(income *(5/100))
       }

    }
  
  
  }
  return (
    <div className='main'>
      <div className="overlay"><h1>Income Tax Calculator</h1></div>
      
      <video src={video} autoPlay loop muted />
      <div className='content'>
        <div>
          <form className='form-container' onSubmit={calcTax} >
            <label>Estimated Annual Income </label>
            <input type="number" value={netincome} onChange={(e) => setNetincome(e.target.value)}></input>
            <label>Less: Exemptions/Deductions</label>
            <input type="number" value={deductions} onChange={(e) => setDeductions(e.target.value)}></input>
            <label>some thing</label>
            <input type="number" ></input>
            <button className='submit-btn' type='submit'>Submit</button>         
          </form>
        </div>
        <div>
          <form className='form-container' onClick={(e)=>e.preventDefault()}>
            <label>some thing</label>
            <input type="number" ></input>
            <label>some thing</label>
            <input type="number" ></input>
            <label>some thing</label>
            <input type="number" ></input>
            <button className='submit-btn' type='submit'>Submit</button>
          </form>
        </div>
        
      </div>
    </div>  
  );
}

export default App;

