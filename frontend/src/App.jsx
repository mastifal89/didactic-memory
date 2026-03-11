import { useState } from 'react'
import axios from 'axios';
import './App.css'
import { useEffect } from 'react';

function App() {
  const [amount, setAmount] = useState();
  const [description, setDescription] = useState();
  const [data, setData] = useState();
  
  const handleAmountChange = (amount) => {
    setAmount(amount)
  }

  const handleDescriptionChange = (description) => {
    setDescription(description)
  }

  const getData = async () => {
    const response = await axios.get('http://localhost:3000/api/transactions')
    if(response) {
      setData(response)
    }
  }

  const handleSave = async () => {
    const response = await axios.post('http://localhost:3000/api/transactions', {
      amount: 123,
      description: "ASD"
    })
  }

  const handleButtonClick = () => {
    handleSave();
  }

  useEffect(() => {
    getData();
  }, [])

  return (
    <>
      <div>
        <input onChange={handleAmountChange} />
        <input onChange={handleDescriptionChange} />
        <button 
          onClick={() => handleButtonClick()}
        >Save</button>
      </div>
    </>
  )
}

export default App
