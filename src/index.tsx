import {createRoot} from 'react-dom/client'
import {App} from '@/app/app'
import {BrowserRouter} from 'react-router-dom'
import { ThemeProvider } from '@/app/providers/theme-provider'

const rootElement = document.getElementById('root')

if(!rootElement) {
    throw new Error('Елемент root не найден')
}

const root = createRoot(rootElement)

root.render(
    <BrowserRouter>
        <ThemeProvider>
            <App/>
        </ThemeProvider>
    </BrowserRouter>
)