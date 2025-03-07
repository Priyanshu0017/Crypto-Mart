import React, { useState } from 'react'
import { useNavigate } from 'react-router'

const Searchform = () => {

  const [text,setText] = useState('')
  const navigate = useNavigate()
  const handleSubmit = (e) =>{
    e.preventDefault()
    navigate(`/coin/search/${text}`)
    setText("")
  }

  return (
    <>
      <h1 className="text-4xl text-center text-gray-400 my-1 font-black">
        Search Any Crypto Coin
      </h1>
      <p className="mt-2 mb-4 text-gray-600 text-sm">Get the latest updates related to any crypto currency</p>
      <form onSubmit={(e)=> handleSubmit(e)} className="w-full flex items-center justify-center flex-col md:flex-row">
        <input
          className="border-2 border-gray-400 bg-white w-full md:w-2/4 mr-0 md:mr-4 p-3 rounded-md focus:outline-green-500 placeholder:text-sm placeholder:font-bold"
          type="text"
          placeholder="Search coin"
          required
          value={text}
          onChange={(e)=> setText(e.target.value)}
        />
        <button className="w-full md:w-1/4 p-3 rounded-md bg-green-500 my-2 font-bold text-white hover:bg-green-700 duration-200">
          Search
        </button>
      </form>
    </>
  )
}

export default Searchform
