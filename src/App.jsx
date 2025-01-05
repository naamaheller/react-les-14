import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
import  ProductList  from './ProductList';
import AddProductFrom from './AddProductFrom';

function App() {
  let [arr, setArr] = useState([]);
  const deleteFromArr = (id) => {
    setArr(arr.filter(item => item._id != id))
  }
  const addToArr = (newProduct) => {
    setArr([...arr, newProduct])

  }
  useEffect(() => {
    axios.get("http://localhost:4040/api/product").then(res => {
      console.log(res);
      setArr(res.data)
    }).catch(err => {
      console.log(err)
      alert("לא ניתן להביא את המוצרים" + err.message)
    })
  }, [])
  return (
    <>
    <AddProductFrom add={addToArr}/>
      <ProductList arr={arr} deleteFromArr={deleteFromArr} />

    </>
  )
}

export default App