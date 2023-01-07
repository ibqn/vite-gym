import {
  createContext,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
  useState,
} from 'react'

export enum SelectedPage {
  HOME = 'home',
  BENEFITS = 'benefits',
  OUR_CLASSES = 'our-classes',
  CONTACT_US = 'contact-us',
}

export type SelectPageContextType = {
  selectedPage: SelectedPage
  setSelectedPage: Dispatch<SetStateAction<SelectedPage>>
}

export const SelectPageContext = createContext<SelectPageContextType>(
  {} as SelectPageContextType
)

export type SelectPageProviderProps = {
  children: ReactNode
}

export const SelectPageProvider = ({ children }: SelectPageProviderProps) => {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.HOME
  )

  return (
    <SelectPageContext.Provider value={{ selectedPage, setSelectedPage }}>
      {children}
    </SelectPageContext.Provider>
  )
}
