import React,{useState} from 'react';
import video from './video.mp4';
import './App.css';

function App() {
  const [netincome, setNetincome] = useState('');
  const [deductions, setDeductions] = useState('');
  const [income, setIncome] = useState('');
  const [oldResult, setOldResult] = useState('');
  const [newResult, setNewResult] = useState('');
   
  let calcTaxOld = () => {
    
    if (netincome === '' || deductions === ''){
      alert('Please enter valid data')
    }
    else{
      let income = (netincome - deductions)
      setIncome(income.toFixed(2))
        
      if(income <= 250000){
        setOldResult(0)
        console.log(oldResult);

      }else if(income > 250000 && income <= 500000){
        setOldResult(((income-250000)*(5/100))+((income-250000)*(5/100))*(4/100))
        console.log(oldResult);

      }else if(income > 500000 && income <= 1000000){
        setOldResult((12500 + (income-500000)*(20/100))+(12500 + (income-500000)*(20/100))*(4/100))
        console.log(oldResult);

      }else if(income > 1000000){
        setOldResult((102500 + (income-1000000)*(30/100))+(102500 + (income-1000000)*(30/100))*(4/100))
        console.log(oldResult);
      }    
    }
  }

  let calcTaxNew = () => {
    
    if (netincome === '' || deductions === ''){
      alert('Please enter valid data')
    }else{
      let income = (netincome - 0)
      setIncome(income.toFixed(1))

      if(income <= 250000){
        setNewResult(0)
        console.log(newResult);

      }else if(income > 250000 && income <= 500000){
        setNewResult((income-250000)*(5/100)+((income-250000)*(5/100))*(4/100)) 
        console.log(newResult);

      }else if(income > 500000 && income <= 750000){
        setNewResult(12500 + (income-500000)*(10/100)+(12500 + (income-500000)*(10/100))*(4/100))
        console.log(newResult);

      }else if(income > 750000 && income <= 1000000){
        setNewResult(37500 + (income-750000)*(15/100)+(37500 + (income-750000)*(15/100))*(4/100))
        console.log(newResult);

      }else if(income > 1000000 && income <= 1250000){
        setNewResult(75000 + (income-1000000)*(20/100)+(75000 + (income-1000000)*(20/100))*(4/100))
        console.log(newResult);

      }else if(income > 1250000 && income <= 1500000){
        setNewResult(125000 + (income-1250000)*(25/100)+(125000 + (income-1250000)*(25/100))*(4/100))   
        console.log(newResult);

      }else if(income > 1500000){
        setNewResult(187500 + (income-1500000)*(30/100)+(187500 + (income-1500000)*(30/100))*(4/100))   
        console.log(newResult);
      }
    }
  }
  
  
  let submit = async (e)=>{
    e.preventDefault();
     
    calcTaxNew();
    calcTaxOld();
  }
  
  const f1=()=>setNetincome('');
  const f2=()=>setDeductions('');
  const f3=()=>setIncome('');
  const f4=()=>setNewResult('');
  const f5=()=>setOldResult('');

  return (
    <div className='main'>
      <div className="overlay"></div>
      <video src={video} autoPlay loop muted />
      <div className='content'>
        <div>
          <form className='form-container' onSubmit={submit} >
            <legend>Tax Calculator</legend>
            <label>Total Annual Income </label>
            <input type="number" value={netincome} onChange={(e) => setNetincome(e.target.value)}></input>
            <label>Total: Exemptions/Deductions</label>
            <input type="number" value={deductions} onChange={(e) => setDeductions(e.target.value)}></input>
            <button className='submit-btn' type='submit'>Submit</button>
          </form>
        </div>
        <div className='result'>
          <h6>Net Tax payable Income</h6>
          <h6>{income}</h6>
          <h6>Income Tax For Old Slab Rate</h6>
          <h6>{oldResult}</h6>
          <h6>Income Tax For New Slab Rate</h6>
          <h6>{newResult}</h6>
          <button className='submit-btn' type='submit' 
          onClick={()=>{f1();f2();f3();f4();f5()}}
          >Reload</button>
        </div>
      </div>
    </div>  
  );
}

export default App;
