import { Link } from "react-router-dom";
import logo from '../../assets/img/Logo.png';
import styles from "./Header.module.css";
import Menu from "../Menu";

function Header() {
    return(
        <header className={styles.header}>
            <section className={styles.HeaderContainer}>
                <Link to='/'>
                    <img className={styles.logo} src={logo} alt="Logo AluraFlix" ></img>
                </Link>
                <nav>
                    <Menu url='/'>Home</Menu>
                    <Menu url='/NovoVideo'>Novo Vídeo</Menu>
                </nav>
            </section>
        </header>
    )
}

export default Header;