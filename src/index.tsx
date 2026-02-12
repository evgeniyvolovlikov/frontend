import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {App} from './app'

const rootElement = document.getElementById('root')

if(!rootElement) {
    throw new Error('Елемент root не найден')
}

const root = createRoot(rootElement)

root.render(
    <StrictMode>
        <App/>
    </StrictMode>
)