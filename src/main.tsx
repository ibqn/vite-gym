import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { App } from '@/app'
import '@/index.css'
import { SelectPageProvider } from '@/hooks/use-select-page'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <SelectPageProvider>
      <App />
    </SelectPageProvider>
  </StrictMode>
)
