import styles from './Footer.module.css'
import logoFooter from '../../assets/img/Logo.png';
import { Link } from 'react-router-dom';

function Footer(){
    return(
        <footer className={styles.footer}>
            <img className={styles.logoFooter} src={logoFooter} alt="Logo AluraFlix" ></img>
            
            <p className={styles.attribution}>Desenvolvido por <Link className={styles.attributionName} to="https://github.com/grasieletinoco" target='_blank'>Grasiele Tinoco</Link> </p>
        </footer>
    )
}

export default Footer;