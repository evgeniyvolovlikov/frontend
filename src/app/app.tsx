import {memo, Suspense} from 'react'
import {Link, Route, Routes} from 'react-router-dom'
import {AboutPage} from '@/pages/about-page'
import {MainPage} from '@/pages/main-page'
import {useTheme} from './providers/theme-provider'
import {classNames} from '@/shared/lib/classnames/classnames'
import './styles/index.scss'

export const App = memo(() => {
    const {theme, toggleTheme} = useTheme()
    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>TOGGLE</button>
            <Link to={'/'}>Главная</Link> 
            <Link to={'/about'}>O сайте</Link> 
            <Suspense fallback={<div>Loading</div>}>
                <Routes>
                    <Route path={'/about'} element={<AboutPage/>} />
                    <Route path={'/'} element={<MainPage/>} />
                </Routes>
            </Suspense>
        </div>
    )
})