import {memo} from 'react'
import styles from './app.module.scss'

export const App = memo(() => {
    return (
        <div className={styles.app}>Nice</div>
    )
})