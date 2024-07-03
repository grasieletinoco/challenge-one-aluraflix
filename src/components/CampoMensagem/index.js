import styles from "./CampoMensagem.module.css"

function CampoMensagem(props) {
    return(
        <div className={styles.CampoTexto}>
            <label>{props.label}</label>
            <textarea value={props.valor} onChange={evento => props.aoAlterado(evento.target.value)} required={props.obrigatorio} placeholder={props.placeholder}/>
        </div>
    )
}

export default CampoMensagem;
