import { Section } from '@/components/section'
import { SelectedPage } from '@/hooks/use-select-page'

type Props = {}

export const ContactUs = (props: Props) => {
  return (
    <Section page={SelectedPage.CONTACT_US} className="h-[1000px] bg-red-200">
      ContactUs
    </Section>
  )
}
