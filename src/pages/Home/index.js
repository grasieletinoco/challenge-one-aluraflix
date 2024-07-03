import { useState } from 'react';
import styles from './Home.module.css';
import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Videos from '../../data/db.json';
import Card from '../../components/Card';
import Modal from '../../components/ModalVideo/index';

function Home() {
    const [modalOpen, setModalOpen] = useState(false);
    const [videoUrl, setVideoUrl] = useState('');

    const openModal = (url) => {
        setVideoUrl(url);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
        setVideoUrl('');
    };

    return (
        <>
            <Header/>
            <Banner/>
           
            <section className={styles.container}>
                {Videos.cards.map((category) => (
                    <div key={category.categoria} className={styles.categorySection}>
                        <h2 className={styles.categoryTitle} style={{ backgroundColor: category.cor }}>
                            {category.categoria}
                        </h2>
                        <div className={styles.cardsContainer}>
                            {category.videos.map((video) => (
                                <Card
                                    key={video.id}
                                    id={video.id}
                                    titulo={video.titulo}
                                    img={video.img}
                                    cor={category.cor}
                                    url={video.url}
                                    openModal={openModal}
                                />
                            ))}
                        </div>
                    </div>
                ))}
            </section>            
            <Footer/>
            {modalOpen && <Modal videoUrl={videoUrl} closeModal={closeModal} />}
        </>
    );
}

export default Home;
