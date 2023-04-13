import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import afc from '../../../img/amafroncard.png'
import af from '../../../img/Amafron.png'
import mfc from '../../../img/mediafrankcard.png'
import pfc from '../../../img/portfoliocard.png'
import rdc from '../../../img/Rescue.png'
import pdc from '../../../img/plantascard.png'
import InfoIcon from '@mui/icons-material/Info';
import amafroncard from '../../../img/amafroncard.png'

function Msg2() {
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
                        <Modal.Title>Amafron</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <p>Amafron, una de las mejores páginas de Francisco la cuál le ayudó a entender como funciona HTML, CSS y sobre todo flexbox y el Responsive Web Design</p>
                    <hr />
                    <figure id='modal2'>
                    <img src={amafroncard}/>    
                    </figure>
                    <hr />
                    <p>Puedes encotrar mi página de Amafron en el siguiente enlace: <a href="https://frparra.vercel.app/Mi%20pagina%20de%20Amafon/html/amazon.html">Amafron.es</a></p>
                    </Modal.Body>
                </Modal>
            </div>
        </>
    );
}

export default Msg2;
