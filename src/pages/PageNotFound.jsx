import React from 'react'

const PageNotFound = () => {

  const {theme} = useSelector(state => state.theme)

  return (
    <div
    className={
      theme
        ? "py-16 px-8 md:px-16 bg-gray-900 min-h-[90vh]"
        : "py-16 px-8 md:px-16 min-h-[90vh]"
    }
  >
    <h1 className="text-4xl text-center text-red-500 my-4 font-black">
      404
    </h1>
    <h1 className="text-4xl text-center text-red-500 my-4 font-black">
      PAGE NOT FOUND
    </h1>
  </div>
  )
}

export default PageNotFound
