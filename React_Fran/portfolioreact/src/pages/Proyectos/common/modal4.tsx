import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import afc from '../../../img/amafroncard.png'
import af from '../../../img/Amafron.png'
import mfc from '../../../img/mediafrankcard.png'
import pfc from '../../../img/portfoliocard.png'
import rdc from '../../../img/Rescue.png'
import pdc from '../../../img/plantascard.png'
import InfoIcon from '@mui/icons-material/Info';
import Portfolio from '../../../img/Portfolio.png'

function Msg4() {
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
                        <Modal.Title>PortfolioV1</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>PortfolioV1 es el primer portfolio creado por Francisco en el cuál empezó a investigar sobre JS para crear modos oscuros, relojes y menús, el diseño no es el mejor del mundo pero me ayudó a aprender mucho sobre JS y que podía mejorar</p>
                        <hr />
                        <figure id='modal2'>
                            <img src={Portfolio} />
                        </figure>
                        <hr />
                        <p>Puedes encontrar el link a PortfolioV1 aquí: <a href='https://frparra.vercel.app/Portfolio/index.html'>Portfolio.es</a></p>
                    </Modal.Body>
                </Modal>
            </div>
        </>
    );
}

export default Msg4;

