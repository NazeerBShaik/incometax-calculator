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

    if (netincome === 0 || deductions === 0){
      alert('Please enter valid data')
    }else{
      let income = (netincome - deductions)
      setIncome(income.toFixed(1))
       
      if(income <= 250000){
      setResult(0)
      }else if(income > 250000 && income <= 500000){
      setResult((250000-income)*(5/100)) 
      }else if(income > 500000 && income <= 750000){
        setResult((250000-income)*(5/100) + (500000-income)*(10/100))
      }else if(income > 750000 && income <= 1000000){
        setResult((250000-income)*(5/100) + (500000-income)*(10/100) + (750000-income)*(15/100))
      }else if(income > 1000000 && income <= 1250000){
        setResult((250000-income)*(5/100) + (500000-income)*(10/100) + (750000-income)*(15/100) + (1000000-income)*(20/100))
      }else if(income > 1250000 && income <= 1500000){
        setResult((250000-income)*(5/100) + (500000-income)*(10/100) + (750000-income)*(15/100) + (1000000-income)*(20/100) + (1250000-income)*(25/100))   
      }else if(income > 1500000){
        setResult((250000-income)*(5/100) + (500000-income)*(10/100) + (750000-income)*(15/100) + (1000000-income)*(20/100) + (1250000-income)*(25/100) + (1500000-income)*(30/100))   
      }
    }
  
  }
  const f1=()=>setNetincome('');
  const f2=()=>setDeductions('');
  const f3=()=>setIncome('');
  const f4=()=>setResult('');
  
  return (
    <div className='main'>
      <div className="overlay"></div>
      <video src={video} autoPlay loop muted />
      <div className='content'>
        <div>
          <form className='form-container' onSubmit={calcTax} >
            <legend>Tax Calculator</legend>
            <label>Estimated Annual Income </label>
            <input type="number" value={netincome} onChange={(e) => setNetincome(e.target.value)}></input>
            <label>Less: Exemptions/Deductions</label>
            <input type="number" value={deductions} onChange={(e) => setDeductions(e.target.value)}></input>
            <button className='submit-btn' type='submit'>Submit</button>
          </form>
        </div>
        <div>
          <h4>Tax payable Income :{income}</h4>
          <h4>Income Tax :{result}</h4>
          <button className='submit-btn' type='submit' onClick={()=>{f1();f2();f3();f4()}}>Reload</button>
        </div>
      </div>
    </div>  
  );
}

export default App;
