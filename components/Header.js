import Image from 'next/image'
import { Button } from './Button'
import styles from '../styles/Header.module.css'

export function Header() {
    return (
        <div className={styles.header__container}>
            <div className={styles.container__menu_navigation}>
                <Image src={'/img/menu.png'}
                    alt="logo La Nación"
                    width={40}
                    height={40}
                />
                <span className={styles.text__menu}>MENÚ</span>
                <input className={styles.input__search} />
            </div>
            <div className={styles.container__img}>
                <span className={styles.text__lanacion}>LA NACION</span>
            </div>
            <div className={styles.container__buttons}>
                <Button styles={styles.button__suscribete} text={'SUSCRIBETE'} />
                <Button styles={styles.button__ingresar} text={'INGRESAR'} />
            </div>
        </div>
    )
}
