import { SelectedPage } from '@/hooks/use-select-page'
import { Section } from '@/components/section'
import { motion } from 'framer-motion'
import { HTitle } from '@/components/h-title'
import { ourClasses } from './items'
import { OurClassItem } from '@/components/our-class-item'

type Props = {}

export const OurClasses = (props: Props) => {
  return (
    <div className="bg-primary-100">
      <Section page={SelectedPage.OUR_CLASSES} className="h-[1000px]  py-40">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 'some' }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <HTitle>our classes</HTitle>
            <p className="py-5">
              Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est
              tellus quam porttitor. Mauris velit euismod elementum arcu neque
              facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit
              enim mattis odio in risus nunc.
            </p>
          </div>
        </motion.div>

        <div className="xxh-[353px] mt-10 w-full overflow-x-auto">
          <ul className="flex w-fit flex-row gap-x-5">
            {ourClasses.map((classItem, index) => {
              return <OurClassItem ourClass={classItem} key={index} />
            })}
          </ul>
        </div>
      </Section>
    </div>
  )
}
