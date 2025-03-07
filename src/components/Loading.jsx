import React from 'react'

const Loading = () => {
    let theme =true
  return (
    <div
    className={
      theme
        ? "py-16 px-8 md:px-16 bg-gray-900 min-h-[90vh]"
        : "py-16 px-8 md:px-16 min-h-[90vh]"
    }
  >
    <h1 className="text-4xl text-center text-gray-600 my-4 font-black">
      Loading...
    </h1>
  </div>
  )
}

export default Loading
