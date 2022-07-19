import Image from 'next/image'
import { Button } from './Button'
import styles from '../styles/Header.module.css'

export const Header = () => {
    return (
        <div>
            <div className={styles.container__menu_navigation}>
                <Image src={'/img/menu.png'}
                    alt="logo La Nación"
                    width={23}
                    height={18}
                />
                <span>MENU</span>
                <input className={styles.input__search} />
            </div>
            <div className={styles.container__img}>
                <Image src={'/img/logo-la-nacion.svg'}
                    alt="logo La Nación"
                    width={420}
                    height={36}
                />
            </div>
            <Button styles={styles.button__suscribete} text={'SUSCRIBETE'} />
            <Button styles={styles.button__ingresar} text={'INGRESAR'} />
        </div>
    )
}
