import React from 'react'

const BackBtn = () => {
  return (
    <Link to={"/"} className="p-4  bg-red-500 text-white font-bold upe rounded-md"> <FontAwesomeIcon className="mr-1" icon={faArrowLeft}/>Back</Link>
  )
}

export default BackBtn
