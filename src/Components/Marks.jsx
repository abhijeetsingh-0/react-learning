import { useState } from "react";

const Marks = () => {

    const [marks, setMarks] = useState(80)

  return (
    <>
    <h1>My total marks are {marks} </h1>
    <button onClick={() => {setMarks(marks + 10)}} className="bg-emerald-600 px-2 py-1 text-white mt-2 rounded">Update</button>
    </>
  )
}

export default Marks