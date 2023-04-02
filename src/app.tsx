import { Navbar } from '@/components/navbar'
import { Home } from '@/components/home'
import { Benefits } from '@/components/benefits'
import { OurClasses } from '@/components/our-classes'
import { ContactUs } from '@/components/contact-us'

export const App = () => {
  return (
    <div className="bg-gray-20">
      <Navbar />
      <Home />
      <Benefits />
      <OurClasses />
      <ContactUs />
    </div>
  )
}
