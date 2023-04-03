import { Navbar } from '@/components/navbar'
import { Home } from '@/components/home'
import { Benefits } from '@/components/benefits'
import { OurClasses } from '@/components/our-classes'
import { ContactUs } from '@/components/contact-us'
import { Footer } from '@/components/footer'

export const App = () => {
  return (
    <div className="w-full overflow-x-hidden bg-gray-20">
      <Navbar />
      <Home />
      <Benefits />
      <OurClasses />
      <ContactUs />
      <Footer />
    </div>
  )
}
