import styles from './Card.module.css';
import iconeEditar from '../../assets/img/editar.png';
import iconeDeletar from '../../assets/img/deletar.png';

function Card({ id, titulo, img, cor, url, openModal }) {
    return (
        <div className={styles.cardContainer} style={{ borderColor: cor }}>
            <img src={img} alt={titulo} className={styles.capa} onClick={() => openModal(url)} />
            <h3 className={styles.cardTitle} style={{ color: cor }}>{titulo}</h3>
            <div className={styles.buttonContainer}>
                <div>
                    <img src={iconeEditar} alt="Editar Vídeo" className={styles.editarVideo} />
                    <p>Editar</p>
                </div>
                <div>
                    <img src={iconeDeletar} alt="Deletar Vídeo" className={styles.deletarVideo} />
                    <p>Deletar</p>
                </div>
            </div>
        </div>
    );
}

export default Card;
