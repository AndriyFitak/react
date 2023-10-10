import s from './header.module.scss'
const  Header = (props) => {
    return (
        <div className={s.header}>
            <h1 className={s.logotext}></h1>
            <ul className={s.nav}>
                <li className={s.nav_element}>Home</li>
                <li className={s.nav_element}>About me</li>
                <li className={s.nav_element}>Shop</li>
            </ul>
        </div>
    )
}
export default Header