import { useState } from 'react'
import styles from './Formulario.module.css'
import CampoTexto from "../CampoTexto";
import ListaSuspensa from '../ListaSuspensa';
import FormButton from '../FormButton';
import CampoMensagem from '../CampoMensagem';

function Formulario(props) {

    const categorias = [
        'Selecione Uma Categoria',
        'Front-End',
        'Back-End',
        'Mobile',
    ]

    const [titulo, setTitulo] = useState('')
    const [categoria, setCategoria] = useState('')
    const [imagem, setImagem] = useState('')
    const [video, setVideo] = useState('')
    const [descricao, setDescricao] = useState('')

    const aoCadastrar = (evento) => {
        evento.preventDefault();
        props.aoVideoCadastrado({
            titulo,
            categoria,
            imagem,
            video,
            descricao
        });
        aoLimpar();
    };

    const aoLimpar = (evento) => {
        if (evento) evento.preventDefault();
        setTitulo('');
        setCategoria('Selecione Uma Categoria');
        setImagem('');
        setVideo('');
        setDescricao('');
    };

    return(
        <section className={styles.FormularioContainer}>
            <div className={styles.descricao}>
                <h1>NOVO VIDEO</h1>
                <p>Complete o formulário para criar um novo card de vídeo.</p>
            </div>
            <form className={styles.formulario} onSubmit={aoCadastrar}>
                <h2>Criar Card</h2>
                <div>
                    <CampoTexto
                        obrigatorio={true}
                        label="Nome"
                        placeholder="Digite o Seu Nome"
                        valor={titulo}
                        aoAlterado={valor => setTitulo(valor)}
                    />                  
                    <ListaSuspensa
                        obrigatorio={true}
                        label="Categoria"
                        itens={categorias}
                        valor={categoria}
                        aoAlterado={valor => setCategoria(valor)}
                    />
                    <CampoTexto
                        obrigatorio={true}
                        label="Imagem"
                        placeholder="O Link é Obrigatório"
                        valor={imagem}
                        aoAlterado={valor => setImagem(valor)}
                    />
                    <CampoTexto
                        obrigatorio={true}
                        label="Vídeo"
                        placeholder="Digite o Link do Vídeo"
                        valor={video}
                        aoAlterado={valor => setVideo(valor)}
                    />
                    <CampoMensagem
                        obrigatorio={true}
                        label="Descrição"
                        placeholder="Sobre o que é Esse Vídeo?"
                        valor={descricao}
                        aoAlterado={valor => setDescricao(valor)}
                    />
                    <div className={styles.formButton}>
                        <FormButton type="submit">Cadastrar</FormButton>
                        <FormButton type="reset" onClick={aoLimpar}>Limpar</FormButton>
                    </div>   
                </div>            
            </form>
        </section>
    )
}

export default Formulario;
