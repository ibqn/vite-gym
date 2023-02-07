import { SelectedPage } from '@/hooks/use-select-page'
import { Section } from '@/components/section'

type Props = {}

export const Benefits = (props: Props) => {
  return (
    <Section page={SelectedPage.BENEFITS} className="h-[1000px] bg-blue-300">
      Benefits
    </Section>
  )
}
