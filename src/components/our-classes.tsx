import { SelectedPage } from '@/hooks/use-select-page'
import { Section } from '@/components/section'

type Props = {}

export const OurClasses = (props: Props) => {
  return (
    <Section
      page={SelectedPage.OUR_CLASSES}
      className="h-[1000px] bg-yellow-200"
    >
      OurClasses
    </Section>
  )
}
