import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import afc from '../../../img/amafroncard.png'
import af from '../../../img/Amafron.png'
import mfc from '../../../img/mediafrankcard.png'
import pfc from '../../../img/portfoliocard.png'
import rdc from '../../../img/Rescue.png'
import pdc from '../../../img/plantascard.png'
import InfoIcon from '@mui/icons-material/Info';
import rescuecard from '../../../img/rescuecard.png'

function Msg5() {
    const [showmodal, setmodal] = React.useState(false);
    const close = () => setmodal(false);
    const open = () => setmodal(true);


    return (
        <>
            <div id="proyects">
                <Button variant="primary" onClick={open}>
                    <InfoIcon />
                </Button>
                <Modal show={showmodal} onHide={close}>
                    <Modal.Header closeButton>
                        <Modal.Title>Rescue in the Dungeon</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>Rescue in the Dungeon es un juego creado por Francisco en la plataforma de creación de juegos Scratch que hizo que Francisco y su grupo ganaran el 1º puesto en la modalidad de ciclos formativos en la VI edición de creación de videojuegos organizada por la univerdad de Almería.</p>
                        <hr />
                        <figure id='modal2'>
                            <img src={rescuecard} />
                        </figure>
                        <hr />
                        <p>Puedes encontrar el link a Rescue in the Dungeon aquí: <a href='https://scratch.mit.edu/projects/502017441/'>Rescue.es</a></p>
                    </Modal.Body>
                </Modal>
            </div>
        </>
    );
}

export default Msg5;
