import { useParams } from 'next/navigation'
import React from 'react'


const page = () => {
    const params = useParams()
    console.log(params)
  return (
    <div>page</div>
  )
}

export default page