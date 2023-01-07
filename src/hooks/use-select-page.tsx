import {
  createContext,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
  useState,
} from 'react'

export type SelectPageContextType = {
  selectedPage: string | null
  setSelectedPage: Dispatch<SetStateAction<string | null>>
}

export const SelectPageContext = createContext<SelectPageContextType>(
  {} as SelectPageContextType
)

export type SelectPageProviderProps = {
  children: ReactNode
}

export const SelectPageProvider = ({ children }: SelectPageProviderProps) => {
  const [selectedPage, setSelectedPage] = useState<string | null>(null)

  return (
    <SelectPageContext.Provider value={{ selectedPage, setSelectedPage }}>
      {children}
    </SelectPageContext.Provider>
  )
}
