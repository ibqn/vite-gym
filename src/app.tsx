import { useState } from 'react'
import { Navbar } from '@/components/navbar'
import { Home } from '@/components/home'
import { Benefits } from '@/components/benefits'

export const App = () => {
  const [count, setCount] = useState(0)

  return (
    <div className="bg-gray-20">
      <Navbar />
      <div className="container mx-auto">
        <Home />
        <Benefits />
        <div id="our-classes" className="h-[1000px] bg-yellow-200"></div>
        <div id="contact-us" className="h-[1000px] bg-red-200"></div>
      </div>
    </div>
  )
}
