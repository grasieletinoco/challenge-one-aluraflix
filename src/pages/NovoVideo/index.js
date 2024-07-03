import { useState } from "react";
import Footer from "../../components/Footer";
import Formulario from "../../components/Formulario";
import Header from "../../components/Header";

function NovoVideo() {

    const [videos, setVideos] = useState([])

    const aoNovoVideoAdicionado = (video) => {
        console.log(video)
        setVideos([...videos, video])
    }

    return (
        <>
            <Header/>
            <Formulario aoVideoCadastrado={video => aoNovoVideoAdicionado(video)}/>
            <Footer/>
        </>
    )
}

export default NovoVideo;
