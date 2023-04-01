import { type Benefit } from '@/components/benefits/items'

type Props = {
  benefit: Benefit
}

export const BenefitItem = ({ benefit }: Props) => {
  const { icon: Icon, title, description } = benefit
  return (
    <div>
      <div className="mb-5 flex justify-center">
        <div className="rounded-full border-2 border-gray-100 bg-primary-100 p-4">
          {<Icon className="h-6 w-6" />}
        </div>
      </div>

      <h4 className="font-bold">{title}</h4>
      <p className="my-3">{description}</p>
    </div>
  )
}
