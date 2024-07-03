import styles from "./FormButton.module.css"

function FormButton({children, onClick }) {
    return (
        <>
            <button className= {styles.formButton} onClick={onClick}> {children} </button>
        </>
    )
}

export default FormButton;
