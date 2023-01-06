import { useState } from 'react'
import { Navbar } from '@/components/navbar'

export const App = () => {
  const [count, setCount] = useState(0)

  return (
    <div className="bg-gray-20">
      <Navbar />
    </div>
  )
}
