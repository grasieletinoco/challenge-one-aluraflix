import styles from './ListaSuspensa.module.css'

function ListaSuspensa(props) {
    return(
        <div className={styles.ListaSuspensa}>
            <label>{props.label}</label>
            <select  onChange={evento => props.aoAlterado(evento.target.value)} required={props.required}>
                {props.itens.map(item => {
                    return <option key={item}>{item}</option>
                })}
            </select>
        </div>
    )
}

export default ListaSuspensa;
